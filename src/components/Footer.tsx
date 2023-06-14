import React from 'react'
import { FaGithub, FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="text-center flex justify-center gap-x-4 txt-white p-5 text-3xl bg-tertiary">
            <a target="_blank" href='https://github.com/KaitoKunTatsu'><FaGithub/></a>
            <a target="_blank" href="https://discordapp.com/users/454743948825722892"><FaDiscord/></a>
            <a target="_blank" href=""><FaTwitter/></a>
            <a href="mailto: hartjesjoshua@gmx.de"><FaEnvelope/></a>
        </footer>
    )
}

export default Footer