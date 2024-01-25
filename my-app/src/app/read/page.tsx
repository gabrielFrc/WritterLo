'use client'

import { useState } from "react";
import DropdownFilter from "../components/readpage-comp/dropdown-book-filter"
import { BookFilterContextProvider } from "../components/readpage-comp/bookfilter-context";
import { BookAfterFilter } from "../components/readpage-comp/bookafterfilter";

export default function ReadPage() {
    const [submited, setSubmited] = useState<number>(0);
    const forceUpdate = () => {
        setSubmited(submited + 1);
    }

    return (
        <BookFilterContextProvider>
            <div className="pt-[80px]">
                    <DropdownFilter forceUpdate={forceUpdate}/>
                    <BookAfterFilter/>
            </div>
        </BookFilterContextProvider>
    )
}