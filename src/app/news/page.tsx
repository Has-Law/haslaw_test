import Main from "@/components/news/Main";
import { Metadata } from "next";

export const metadata: Metadata = { 
    title: 'News',
    description: "Stay updated with the latest legal insights, regulatory changes, and firm news from HAS Attorneys at Law. Expert analysis on the Indonesian legal landscape.",
}


const NewsPage = async () => {
    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <Main/>
        </div>
    )
}

export default NewsPage;