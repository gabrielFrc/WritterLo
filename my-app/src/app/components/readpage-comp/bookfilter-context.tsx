'use client'

import { createContext, useState } from "react";

export interface Book {
    id: number;
    name: string;
    categories: string[];
    price: number;
    image_url: string;
    author: string;
}

export interface AuthorContext {
    name: string;
    book: {
        id: number,
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
    data : Book[] | null;
    updateBooks : (newValue : Book) => void;
    clearBooks : () => void;
}

export const BookFilterContext = createContext<myContext | undefined>(undefined);

const contextNullValue : Book[] = []

export const BookFilterContextProvider = ({children} : {children : React.ReactNode}) => {
    const [bookFiltered, setBookFiltered] = useState<Book[] | []>(contextNullValue)
    
    const updateBookFilter = (newValue : Book) => {
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