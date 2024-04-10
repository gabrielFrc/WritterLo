import { useState } from "react";
import DropdownFilter from "./dropdown-book-filter";
import { BookAfterFilter } from "./bookafterfilter";

export default function BookContainer(){
    const [submited, setSubmited] = useState<number>(0);
    const forceUpdate = () => {
        setSubmited(submited + 1);
    }

    return(
        <div className="pt-[80px]">
                <DropdownFilter forceUpdate={forceUpdate}/>
                <BookAfterFilter/>
        </div>
    )
}