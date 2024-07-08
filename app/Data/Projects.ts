import { StaticImageData } from "next/image"

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import homepage from "../assets/Home Page.png";
import jobfinder from "../assets/jobfinder.png";
import axos from "../assets/axos.png";
import web30 from "../assets/web.png";
import game from "../assets/game.png";
import green from "../assets/green.png";
import travel from "../assets/travel.png";
import fash from "../assets/fash.png";
import bit from "../assets/bit.jpg";

export interface ProjectData {
    id: number,
    projectName: string,
    projectDate: string,
    projectImage: StaticImageData,
    projectType: string
    projectViews: string
}

const ProjectData: ProjectData[] = [
    {
        id: 1,
        projectName: "Jobfinder",
        projectDate: "last year",
        projectImage: jobfinder,
        projectType: "Frontend web",
        projectViews: "250"
    },
    {
        id: 2,
        projectName: "Travelia",
        projectDate: "last year",
        projectImage: travel,
        projectType: "UX Design",
        projectViews: "450"
    },
    {
        id: 3,
        projectName: "Axos",
        projectDate: "6 months ago",
        projectImage: axos,
        projectType: "Frontend web",
        projectViews: "300"
    },
    {
        id: 4,
        projectName: "Homepage Redesign",
        projectDate: "3 months ago",
        projectImage: homepage,
        projectType: "UX Design",
        projectViews: "350"
    },
    {
        id: 5,
        projectName: "Web 3.0",
        projectDate: "2 months ago",
        projectImage: web30,
        projectType: "Frontend web",
        projectViews: "200"
    },
    {
        id: 6,
        projectName: "Game Design",
        projectDate: "1 month ago",
        projectImage: game,
        projectType: "UX Design",
        projectViews: "400"
    },
    {
        id: 7,
        projectName: "Green Initiative",
        projectDate: "1 week ago",
        projectImage: green,
        projectType: "UX Design",
        projectViews: "500"
    },
    {
        id: 8,
        projectName: "Fashionista",
        projectDate: "3 days ago",
        projectImage: fash,
        projectType: "Frontend web",
        projectViews: "600"
    },
    {
        id: 9,
        projectName: "Bit Connect",
        projectDate: "yesterday",
        projectImage: bit,
        projectType: "Frontend web",
        projectViews: "550"
    },
    {
        id: 10,
        projectName: "Project One",
        projectDate: "8 months ago",
        projectImage: project1,
        projectType: "Frontend web",
        projectViews: "320"
    },
    {
        id: 11,
        projectName: "Project Two",
        projectDate: "5 months ago",
        projectImage: project2,
        projectType: "UX Design",
        projectViews: "430"
    },
    {
        id: 12,
        projectName: "Project Three",
        projectDate: "4 months ago",
        projectImage: project3,
        projectType: "Frontend web",
        projectViews: "290"
    }
]

export default ProjectData;
