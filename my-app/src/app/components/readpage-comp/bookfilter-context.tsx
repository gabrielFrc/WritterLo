'use client'

import { createContext, useState } from "react";

export interface AuthorContext {
    name: string;
    book: {
        name: string;
        categorie: string[];
        price: number;
        image_url: string;
    };
}

export interface LibraryDataContext {
    author: AuthorContext;
}

interface myContext {
    data : LibraryDataContext[] | null;
    updateBooks : (newValue : LibraryDataContext) => void;
    clearBooks : () => void;
}

export const BookFilterContext = createContext<myContext | undefined>(undefined);

const contextNullValue : LibraryDataContext[] = []

export const BookFilterContextProvider = ({children} : {children : React.ReactNode}) => {
    const [bookFiltered, setBookFiltered] = useState<LibraryDataContext[] | []>(contextNullValue)
    
    const updateBookFilter = (newValue : LibraryDataContext) => {
        setBookFiltered(oldArray => [...oldArray, newValue]);
    }
    const clearBooksFilter = () => {
        setBookFiltered(contextNullValue)
    }

    const contextValues : myContext = {
        updateBooks : updateBookFilter,
        data : bookFiltered,
        clearBooks : clearBooksFilter,
    }

    return <BookFilterContext.Provider value={contextValues}>
        {children}
    </BookFilterContext.Provider>
}