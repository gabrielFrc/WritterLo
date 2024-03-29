import { useState } from "react";
import DropdownFilter from "./dropdown-book-filter";
import { BookAfterFilter } from "./bookafterfilter";
import { useBookData, useMutateData } from "@/app/BooksAPI/fetchbook";

export default function BookContainer(){
    const [submited, setSubmited] = useState<number>(0);
    const forceUpdate = () => {
        setSubmited(submited + 1);
    }

    const { data } = useBookData();
    const { mutate } = useMutateData();

    return(
        <div className="pt-[80px]">
                <DropdownFilter forceUpdate={forceUpdate}/>
                <BookAfterFilter/>
                {/* {data?.map((v: any) => {
                    return <p key={v.id}>{v.name}</p>;
                })} */}
                {/* <button onClick={() => {
                    mutate({
                        name : 'Test1',
                        categories: ['comedy'],
                        price : 0,
                        image_url : '...',
                        author: 'jose fulano'
                    })
                }}>CLICK ME PLEASE</button> */}
        </div>
    )
}