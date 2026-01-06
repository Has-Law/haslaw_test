import { getAllBatches } from "@/lib/career";
import CareerBatchClient from "./Batch-list";

// Untuk static export, hanya path yang di-generate saat build yang valid
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const batches = await getAllBatches();
        
        if (!batches || batches.length === 0) {
            console.warn('No batches found for generateStaticParams');
            return [];
        }
        
        return batches.map((batch) => ({
            id: batch.id.toString(),
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

type Props = {
  params: Promise<{
    id: string;
  }>
}

export default async function CareerBatchPage({ params }: Props) {
  const { id } = await params;
  return <CareerBatchClient batchId={id} />;
}