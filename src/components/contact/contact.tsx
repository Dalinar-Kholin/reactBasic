import {useEffect, useState} from "react";
interface IContact{
    icon : string
    content: string
}

export default function Contact({icon, content} : IContact){



    return (
        <>
            <div className="contactClass">
                <img className={"ContactCsv"} src={`./${icon}`} alt="Opis"/>
                {content}
            </div>
        </>
    )
}