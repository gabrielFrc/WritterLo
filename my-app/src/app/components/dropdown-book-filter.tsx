'use client'

import { useState } from "react";

export default function DropdownFilter(){
    const [filtersOpen, setFilters] = useState<Boolean>(false);

    return(
        <>
            {!filtersOpen ? <p className="mx-6" onClick={() => {setFilters(!filtersOpen)}}>Filters</p>
            : <div className="absolute z-0 top-[60px] w-full md:w-[35vw] bg-zinc-100">
                    <h1 className="ml-6 mt-4">Hi, im the filters</h1>
                </div>}
        </>
    )
}