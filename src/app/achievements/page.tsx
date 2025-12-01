import Achievements from "@/components/achievment/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Awards & Achievements',
  // PILIH SALAH SATU DESKRIPSI:
  
  // Opsi 1: Fokus Prestasi (Authority Building)
  description: "Recognized excellence. HAS Attorneys at Law is consistently ranked by IFLR 1000, ALB, and Hukumonline as a top-tier Indonesian law firm in litigation and corporate law.",

  // Opsi 2: Daftar Penghargaan (Keyword Rich)
  // description: "Explore our track record. Winner and finalist in ALB Indonesia Law Awards, Hukumonline Top 100, and Benchmark Litigation. Dedicated to high standards of legal practice."
}

const AchievmentsPage = () => {
    return (
        <div>
            <Achievements/>
        </div>
    )
}
export default AchievmentsPage;