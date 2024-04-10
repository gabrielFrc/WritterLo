'use client'

import { BookEdit } from "@/app/components/bookedit/bookedit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();
export default function BookEditProvider({params} : {params : {bookid : string}}){
    return(
        <>
            <QueryClientProvider client={queryClient}>
                <BookEdit params={params}/>
            </QueryClientProvider>
        </>
    )
}
