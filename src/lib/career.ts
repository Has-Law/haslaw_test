export interface FormField {
  id: number;
  field_label: string;
  input_type: string;
  is_required: boolean;
  options?: string[];
}

export interface BatchData {
  batch_name: string;
  batch_type: string;
  application_start: string;
  application_end: string;
  status: string;
  form_fields: FormField[];
}


export interface BatchListItem {
  id: number;
  batch_name: string;
  batch_type: string;
  status: string;
}



const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function getBatch(batchId: string | number): Promise<BatchData> {
  const res = await fetch(`${API_BASE_URL}/api/v1/careers/batches/${batchId}`);
  if (!res.ok) throw new Error("Failed to fetch batch");
  const data = await res.json();
  return data.data;
}

export async function submitApplication(batchId: string | number, formData: FormData) {
  const res = await fetch(`${API_BASE_URL}/api/v1/careers/batches/${batchId}/apply`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to submit application");
  return res.json();
}

export async function getOtherOpenBatches(currentType: string): Promise<BatchListItem[]> {
  let url = `${API_BASE_URL}/api/v1/careers/batches?status=Open`;
  const exclude = [currentType.toLowerCase()];
  const types = ["Internship", "Lawyers", "Staff"].filter(t => !exclude.includes(t.toLowerCase()));
  url += types.map(t => `&batch_type=${encodeURIComponent(t)}`).join("");
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch other open batches");
  const data = await res.json();
  return data.data.filter((b: BatchListItem) => types.includes(b.batch_type));
}


export async function getOpenBatches(type?: string): Promise<BatchListItem[]> {
  let url = `${API_BASE_URL}/api/v1/careers/batches?status=Open`;
  if (type) url += `&batch_type=${encodeURIComponent(type)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch open batches");
  const data = await res.json();
  return data.data;
}
