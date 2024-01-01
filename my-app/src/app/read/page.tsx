import DropdownFilter from "../components/dropdown-book-filter"

export default function ReadPage(){
    return(
        <>
            <div className="pt-[80px]">
                <DropdownFilter/>
                <h1 className="text-center my-56">Welcome to our books!</h1>
            </div>
        </>
    )
}