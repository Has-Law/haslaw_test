'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type Member } from "@/lib/members";

type FilterKey = 'seniorPartner' | 'partner' | 'ofCounsel' | 'associates';

interface FiltersState {
    seniorPartner: boolean;
    partner: boolean;
    ofCounsel: boolean;
    associates: boolean;
}

const mapTitleToFilterKey = (title: string): FilterKey | null => {
    const lowerCaseTitle = title.toLowerCase();
    if (lowerCaseTitle.includes('senior partner')) return 'seniorPartner';
    if (lowerCaseTitle.includes('partner')) return 'partner';
    if (lowerCaseTitle.includes('of counsel')) return 'ofCounsel';
    if (lowerCaseTitle.includes('associate')) return 'associates';
    return null;
};

const Main = ({ members }: { members: Member[] }) => {
    const [filters, setFilters] = useState<FiltersState>({
        seniorPartner: false,
        partner: false,
        ofCounsel: false,
        associates: false
    });

    const handleFilterChange = (filterName: FilterKey) => {
        setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
    };

    const resetFilters = () => {
        setFilters({ seniorPartner: false, partner: false, ofCounsel: false, associates: false });
    };

    const filteredMembers = members.filter(member => {
        const hasActiveFilters = Object.values(filters).some(filter => filter);
        if (!hasActiveFilters) return true;
        const memberCategory = mapTitleToFilterKey(member.title_position);
        return memberCategory ? filters[memberCategory] : false;
    });

    const AdvocateCard = ({ advocate }: { advocate: Member }) => (
        <div className="group relative bg-white rounded-lg shadow-md hover:bg-[#A0001B] transition-all duration-300 pr-4 hover:scale-105"
            style={{ boxShadow: "0px 0px 4px 4px #00000033" }}
        >
            <Link href={`/member/${advocate.id}`} className="flex items-center">
                <div className="relative w-28 md:w-[12vw] h-auto -mt-8 md:-mt-[4vw] mr-4 md:mr-6 flex-shrink-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${advocate.display_image}`}
                        alt={advocate.full_name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex-1 py-4">
                    <h3 className="text-lg md:text-[clamp(2vw,2vw,2rem)] font_britanica_black text-[#131313] mb-1 leading-tight group-hover:text-white">
                        {advocate.full_name}
                    </h3>
                    <p className="text-sm md:text-[clamp(1.3vw,1.3vw,1.5rem)] font_britanica_bold text-[#780014] group-hover:text-white">
                        {advocate.title_position}
                    </p>
                </div>
            </Link>
        </div>
    );

    return (
   
        <div className="flex flex-col lg:flex-row w-full min-h-screen px-6 lg:px-[5vw] py-8 gap-8">
            
            <div className="w-full lg:w-[30vw] flex flex-col gap-y-6 lg:gap-y-[2vw]">
                <h1 className="text-5xl lg:text-[clamp(3vw,3vw,6rem)] font_britanica_black text-[#5E0503] leading-tight">
                    Meet Your<br />
                    Advocates
                </h1>

                <div className="w-full flex flex-col gap-y-4 lg:gap-y-[1vw]">
                    <div className="flex justify-between items-center py-2 lg:py-[1vw] border-b border-black/50">
                        <h3 className="text-3xl lg:text-[clamp(2vw,2vw,4rem)] font_britanica_black text-[#780014]">Filter by</h3>
                        <button
                            onClick={resetFilters}
                            className="cursor-pointer text-sm lg:text-[clamp(1vw,1vw,2rem)] text-[#A0001B] hover:text-gray-700 transition-colors hover:underline hover:underline-offset-4"
                        >
                            Reset Filters
                        </button>
                    </div>

                    <div className="space-y-2 lg:space-y-[0.5vw]">
                      
                        <div className="flex items-center justify-between py-3 lg:py-[1vw] border-b border-black/50">
                            <label className="text-[#131313] text-lg lg:text-[clamp(1.5vw,1.5vw,2rem)] font_britanica_bold cursor-pointer flex-1">
                                Senior Partner
                            </label>
                            <div
                                onClick={() => handleFilterChange('seniorPartner')}
                                className={`w-6 h-6 lg:w-[2vw] lg:h-[2vw] border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200 ${filters.seniorPartner ? 'bg-[#A0001B] border-[#A0001B]' : 'border-[#D1D1D6]'}`}
                            >
                                {filters.seniorPartner && <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                            </div>
                        </div>
                    
                        <div className="flex items-center justify-between py-3 lg:py-[1vw] border-b border-black/50">
                            <label className="text-[#131313] text-lg lg:text-[clamp(1.5vw,1.5vw,2rem)] font_britanica_bold cursor-pointer flex-1">
                                Partner
                            </label>
                            <div
                                onClick={() => handleFilterChange('partner')}
                                className={`w-6 h-6 lg:w-[2vw] lg:h-[2vw] border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200 ${filters.partner ? 'bg-[#A0001B] border-[#A0001B]' : 'border-[#D1D1D6]'}`}
                            >
                                {filters.partner && <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                            </div>
                        </div>
                 
                        <div className="flex items-center justify-between py-3 lg:py-[1vw] border-b border-black/50">
                            <label className="text-[#131313] text-lg lg:text-[clamp(1.5vw,1.5vw,2rem)] font_britanica_bold cursor-pointer flex-1">
                                Of Counsel
                            </label>
                            <div
                                onClick={() => handleFilterChange('ofCounsel')}
                                className={`w-6 h-6 lg:w-[2vw] lg:h-[2vw] border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200 ${filters.ofCounsel ? 'bg-[#A0001B] border-[#A0001B]' : 'border-[#D1D1D6]'}`}
                            >
                                {filters.ofCounsel && <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                            </div>
                        </div>
                    
                        <div className="flex items-center justify-between py-3 lg:py-[1vw] border-b border-black/50">
                            <label className="text-[#131313] text-lg lg:text-[clamp(1.5vw,1.5vw,2rem)] font_britanica_bold cursor-pointer flex-1">
                                Associates
                            </label>
                            <div
                                onClick={() => handleFilterChange('associates')}
                                className={`w-6 h-6 lg:w-[2vw] lg:h-[2vw] border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200 ${filters.associates ? 'bg-[#A0001B] border-[#A0001B]' : 'border-[#D1D1D6]'}`}
                            >
                                {filters.associates && <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mt-[3vw]">
                <div className="grid grid-cols-1 gap-12 lg:gap-[4vw]">
                    {filteredMembers.map((advocate) => (
                        <AdvocateCard key={advocate.id} advocate={advocate} />
                    ))}
                </div>
                {filteredMembers.length === 0 && (
                    <div className="text-center text-gray-500 mt-12">
                        <p className="text-lg">No advocates found matching the selected filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;