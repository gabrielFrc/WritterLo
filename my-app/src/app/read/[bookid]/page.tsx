'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BookRead from "@/app/components/bookread/bookread";

const queryClient = new QueryClient();

export default function Book({params} : {params: { bookid: string }}){
    return(
        <QueryClientProvider client={queryClient}>
            <BookRead bookid={params.bookid}/>
        </QueryClientProvider>
    )
}