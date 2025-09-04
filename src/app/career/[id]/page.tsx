// app/career/[id]/page.tsx (Server Component - tanpa "use client")
import { getOpenBatches } from "@/lib/career";
import CareerBatchClient from "./Batch-list";

// generateStaticParams harus di Server Component
export async function generateStaticParams() {
    try {
        const batches = await getOpenBatches(); // Menggunakan fungsi yang sudah ada
        
        return batches.map((batch) => ({
            id: batch.id.toString(), // Pastikan id dalam bentuk string
        }));
    } catch (error) {
        console.error('Error generating static params for career:', error);
        return []; // Return array kosong jika error
    }
}

type Props = {
    params: Promise<{
        id: string;
    }>
}

// Server Component sebagai wrapper
export default async function CareerBatchPage({ params }: Props) {
    const { id } = await params;
    
    // Pass id ke Client Component
    return <CareerBatchClient batchId={id} />;
}