'use client'

import { useEffect, useState } from "react";
import { useContext } from "react";
import { BookFilterContext } from "./bookfilter-context";
import { LibraryDataContext } from "./bookfilter-context";

interface FiltersOptions {
    isFree: boolean,
    isPaid: boolean,
    categories: {
        'horror': boolean,
        'fiction': boolean,
        'comedy': boolean,
    },
}
interface Book {
    name: string;
    categorie: string[];
    price: number;
    image_url: string;
}

interface Author {
    name: string;
    books: Book[];
}

interface LibraryData {
    authors: Author[];
}

export default function DropdownFilter({ forceUpdate }: { forceUpdate: () => void }) {
    const [filtersOpen, setFilters] = useState<Boolean>(true);
    const [filtersOption, setFiltersOption] = useState<FiltersOptions>({
        isFree: true,
        isPaid: true,
        categories: {
            'horror': true, 'fiction': true, 'comedy': true
        },
    });
    const [dataFake, setDataFake] = useState<LibraryData | null>(null);

    const books = useContext(BookFilterContext);

    const fetchData = async () => {
        try {
            const response = await fetch("/fakedatabase/fakedata.json");
            const data = await response.json();
            setDataFake(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        submitFilters();
    }, [dataFake])

    const submitFilters = (): void => {
        var radios = document.getElementsByTagName('input');
        let isBookFree: String = 'free';
        let categories: String[] = [];
        let filteredBooks: LibraryDataContext[] = [];

        for (let index = 0; index < radios.length; index++) {
            if (radios[index].type == 'checkbox' && radios[index].checked) {
                if (radios[index].name == 'price-filter' && radios[index].checked) {
                    isBookFree = radios[index].value;
                }
                else {
                    categories.push(radios[index].value);
                }
            }
        }

        books?.clearBooks();
        filteredBooks = [];

        dataFake?.authors.forEach(element => {
            element.books.forEach(book => {
                if (book.price <= 0 && filtersOption.isFree) {
                    const newItem: LibraryDataContext = {
                        author: {
                            name: element.name,
                            book: { ...book },
                        }
                    };
                    filteredBooks.push(newItem);
                } else if (book.price > 0 && filtersOption.isPaid) {
                    const newItem: LibraryDataContext = {
                        author: {
                            name: element.name,
                            book: { ...book },
                        }
                    };
                    filteredBooks.push(newItem);
                }
            })
        });

        let verified: Boolean = false;
        if(filteredBooks.length > 0){
            filteredBooks.forEach((v, i) => {
                verified = false;
                v.author.book.categorie.forEach(cat => {
                    if(verified){
                        return;
                    }
                    if(categories.includes(cat)){
                        verified = true;
                        books?.updateBooks(v);
                    }
                })
            })
        }
        forceUpdate();
    }

    return (
        <>
            {!filtersOpen ? <div className="hover:cursor-pointer" onClick={() => { setFilters(!filtersOpen) }}>
                <p className="mx-6 absolute mt-4 top-[60px]">Filters</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute mx-16 top-[76px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </div>
                : <form className="absolute z-0 top-[60px] w-full md:w-[35vw] md:bg-transparent bg-skylight pb-6">
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
                    <div className="flex flex-wrap md:block justify-around">
                        <div className="m-6">
                            <h2>Price</h2>
                            <div className="flex items-center gap-x-3">
                                <input id="free" name="price-filter" type="checkbox" value={'free'} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" checked={filtersOption.isFree} onChange={() => {
                                    setFiltersOption({
                                        ...filtersOption, "isFree": !filtersOption.isFree
                                    });
                                }} />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Free</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="paid" name="price-filter" type="checkbox" value={'paid'} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" checked={filtersOption.isPaid} onChange={() => {
                                    setFiltersOption({
                                        ...filtersOption, "isPaid": !filtersOption.isPaid
                                    });
                                }} />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Paid</label>
                            </div>
                        </div>

                        <div className="m-6">
                            <h2>Categories</h2>
                            <div className="flex items-center gap-x-3">
                                <input id="categorie-horror" type="checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={'horror'} checked={filtersOption.categories.horror} onChange={() => {
                                    setFiltersOption({
                                        ...filtersOption, 'categories': {
                                            ...filtersOption.categories, 'horror': !filtersOption.categories.horror
                                        }
                                    })
                                }} />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Horror</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="categorie-fiction" type="checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={'fiction'} checked={filtersOption.categories.fiction} onChange={() => {
                                    setFiltersOption({
                                        ...filtersOption, 'categories': {
                                            ...filtersOption.categories, 'fiction': !filtersOption.categories.fiction
                                        }
                                    })
                                }} />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Fiction</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="categorie-humor" type="checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={'comedy'} checked={filtersOption.categories.comedy} onChange={() => {
                                    setFiltersOption({
                                        ...filtersOption, 'categories': {
                                            ...filtersOption.categories, 'comedy': !filtersOption.categories.comedy
                                        }
                                    })
                                }} />
                                <label className="block text-sm font-medium leading-6 text-gray-900">Comedy</label>
                            </div>
                        </div>
                    </div>
                    {/* //End of radios */}
                    <div className="md:m-6 text-center md:text-left">
                        <button className="shadow bg-zinc-700 hover:bg-zinc-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="button" onClick={() => { submitFilters() }}>
                            Filter
                        </button>
                    </div>
                </form>}
        </>
    )
}