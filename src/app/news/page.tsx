import Main from "@/components/news/Main";
import { getAllNews } from "@/lib/news"; 
import { Metadata } from "next";

export const metadata: Metadata = { 
    title: 'News'
}


const NewsPage = async () => {

    const allNews = await getAllNews();

    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <Main news={allNews} />
        </div>
    )
}

export default NewsPage;