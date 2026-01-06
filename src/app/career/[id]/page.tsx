import CareerBatchClient from "./Batch-list";

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

export default function CareerBatchPage() {
    return <CareerBatchClient />;
}