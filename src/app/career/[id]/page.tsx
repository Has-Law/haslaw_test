import { getOpenBatches } from "@/lib/career";
import CareerBatchClient from "./Batch-list";

export async function generateStaticParams() {
  try {
    console.log('Generating static params for career...');
    const batches = await getOpenBatches();
    
    console.log('Found batches:', batches?.length || 0);
    
    if (!batches || batches.length === 0) {
      console.warn('No open batches found, providing fallback params');
      return [{ id: '1' }];
    }
    
    const params = batches.map((batch) => ({
      id: batch.id.toString(),
    }));
    
    console.log('Generated params:', params);
    return params;
    
  } catch (error) {
    console.error('Error generating static params for career:', error);
    return [{ id: '1' }];
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