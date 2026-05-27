import "./Skills.css";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiFlutter,
  SiFastapi,
  SiDocker,
  SiPostman,
  SiPostgresql,
  SiMysql,
  SiRedis
} from "react-icons/si";

const techStack = [
  {name:"React",icon:<SiReact color="#61DAFB"/>},
  {name:"Next.js",icon:<SiNextdotjs color="#ffffff"/>},
  {name:"JavaScript",icon:<SiJavascript color="#F7DF1E"/>},
  {name:"Node.js",icon:<SiNodedotjs color="#339933"/>},
  {name:"MongoDB",icon:<SiMongodb color="#47A248"/>},
  {name:"Python",icon:<SiPython color="#3776AB"/>},
  {name:"C++",icon:<SiCplusplus color="#00599C"/>},
  {name:"TensorFlow",icon:<SiTensorflow color="#FF6F00"/>},
  {name:"PyTorch",icon:<SiPytorch color="#EE4C2C"/>},
  // {name:"OpenCV",icon:<SiOpencv color="#212121"/>},
  {name:"Git",icon:<SiGit color="#F05032"/>},
  {name:"GitHub",icon:<SiGithub color="#ffffff"/>},
  {name:"Flutter",icon:<SiFlutter color="#02569B"/>},
  {name:"FastAPI",icon:<SiFastapi color="#00599C"/>},
  {name:"Docker",icon:<SiDocker color="#2496ED"/>},
  {name:"Postman",icon:<SiPostman color="#FF6C37"/>},
  {name:"PostgreSQL",icon:<SiPostgresql color="#4169E1"/>},
  {name:"MySQL",icon:<SiMysql color="#4479A1"/>},
  {name:"Redis",icon:<SiRedis color="#D82C20"/>},
];

export default function Skills() {

return(

<section
id="skills"
className="section-wrapper skills"
>

<div className="section-header">

<p className="section-tag">
Tech Stack
</p>

<h4 className="section-title">
Tech Stack
</h4>

</div>

<div className="tech-grid">

{techStack.map((tech)=>(

<div
className="tech-card"
key={tech.name}
>

<div className="icon">
{tech.icon}
</div>

<h3>
{tech.name}
</h3>

</div>

))}

</div>

</section>

)

}