'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WriteComponent } from "../components/bookwrite/bookwrite";

const queryClient = new QueryClient();

export default function Write(){
    return(
        <QueryClientProvider client={queryClient}>
            <WriteComponent/>
        </QueryClientProvider>
    )
}