import { StaticImageData } from 'next/image';
import foto from "@/assets/member/foto.webp";
import fotoDetail from "@/assets/member/foto-detail.webp";

export type FilterKey = 'seniorPartner' | 'partner' | 'ofCounsel' | 'associates';

export interface Advocate {
    id: number;
    name: string;
    title: string;
    category: FilterKey;
    image: StaticImageData;
    imageDetail: StaticImageData;
}

export const advocatesData: Advocate[] = [
    {
        id: 1,
        name: "Henricus Herikes, S.H.",
        title: "Senior Partner",
        category: "seniorPartner",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 2,
        name: "Alexander Frans, S.H.",
        title: "Senior Partner",
        category: "seniorPartner",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 3,
        name: "Muzammi Merah Hakim, S.H., M.H.",
        title: "Senior Partner",
        category: "seniorPartner",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 4,
        name: "Agus Askin Harta Mulya, S.H., M.H.",
        title: "Managing Partner",
        category: "partner",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 5,
        name: "Yohanes Andersen, S.H.",
        title: "Partner",
        category: "partner",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 6,
        name: "Maria Kristina, S.H., M.H.",
        title: "Of Counsel",
        category: "ofCounsel",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 7,
        name: "David Santoso, S.H.",
        title: "Associate",
        category: "associates",
        image: foto,
        imageDetail: fotoDetail
    },
    {
        id: 8,
        name: "Sarah Wijaya, S.H.",
        title: "Associate",
        category: "associates",
        image: foto,
        imageDetail: fotoDetail
    }
];