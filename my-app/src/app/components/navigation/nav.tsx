import ClickMe, { DropdownMenu } from "../clickthisbutton";
import LoginWindow from "../login-window";

export default function Nav() {
    return (
        <>
            <nav className="h-16 bg-skylight text-zinc-800 fixed left-0 right-0 flex justify-between items-center border border-skylightblue border-b-1 border-t-0 border-l-0 border-r-0 z-10 text-skylight">
                <div className="flex items-center w-full md:w-auto justify-between mx-6">
                    <a href="/">
                        <p className="text-3xl font-extrabold text-zinc-600">WritterLo</p>
                    </a>

                    <div className="flex justify-center items-center gap-4">
                        <a href="/entrar" className="md:hidden"><button className="font-semibold bg-transparent rounded-full px-1 py-1 hover:bg-skylightblue hover:text-white transition ease-out duration-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mx-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        </button></a>
                        <ClickMe />
                    </div>
                </div>
                <div className="mx-6 hidden md:flex md:items-center text-base" id="menu">
                    <div className="mx-6 hidden md:block">
                        <button className="px-5 hover:text-neutral-300 hover:scale-150 transition ease-out duration-500">Write</button>
                        <a href="/read"><button className="px-5 hover:text-neutral-300 hover:scale-150 transition ease-out duration-500">Stories</button></a>
                        <button className="px-5 hover:text-neutral-300 hover:scale-150 transition ease-out duration-500">About</button>
                    </div>
                    <a href="/entrar"><button className="font-semibold bg-transparent rounded-full px-3 py-3 hover:bg-skygold hover:text-white transition ease-out duration-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </button></a>
                    {/* <LogInButton />
                    <a href="/signin"><button className="font-semibold mx-2 bg-transparent border rounded-full shadow-md px-4 py-2 hover:bg-skylightblue hover:text-white transition ease-out duration-500">Sign In</button></a> */}
                </div>
            </nav>
            {/* // Mobile menu */}
            {
                true &&
                <DropdownMenu />
            }
            <LoginWindow />
        </>
    )
}