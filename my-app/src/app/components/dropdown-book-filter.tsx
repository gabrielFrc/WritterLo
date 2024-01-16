'use client'

import { useEffect, useState } from "react";

interface FiltersOptions {
    isFree: Boolean,
}

export default function DropdownFilter() {
    const [filtersOpen, setFilters] = useState<Boolean>(false);
    const [filtersOption, setFiltersOption] = useState<FiltersOptions>({
        isFree: false,
    });
    let dataFake;
    
    useEffect(() => {
        fetch("/fakedatabase/fakedata.json")
        .then(res => dataFake = res.json())
        .then(data => console.log(data))
        .catch((err : any) => console.log(err))
    }, [])

    // console.log(dataFake)

    const updateFilterFree = (value: Boolean): void => {
        setFiltersOption({ ...filtersOption, isFree: value })
    }

    const submitFilters = (): void => {
        var radios = document.getElementsByTagName('input');
        let isBookFree : String = 'free';
        let categories : String[] = [];

        for (let index = 0; index < radios.length; index++) {
            if (radios[index].type == 'radio' && radios[index].checked) {
                if(radios[index].name == 'price-filter'){
                    isBookFree = radios[index].value;
                }
                else{
                    categories.push(radios[index].value);
                }
            }
        }

        console.log('the book is: ' + isBookFree);
        console.log('The categories are: ' + categories[0])
    }

    return (
        <>
            {!filtersOpen ? <p className="mx-6 absolute mt-4 top-[60px] hover:cursor-pointer" onClick={() => { setFilters(!filtersOpen) }}>Filters</p>
                : <form className="absolute z-0 top-[60px] w-full md:w-[35vw] bg-skylight">
                    <div className="flex gap-x-10 items-center ml-6 mt-4">
                        <h1>Options</h1>
                        <div className="flex hover:cursor-pointer" onClick={() => { setFilters(!filtersOpen) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <h2 className="text-zinc-700">Close</h2>
                        </div>
                    </div>
                    {/* //Radios selection */}
                    <div className="flex flex-wrap md:block">
                        <div className="m-6">
                            <h2>Price</h2>
                            <div className="flex items-center gap-x-3">
                                <input id="free" name="price-filter" type="radio" value={'free'} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Free</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="paid" name="price-filter" type="radio" value={'paid'} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Paid</label>
                            </div>
                        </div>
                        <div className="m-6">
                            <h2>Categories</h2>
                            <div className="flex items-center gap-x-3">
                                <input id="categorie-horror" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={'horror'}/>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Horror</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="categorie-fiction" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={'fiction'}/>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Fiction</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="categorie-humor" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={'humor'}/>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Humor</label>
                            </div>
                        </div>
                    </div>
                    {/* //End of radios */}
                    <div className="md:m-6 text-center md:text-left">
                        <button className="shadow bg-zinc-700 hover:bg-zinc-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="button" onClick={() => {submitFilters()}}>
                            Filter
                        </button>
                    </div>
                </form>}
        </>
    )
}