'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BookRead from "@/app/components/bookread/bookread";

const queryClient = new QueryClient();

export default function Book({params} : {params: { bookid: string }}){
    return(
        <>
            <a href="/read" className="pt-[80px] pl-4 block"><span className="font-black text-lg">&#8617;</span> Back</a>
            <QueryClientProvider client={queryClient}>
                <BookRead bookid={params.bookid}/>
            </QueryClientProvider>
        </>
    )
}