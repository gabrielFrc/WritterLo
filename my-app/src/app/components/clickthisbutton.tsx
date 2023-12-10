'use client'

import { useState } from "react";

import { createContext, useContext } from 'react';

interface defaultValues {
    menuOpen : Boolean;
    setMenuOpen : (newValue: boolean) => void;
    setLoginOpen : (newValue: boolean) => void;
    loginWindowOpen : Boolean;
}

const ClickContext = createContext<defaultValues | undefined>(undefined);

export const ClientClickContext = ({ children }: { children: React.ReactNode }) => {
    const [headerOpt, setHeaderOpt] = useState({
        isMenuOpen : false,
        isLoginWindowOpen : false,
    });

    const updateMenuState = (newValue : boolean) => {
        setHeaderOpt({...headerOpt, isMenuOpen : newValue});
    }
    const updateLoginState = (newValue : boolean) => {
        setHeaderOpt({...headerOpt, isLoginWindowOpen : newValue});
    }
    
    const ContextValues : defaultValues = {
        menuOpen : headerOpt.isMenuOpen,
        setMenuOpen : updateMenuState,
        setLoginOpen : updateLoginState,
        loginWindowOpen : headerOpt.isLoginWindowOpen,
    }

    return (
        <ClickContext.Provider value={ContextValues}>
            {children}
        </ClickContext.Provider>
    )
};

export const useMyContext = (): defaultValues => {
    const context = useContext(ClickContext);
  
    if (!context) {
      throw new Error('useMyContext deve ser usado dentro de MyContextProvider');
    }
  
    return context;
  };

export default function ClickMe() {
    const myContext = useContext(ClickContext)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 md:hidden" onClick={() => {
            myContext?.setMenuOpen(!myContext.menuOpen)
            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

export function DropdownMenu() {
    const clickContext = useContext(ClickContext);

    const myButtons = [
        {name: 'Log In', url: '', action: () => {
            clickContext?.setLoginOpen(!clickContext.loginWindowOpen);
            console.log(clickContext?.loginWindowOpen);
        }},
        {name: 'Sign In', url: '/sigin'},
        {name: 'Write', url: ''},
        {name: 'Stories', url: '/signin'},
        {name: 'About', url: '/signin'},
        {name: 'Policy', url: '/signin'},
    ]
    
    return (
        clickContext?.menuOpen && <>
            <div className="animate-appear flex flex-col bg-skylight md:hidden">
                {myButtons.map((v) => {
                    if(v.url.length == 0){
                        if(v.action != null){
                            return(
                                <button key={v.name} className="text-left pl-8 py-5 border border-skylightblue border-b-1 border-t-0 border-l-0 border-r-0 transition ease-out duration-500" onClick={v.action}>
                                    {v.name}
                                </button>
                            )
                        }
                        return(
                            <button key={v.name} className="text-left pl-8 py-5 border border-skylightblue border-b-1 border-t-0 border-l-0 border-r-0 transition ease-out duration-500">
                                {v.name}
                            </button>
                        )
                    }
                    else{
                        return(
                            <a href={v.url} key={v.name}>
                                <button className="text-left pl-8 py-5 border border-skylightblue border-b-1 border-t-0 border-l-0 border-r-0 transition ease-out duration-500 w-full">
                                    {v.name}
                                </button>
                            </a>
                        )
                    }
                })}
            </div>
        </>
    )
}