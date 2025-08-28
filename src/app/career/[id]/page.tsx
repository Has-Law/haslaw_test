"use client";
import React, { useEffect, useState } from "react";
import { getBatch, submitApplication, BatchData } from "@/lib/career";
import { useParams } from "next/navigation";
import Image from "next/image";
import lawyersImg from "@/assets/career/image/lawyers-full.jpg";
import staffImg from "@/assets/career/image/staff-full.jpg";
import internshipImg from "@/assets/career/image/internship-full.jpg";
import { getOtherOpenBatches } from "@/lib/career";
import { useRouter } from "next/navigation";

const OpportunityCard = ({ image, label, onClick }) => (
    <div 
        className="flex-1 rounded-lg overflow-hidden shadow-lg cursor-pointer group" 
        onClick={onClick}
    >
        <div className="relative h-48 overflow-hidden">
            <Image 
                src={image} 
                alt={label} 
                layout="fill" 
                objectFit="cover" 
                className="group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-[clamp(1.75rem,4vw,2.25rem)] font_britanica_black drop-shadow-md">
                {label}
            </h3>
        </div>
    </div>
);


export default function CareerBatchPage() {
    const [batch, setBatch] = useState<BatchData | null>(null);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState<Record<string, string | string[]>>({});
    const [files, setFiles] = useState<Record<string, File | null>>({});
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [otherBatches, setOtherBatches] = useState<any[]>([]);
    const router = useRouter();

    const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);
    const [finalApplicantInfo, setFinalApplicantInfo] = useState({ name: '', email: '' });
    const [modalError, setModalError] = useState('');

    const params = useParams();
    const batchId = Array.isArray(params?.id) ? params.id[0] : params?.id;

    useEffect(() => {
        if (!batchId) return;
        setLoading(true);
        getBatch(batchId)
            .then(data => {
                setBatch(data);
                setLoading(false);
                if (data?.batch_type) {
                    getOtherOpenBatches(data.batch_type).then(setOtherBatches);
                }
            })
            .catch(() => setError("Failed to load batch info"));
    }, [batchId]);

    const handleCheckboxChange = (field: string, option: string, checked: boolean) => {
        setForm(prev => {
            const prevValues = (prev[field] as string[] | undefined) || [];
            if (checked) {
                return { ...prev, [field]: [...prevValues, option] };
            } else {
                return { ...prev, [field]: prevValues.filter(v => v !== option) };
            }
        });
    };
    
    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (field: string, file: File | null) => {
        setFiles(prev => ({ ...prev, [field]: file }));
    };

    const handleInitialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        if (!batch) return;

        for (const field of batch.form_fields) {
            if (field.is_required) {
                const key = `field_${field.id}`;
                if (field.input_type.startsWith("File")) {
                    if (!files[key]) {
                        setError(`${field.field_label} is required.`);
                        return;
                    }
                } else {
                    const val = form[key];
                    if (!val || (Array.isArray(val) && val.length === 0)) {
                        setError(`${field.field_label} is required.`);
                        return;
                    }
                }
            }
        }
        
        setIsFinalModalOpen(true); 
    };

    const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setModalError('');
        if (!finalApplicantInfo.name || !finalApplicantInfo.email) {
            setModalError('Full Name and Email are required.');
            return;
        }
        if (!batch || !batchId) return;

        const formData = new FormData();
        formData.append('applicant_name', finalApplicantInfo.name);
        formData.append('email', finalApplicantInfo.email);
        
        for (const key in form) {
            const value = form[key];
            if (Array.isArray(value)) formData.append(key, value.join(","));
            else if (value !== undefined) formData.append(key, value as string);
        }
        
        for (const key in files) {
            if (files[key]) formData.append(key, files[key]!);
        }

        try {
            await submitApplication(batchId, formData);
            setSuccess("Application submitted successfully!");
            setForm({});
            setFiles({});
        } catch {
            setError("Failed to submit application. Please try again.");
        } finally {
            setIsFinalModalOpen(false);
        }
    };

    return (
        <>
            {isFinalModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                        <h2 className="text-2xl font_britanica_bold text-[#4F000D] text-center mb-2">Final Step</h2>
                        <p className="text-center text-gray-600 mb-6">Please provide your name and email to complete the submission.</p>
                        <form onSubmit={handleFinalSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[#4F000D] text-sm font-semibold mb-1">Full Name <span className="text-red-600">*</span></label>
                                    <input type="text" value={finalApplicantInfo.name} onChange={(e) => setFinalApplicantInfo(prev => ({ ...prev, name: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#4F000D]" required />
                                </div>
                                <div>
                                    <label className="block text-[#4F000D] text-sm font-semibold mb-1">Email Address <span className="text-red-600">*</span></label>
                                    <input type="email" value={finalApplicantInfo.email} onChange={(e) => setFinalApplicantInfo(prev => ({ ...prev, email: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#4F000D]" required />
                                </div>
                            </div>
                            {modalError && <p className="text-red-600 text-center text-sm mt-4">{modalError}</p>}
                            <div className="flex justify-center gap-4 mt-6">
                                <button type="button" onClick={() => setIsFinalModalOpen(false)} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold">Cancel</button>
                                <button type="submit" className="bg-[#4F000D] text-white px-6 py-2 rounded-lg hover:bg-[#7A0015] transition-colors font-semibold">Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-[#F6F6F6] min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                {loading && <div className="py-20 text-center text-lg">Loading...</div>}
                {error && !batch && <div className="py-20 text-center text-red-600 text-lg">{error}</div>}
                
                {success ? (
                    <div className="py-20 text-center text-green-600 text-2xl font-semibold">{success}</div>
                ) : (
                    batch && (
                        <>
                            <div className="text-center max-w-5xl mx-auto">
                                <h1 className="font_britanica_bold text-[#780014] mb-4 text-[clamp(2.5rem,5vw,3.75rem)]">{batch.batch_name} Application Form</h1>
                                <p className="font_britanica_regular leading-relaxed text-[clamp(1rem,4vw,1.5rem)]">
                                    Begin your legal career journey here. Our internship program is designed to provide hands-on experience with real cases under the guidance of our experienced lawyers. We are looking for young, passionate talent ready to take on a challenge.
                                </p>
                            </div>

                            <form onSubmit={handleInitialSubmit} className="bg-white rounded-2xl shadow-xl p-[clamp(1.5rem,4vw,2.5rem)] w-full max-w-5xl mt-12">
                                <div className="grid grid-cols-1 font_britanica_regular md:grid-cols-2 gap-x-8 gap-y-6">
                                    {batch.form_fields.map(field => {
                                        const key = `field_${field.id}`;
                                        return (
                                            <div key={field.id} className={field.input_type === "Paragraph" || field.input_type.startsWith("File") ? "md:col-span-2" : ""}>
                                                <label className="block text-gray-800 font-semibold mb-2 text-[clamp(0.875rem,2vw,1.125rem)]">
                                                    {field.field_label} {field.is_required && <span className="text-[#A0001B]">*</span>}
                                                </label>
                                                {field.input_type === "Short Text" && (
                                                    <input type="text" required={field.is_required} className="w-full border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder={`Enter your ${field.field_label}`} value={(form[key] as string) || ""} onChange={e => handleChange(key, e.target.value)} />
                                                )}
                                                {field.input_type === "Email" && (
                                                    <input type="email" required={field.is_required} className="w-full border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder={`Enter your ${field.field_label}`} value={(form[key] as string) || ""} onChange={e => handleChange(key, e.target.value)} />
                                                )}
                                                {field.input_type === "Phone Numbers" && (
                                                    <input type="tel" required={field.is_required} className="w-full border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder={`Enter your ${field.field_label}`} value={(form[key] as string) || ""} onChange={e => handleChange(key, e.target.value)} />
                                                )}
                                                {field.input_type === "URL" && (
                                                    <input type="url" required={field.is_required} className="w-full border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder={`Enter URL`} value={(form[key] as string) || ""} onChange={e => handleChange(key, e.target.value)} />
                                                )}
                                                {field.input_type === "Dropdown" && field.options && (
                                                    <select required={field.is_required} className="w-full border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B] bg-white" value={(form[key] as string) || ""} onChange={e => handleChange(key, e.target.value)}>
                                                        <option value="">Choose an option</option>
                                                        {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                )}
                                                {field.input_type === "Paragraph" && (
                                                    <textarea required={field.is_required} className="w-full border-2 border-[#323232] rounded-xl px-4 py-3 text-lg min-h-[160px] focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder={`Write your ${field.field_label}`} value={(form[key] as string) || ""} onChange={e => handleChange(key, e.target.value)} />
                                                )}
                                                {field.input_type === "Checkboxes" && field.options && (
                                                    <div className="flex flex-col gap-2 mt-2">
                                                        {field.options.map(opt => (
                                                            <label key={opt} className="inline-flex items-center gap-2 cursor-pointer">
                                                                <input 
                                                                    type="checkbox" 
                                                                    className="rounded h-5 w-5 text-[#A0001B] focus:ring-[#A0001B]/50"
                                                                    checked={(form[key] as string[] | undefined)?.includes(opt) || false} 
                                                                    onChange={e => handleCheckboxChange(key, opt, e.target.checked)}
                                                                />
                                                                <span className="text-gray-700 text-[clamp(0.875rem,2vw,1rem)]">{opt}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                                {field.input_type.startsWith("File") && (
                                                    <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:border-[#4F000D] transition-colors">
                                                        <input type="file" required={field.is_required} className="hidden" id={`file-${field.id}`} onChange={e => handleFileChange(key, e.target.files?.[0] || null)} />
                                                        <label htmlFor={`file-${field.id}`} className="flex flex-col items-center cursor-pointer text-center">
                                                            <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                                            <span className="font-semibold text-gray-600">Click to upload or drag and drop</span>
                                                            <span className="text-xs text-gray-500 mt-1">jpg, png, jpeg, pdf - Up to 50MB</span>
                                                            {files[key] && <span className="text-sm text-[#4F000D] mt-2 font-semibold">{files[key]?.name}</span>}
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="md:col-span-2 text-center mt-10">
                                    <button type="submit" className="bg-[#A0001B] text-white px-14 py-4 rounded-full hover:bg-[#780014] transition-colors font_britanica_bold text-xl shadow-lg">Apply</button>
                                </div>
                                {error && <div className="text-red-600 text-center mt-4 md:col-span-2">{error}</div>}
                            </form>
                            
                            <div className="w-full max-w-5xl mt-20 text-center">
                                <h2 className="text-[clamp(2rem,4vw,2.75rem)] font_britanica_black text-[#4F000D] mb-8">Other Opportunities</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {otherBatches.map((b) => {
                                        let img = internshipImg;
                                        let label = "Internship";
                                        if (b.batch_type.toLowerCase() === "lawyers") {
                                            img = lawyersImg;
                                            label = "Lawyers";
                                        } else if (b.batch_type.toLowerCase() === "staff") {
                                            img = staffImg;
                                            label = "Staff";
                                        }
                                        return (
                                            <OpportunityCard key={b.id} image={img} label={label} onClick={() => router.push(`/career/${b.id}`)} />
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )
                )}
            </div>
        </>
    );
}