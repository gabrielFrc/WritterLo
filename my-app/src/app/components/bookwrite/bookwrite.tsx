'use client'

import { useMutateData } from "@/app/BooksAPI/fetchbook";
import BookData from "@/app/interfaces/mutatebook-data";
import { FormEvent, useEffect, useState } from "react";
import Nav from "../navigation/nav";

export function WriteComponent(){
    const [name, setName] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [image_url, setImageUrl] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);

    const [submitValue, setSubmitValue] = useState<string>('Save');

    const { mutate } = useMutateData();

    const submit = () =>{
        setSubmitValue('Sucefully saved!')
        const data : BookData = {
            name,
            resumo,
            author,
            image_url,
            price,
            categories,
        }
        mutate(data);
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSubmitValue('Save');
    //     }, 3000);
    // }, [submitValue])

    return(
        <>
            <Nav/>
            <div className="h-30 pt-28">
                <h1 className="text-center text-4xl mb-10">Create Book</h1>
                <form onSubmit={(e) => {submit();}} className="text-center">
                    <input type="text" placeholder="Title" value={name} onChange={(e) => setName(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2" maxLength={30}/>
                    <input type="text" placeholder="Resume" value={resumo} onChange={(e) => setResumo(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2" maxLength={400}/>
                    <input type="text" placeholder="Image URL" value={image_url} onChange={(e) => setImageUrl(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2" maxLength={30}/>
                    <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <div className="flex justify-center text-gray-500">
                        <label htmlFor="Horror">Horror</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Horror" id="horror" onChange={(e) => {
                            if(e.target.checked){
                                console.log(true)
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                        <label htmlFor="Fiction">Fiction</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Fiction" id="fiction" onChange={(e) => {
                            if(e.target.checked){
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                        <label htmlFor="Comedy">Comedy</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Comedy" id="comedy" onChange={(e) => {
                            if(e.target.checked){
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                    </div>

                    <input type="submit" value={submitValue} className="cursor-pointer px-8 py-2 mt-4 bg-black rounded-full text-gray-200"/>
                </form>
            </div>
        </>
    );
}