import Main from "@/components/news/Main";
import { Metadata } from "next";

export const metadata: Metadata = { 
    title: 'News'
}


const NewsPage = async () => {
    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <Main/>
        </div>
    )
}

export default NewsPage;