import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import portfolio from "../../public/profolioWeb.png"
import ttt from "../../public/ticttoa.png"
import mp from "../../public/mobifiePublic.png"
// interface datainterface: {
//     name: string;
//     // skills: never[];
//     socialIcons: {
//         icon: IconType;
//         href: string;
//         label: string;
//     }[];
// }

export const userdata={
    "name":"Anubhav Chaurasiya",
     "skills":[],
      "socialIcons" : [
       {
         icon: FaLinkedinIn,
         href: "https://www.linkedin.com/in/anubhav-chaurasiya-513a38299/",
         label: "LinkedIn",
       },
       { icon: FaGithub, href: "https://github.com/codinggiant12", label: "GitHub" },
     
       {
         icon: FaInstagram,
         href: "https://www.instagram.com/anubhav011010/",
         label: "Instagram",
       },
     ],
     "projects":[
      {
        "title":"Portfolio",
        "discription":"This portfolio showcases my projects, skills, and experience in frontend web development using modern technologies.",
        "projectLink":"https://anubhavportfolio-two.vercel.app/",
        "gitHubLink":"https://github.com/codinggiant12/anubhav_portfolio",
        "imageLink":portfolio ,
      },
       {
    "title": "Mobifie Public",
    "discription": "Completed a software developer internship at Quizit Enterprises, working on responsive web applications and REST API integration.",
    "projectLink": "https://mobifie-public.vercel.app/", 
    "gitHubLink": "",
    "imageLink": mp
  },
  {
    "title": "Mobifie Public",
    "discription": "Worked on real-world projects during my second internship, gaining hands-on experience in frontend and backend development.",
    "projectLink": "", 
    "gitHubLink": "",
    "imageLink": portfolio
  },
  {
    "title": "Tic-Tac-Toe",
    "discription": "Built a classic Tic-Tac-Toe game using HTML, CSS, and JavaScript, focusing on logic, UI, and interactive gameplay.",
    "projectLink": "https://symphonious-alpaca-5042f2.netlify.app/",
    "gitHubLink": "dcsdcsd.csdcsd",
    "imageLink": ttt
  }
     ]
}
