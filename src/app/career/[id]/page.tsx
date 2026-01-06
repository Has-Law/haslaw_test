import { getAllBatches } from "@/lib/career";
import CareerBatchClient from "./Batch-list";

// PENTING: Set false untuk kompatibilitas dengan static export
// Di Vercel (tanpa output:'export'), Next.js akan tetap bisa generate halaman baru on-demand
// karena generateStaticParams hanya pre-render, bukan membatasi
export const dynamicParams = false;

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