import { getAllBatches } from "@/lib/career";
import CareerBatchClient from "./Batch-list";

// Di Vercel: izinkan dynamic params (batch baru otomatis bisa diakses)
// Di cPanel: hanya batch yang ter-generate saat build yang valid
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    console.log('Generating static params for career...');
    const batches = await getAllBatches();

    console.log('Found batches:', batches?.length || 0);

    if (!batches || batches.length === 0) {
      console.warn('No batches found, providing fallback params');
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