import { StaticImageData } from "next/image"
import hukum25 from "@/assets/achievments/hukum25.png"
import hukum from "@/assets/achievments/hukum.png"
import star from "@/assets/achievments/star25.png"
export interface achievmentsItem {
    id: number
    image: StaticImageData
    name: string
}

const achievmentsItem = [
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