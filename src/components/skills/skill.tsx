

interface ISkill{
    skill : string
}

export default function Skill({skill}: ISkill){
    return(
        <div className={"skill"}>
            {skill}
        </div>
    )
}