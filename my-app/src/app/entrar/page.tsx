'use client'

import { ChangeEvent, useState } from "react"

export default function SignIn() {
    const [loginAccount, setAccount] = useState<Boolean>(false);
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [loginPass, setLoginPass] = useState<string>('');

    const [createAccount, setCreateAccount] = useState<Boolean>(false);
    const [createEmail, setCreateEmail] = useState<string>('');
    const [createPass, setCreatePass] = useState<string>('');

    const handleLoginEmail = (event: ChangeEvent<HTMLInputElement>): void => {
        setLoginEmail(event.target.value)
    }
    const handleLoginPass = (event: ChangeEvent<HTMLInputElement>): void => {
        setLoginPass(event.target.value)
    }

    const handleCreateEmail = (event: ChangeEvent<HTMLInputElement>): void => {
        setCreateEmail(event.target.value)
    }
    const handleCreatePass = (event: ChangeEvent<HTMLInputElement>): void => {
        setCreatePass(event.target.value)
    }

    return (
        <>
            <div className="pt-[80px] mb-36">
                <h1 className="text-center text-zinc-950 font-thin text-4xl mt-28 mb-20">Conecte-se aqui</h1>
                <div className="flex justify-center md:justify-around flex-wrap gap-y-4 gap-x-16 pb-36">
                    {loginAccount == false ? <div>
                        <h2 className="text-zinc-800">Já possui conta?</h2>
                        <button className="text-center text-zinc-500 bg-zinc-200 py-3 w-[35vw]" onClick={() => {
                            setAccount(!loginAccount);
                        }}>Entrar</button>
                    </div> :
                        <div className="flex flex-col">
                            <h2 className="text-zinc-800">Bem vindo!</h2>
                            <input type="text" value={loginEmail} onChange={handleLoginEmail} placeholder="E-mail" className="my-1 text-zinc-500 bg-zinc-100 border-2 rounded border-zinc-300 py-3 w-[35vw] pl-4" />
                            <input type="password" value={loginPass} onChange={handleLoginPass} placeholder="Password" className="my-1 text-zinc-500 bg-zinc-100 border-2 rounded border-zinc-300 py-3 w-[35vw] pl-4" />
                            <button className="text-center text-zinc-800 w-min h-min" onClick={() => {
                                setAccount(!loginAccount);
                            }}>Voltar</button>
                        </div>}

                    {createAccount == false ? <div>
                        <h2 className="text-zinc-800">Não possui cadastro?</h2>
                        <button className="text-center text-zinc-500 bg-zinc-200 py-3 w-[35vw]" onClick={() => {
                            setCreateAccount(!createAccount);
                        }}>Criar cadastro</button>
                    </div> :
                        <div className="flex flex-col">
                            <h2 className="text-zinc-800">Criação de cadastro</h2>
                            <input type="text" placeholder="Name" className="my-1 text-zinc-500 bg-zinc-100 border-2 rounded border-zinc-300 py-3 w-[35vw] pl-4" />
                            <input type="text" value={createEmail} onChange={handleCreateEmail} placeholder="E-mail" className="my-1 text-zinc-500 bg-zinc-100 border-2 rounded border-zinc-300 py-3 w-[35vw] pl-4" />
                            <input type="password" value={createPass} onChange={handleCreatePass} placeholder="Password" className="my-1 text-zinc-500 bg-zinc-100 border-2 rounded border-zinc-300 py-3 w-[35vw] pl-4" />
                            <input type="password" placeholder="Confirm password" className="my-1 text-zinc-500 bg-zinc-100 border-2 rounded border-zinc-300 py-3 w-[35vw] pl-4" />
                            <button className="text-center text-zinc-800 w-min h-min" onClick={() => {
                                setCreateAccount(!createAccount);
                            }}>Voltar</button>
                        </div>}
                </div>
            </div>
        </>
    )
}