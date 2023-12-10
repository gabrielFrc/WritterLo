import ClickMe, { DropdownMenu } from "./components/clickthisbutton";
import LoginWindow, { LogInButton } from "./components/login-window";

export default function Home() {
  return (
    <>
      <header>
        <nav className="h-24 flex justify-between items-center border border-skyblue border-b-1 border-t-0 border-l-0 border-r-0">
          <div className="flex items-center w-full md:w-auto justify-between mx-6">
            <p className="text-5xl font-extrabold">MyWritter</p>
            <ClickMe />
          </div>
          <div className="mx-6 hidden md:flex md:items-center text-lg" id="menu">
            <div className="mx-6 hidden md:block">
              <button className="px-5 hover:text-neutral-300 hover:scale-150 transition ease-out duration-500">Write</button>
              <button className="px-5 hover:text-neutral-300 hover:scale-150 transition ease-out duration-500">Stories</button>
              <button className="px-5 hover:text-neutral-300 hover:scale-150 transition ease-out duration-500">About</button>
            </div>
            <LogInButton/>
            <a href="/signin"><button className="font-semibold mx-2 bg-transparent border rounded-full shadow-md px-4 py-2 hover:bg-skylightblue hover:text-white transition ease-out duration-500">Sign In</button></a>
          </div>
        </nav>
        {/* // Mobile menu */}
        {true &&
          <DropdownMenu />
        }
        <LoginWindow />
      </header>
    </>
  )
}
