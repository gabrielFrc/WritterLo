import { BookFilterContext } from "./bookfilter-context";
import { useContext } from "react";

export const BookAfterFilter = () => {
    const myContext = useContext(BookFilterContext);
    const myContextData = myContext?.data

    return (
        <>
            {myContextData == null || myContextData.length <= 0 && <h1 className="text-center mt-28">Welcome to our books!</h1>}
            <div className="mx-28 pb-56 pt-60 md:pt-28 grid grid-cols-1 min-[900px]:grid-cols-2 xl:grid-cols-3 text-center gap-y-10 gap-x-20">
                {myContextData == null || myContextData.length <= 0 ? <>
                    <div role="status" className="absolute top-[350px] left-[50%] translate-x-[-50%]">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-skylight" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                    </>
                     : myContextData?.map((v, i) => {
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
                        <div key={i} className="mb-16">
                            <p className="px-6 text-zinc-800 text-2xl font-semibold">{v.name}</p>
                            <hr className="h-2 my-2 md:mx-6 border-t-2 border-neutral-400" />
                            <div className="h-80 flex justify-center">
                                <a href={'/read/' + v.id} className="relative group">
                                    <img width={187} src={v.image_url} onError={e => {e.currentTarget.src = "/images/nobook.png"}} alt="book" className="block m-auto" />
                                </a>
                            </div>
                            <div className="my-4">
                                <a href={"/write/edit/" + v.id}><span className="px-6 py-2 bg-white rounded-2xl my-4 shadow-md">&#x270E; Edit</span></a>
                            </div>
                            <p className="px-6 text-zinc-900">{"Author: " + v.author}</p>
                            <p className="px-6 text-zinc-700">{"Categories: " + categories}</p>
                            <div className="ml-24 mt-4 text-start">
                                {v.price > 0 ? <>
                                    <p>$<span className="text-3xl">{v.price}</span>.00</p>
                                </> : 'Free'}
                            </div>
                        </div>
                    
                    )
                })}
            </div>
        </>
    )
}