import React, {useState} from 'react';
import './App.css';
import './components/card/card'
import Card from "./components/card/card";
import Photo from "./components/photo/photo";
import Contact from "./components/contact/contact";
import SkillBox from "./components/skills/skillBox";

function App() {
    const [essaCount, setEssaCount] = useState(0);
    const handleEssa = () => setEssaCount(essaCount + 1);

    interface ContactInfo {
        type: string;
        value: string;
    }

    const contactData: ContactInfo[] = [
        { type: 'email.svg', value: 'gamblebeliever@gmail.com' },
        { type: 'web.svg', value: 'www.mojafajnastrona.pl' },
        { type: "tel.svg", value: "666 - 666 - 666" }
    ];
    const skills : string[] =[
        "c",
        "golang <3",
        "react?",
        "being useless",
        "no nie wiem",
        "punktualność",
        "bycie perfekcją",
        "w każdym calu"
    ]
    const language: string[] =[
        "polski",
        "angielski",
        "aramejski",
        "łacina"
    ]
    const [contactBool, setContactBool] = useState<boolean>(false)

    return (
        <div className="App">
            <div className="Card">
                <h1>Kacper Osadowski</h1>
                <Card name="pogger" x={1} y={2} />
                <div className="Cont">
                    <Photo name="nicea.jpg" />
                </div>
                <h2>zawód: zawód rodziców</h2>
                <p>uwr.sitting</p>
                <h1>contacts</h1>
                {
                    contactData.map((contact) => (
                        <Contact  icon={contact.type} content={contact.value} />
                    ))
                }
                <h1>About me</h1>
                <p>lorem ipus i takie sprawy</p>
                <SkillBox name={"skills"} skills={skills}/>
                <SkillBox name={"języki"} skills={language}/>
            </div>
        </div>
    );
}

export default App;
