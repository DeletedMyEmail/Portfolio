import React from 'react'
import { FaGithub, FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function ContactCard({ type }: { type: string }) {
    return (
        <div className={"contact-card w-1/2 h-52 grid grid-rows-1 rounded-lg shadow-xl border-4 " + 
                        (type == "light" ? "bg-prim border-sec" : "bg-sec border-prim")}>
            <h1 className={"mt-2 font-bold " + 
                        (type == "light" ? "text-sec" : "text-prim")}>
                Hi, this is a contact header
            </h1>
            
            <div className={"text-center flex justify-center gap-x-4 txt-white p-5 text-3xl bottom-2 " + 
                        (type == "light" ? "text-sec" : "text-prim")}>
                <a target="_blank" href='https://github.com/DeletedMyEmail'><FaGithub/></a>
                <a target="_blank" href="https://discordapp.com/users/1072150132583321630"><FaDiscord/></a>
                <a target="_blank" href=""><FaTwitter/></a>
                <a href="mailto: kaitokuntatsu1@gmail.com"><FaEnvelope/></a>
            </div>
        </div>
    )
}