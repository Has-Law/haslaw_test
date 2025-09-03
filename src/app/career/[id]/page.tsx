import { getOpenBatches } from "@/lib/career";
import CareerBatchClient from "./Batch-list";



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