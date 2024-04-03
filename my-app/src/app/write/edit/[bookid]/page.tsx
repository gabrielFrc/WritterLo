'use client'

import { BookEdit } from "@/app/components/bookedit/bookedit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function BookEditProvider({params} : {params : {bookid : string}}){
    const queryClient = new QueryClient();
    return(
        <>
            <QueryClientProvider client={queryClient}>
                <BookEdit params={params}/>
            </QueryClientProvider>
        </>
    )
}
