import Skill from "./skill";

interface ISkills{
    name : string
    skills : string[]
}

export default function SkillBox({name, skills}: ISkills){
    return <>
        <h1>{name}</h1>
            <div className={"skills"}>
        {skills.map(skill =>
            <Skill skill={skill}/>
        )}
            </div>
    </>
}