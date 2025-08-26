import { StaticImageData } from "next/image"
import hukum25 from "@/assets/achievments/hukum25.png"
import hukum from "@/assets/achievments/hukum.png"
import star from "@/assets/achievments/star25.png"
import next26 from "@/assets/achievments/next26.png"
import litigation from "@/assets/achievments/litigation.png"
import hukum24 from "@/assets/achievments/hukum24.png"
import iflr from "@/assets/achievments/iflr.png"
import alb from "@/assets/achievments/alb.png"
import next24 from "@/assets/achievments/next24.png"
import star24 from "@/assets/achievments/star24.png"
import leader24 from "@/assets/achievments/leader24.png"
import hukum23 from "@/assets/achievments/hukum23.png"
import alb23 from "@/assets/achievments/alb23.png"
import leader23 from "@/assets/achievments/leader23.png"
export interface achievmentsItem {
    id: number
    image: StaticImageData
    name: string
}

const achievments: achievmentsItem[] = [
    {
        id: 1,
        image: hukum25,
        name: "Practice Leaders 2025"
    },
    {
        id: 2,
        image: hukum,
        name : "Hukumonline"
    },
    {
        id: 3,
        image: star,
        name: "Indonesian Rising Stars"
    }
]