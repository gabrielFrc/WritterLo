'use client'

import { ChangeEvent, useState } from "react";
import { useMyContext } from "./clickthisbutton"

export default function LoginWindow(){
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const onChangePass = (event : ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };
    const onChangeName = (event : ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    
    const open = useMyContext().loginWindowOpen;
    return(
        open && <>
            <div id="login-window" className="z-10 md:rounded-2xl rounded-none fixed top-0 md:top-[60px] w-screen md:right-[50px] md:w-min text-center md:w-3/6 h-screen md:h-auto p-10 bg-skylightblue flex flex-col items-center justify-center gap-y-2 text-skylight">
                <h1 className="mt-[-300px] md:mt-0 mb-6 text-lg font-medium">Welcome, User.</h1>
                <p>Username</p>
                <input type="text" value={name} onChange={onChangeName} placeholder="Your name" className="rounded-md shadow-lg bg-skylight py-1 pl-3 text-skygold"/>
                <p>Password</p>
                <input type="password" value={pass} onChange={onChangePass} placeholder="Your pass" className="rounded-md shadow-lg bg-skylight py-1 pl-3 text-skygold"/>
            </div>
        </>

    )
}

export function LogInButton(){
    const clickContext = useMyContext();

    return(
        <button className="font-semibold mx-2 bg-transparent border rounded-full shadow-md px-4 py-2 hover:bg-skylightblue hover:text-white transition ease-out duration-500" onClick={() => {
            clickContext?.setLoginOpen(!clickContext.loginWindowOpen);
        }}>Log In</button>
    )
}