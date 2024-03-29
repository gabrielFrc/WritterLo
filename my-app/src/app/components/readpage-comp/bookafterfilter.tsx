'use client'

import { BookFilterContext } from "./bookfilter-context";
import { useContext } from "react";

export const BookAfterFilter = () => {
    const myContext = useContext(BookFilterContext);
    const myContextData = myContext?.data
    // console.log(myContextData)

    return (
        <>
            {myContextData == null || myContextData.length <= 0 && <h1 className="text-center mt-28">Welcome to our books!</h1>}
            <div className="mx-28 pb-56 pt-28 grid grid-cols-1 min-[900px]:grid-cols-2 xl:grid-cols-3 text-center gap-y-10 gap-x-20">
                {myContextData == null || myContextData.length <= 0 ? null : myContextData?.map((v, i) => {
                    let categories = ''
                    v.categories.forEach((v, i) => {
                        if (i == 0) {
                            categories = categories + v;
                            const firstLetter = categories.charAt(0)
        
                            const firstLetterCap = firstLetter.toUpperCase()
        
                            const remainingLetters = categories.slice(1)
        
                            const capitalizedWord = firstLetterCap + remainingLetters

                            categories = capitalizedWord;
                        } else {
                            categories = categories + ", " + v
                        }
                    })
                    return (
                        <div key={i}>
                            <p className="px-6 text-zinc-700">{v.name}</p>
                            <a href={'/read/' + v.id}>
                                <img width={187} height={240} src={v.image_url} alt="book" className="block m-auto" />
                            </a>
                            <p className="px-6 text-zinc-900">{"Author: " + v.author}</p>
                            <p className="px-6 text-zinc-700">{"Categories: " + categories}</p>
                        </div>
                    
                    )
                })}
            </div>
        </>
    )
}