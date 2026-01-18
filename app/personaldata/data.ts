import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// interface datainterface: {
//     name: string;
//     // skills: never[];
//     socialIcons: {
//         icon: IconType;
//         href: string;
//         label: string;
//     }[];
// }
const data={
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
}