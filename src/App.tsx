import React, { useState } from "react";
import "./App.css";
import "./components/card/card";
import Card from "./components/card/card";
import Photo from "./components/photo/photo";
import Contact from "./components/contact/contact";
import SkillBox from "./components/skills/skillBox";
import Name from "./components/name/name";
function App() {
  const [essaCount, setEssaCount] = useState(0);
  const handleEssa = () => setEssaCount(essaCount + 1);

  interface ContactInfo {
    type: string;
    value: string;
  }

  const about = "about me";
  const contactData: ContactInfo[] = [
    { type: "email.svg", value: "gamblebeliever@gmail.com" },
    { type: "web.svg", value: "www.mojafajnastrona.pl" },
    { type: "tel.svg", value: "666 - 666 - 666" },
  ];
  const skills: string[] = [
    "c",
    "golang <3 <3",
    "react?",
    "being useless",
    "no nie wiem",
    "punktualność",
    "bycie perfekcją",
    "w każdym calu",
  ];
  const language: string[] = ["polski", "angielski", "aramejski", "łacina"];
  const name = "Kacper Osadpwski";
  const disc = "fajnei njadsnfkjansdkfnaksdnfk asdnfkja ";

  const [contactBool, setContactBool] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="Card">
        <Name name={name} />
        <Card name="pogger" x={1} y={2} />
        <div className="Cont">
          <Photo name="nicea.jpg" />
        </div>
        <Name name={disc} />
        <h1>contacts</h1>
        {contactData.map((contact) => (
          <Contact icon={contact.type} content={contact.value} />
        ))}
        <Name name={about} />
        <p>{disc}</p>
        <SkillBox name={"skills"} skills={skills} />
        <SkillBox name={"języki"} skills={language} />
      </div>
    </div>
  );
}

export default App;
