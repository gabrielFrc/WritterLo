'use client'

import { BookFilterContextProvider } from "../components/readpage-comp/bookfilter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookContainer from "../components/readpage-comp/bookcontainer";

const queryClient = new QueryClient();

export default function ReadPage() {
    return (
        <BookFilterContextProvider>
            <QueryClientProvider client={queryClient}>
                <BookContainer/>
            </QueryClientProvider>
        </BookFilterContextProvider>
    )
}