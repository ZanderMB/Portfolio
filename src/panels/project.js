// Projects will be an Object with nested objects.

/* This is the template to add another project to the list.
        {
            name: " Project Name ",
            stack: " Tech Stack ",
            description: " Description of Project",
            link: " Link to Repo goes Here",
            GithubAPI: " Repo Name Goes Here ",
            img "src/assets/path-to-image"
        },
*/

import ror2Img from '../assets/ror2WikiExample.png'
import corahImg from '../assets/CorahExample.png'

// The nested objects will be seperate projects.
const projectPanel = {
    title:" My Professional and Personal Projects",
    githubGrid: {
        username: "ZanderMB",
        title: "All GitHub Repositories"
    },
    projects: [
        {
            name: "Risk of Rain 2 Wiki",
            stack: "Django",
            description: "The Risk of Rain 2(ROR2) wiki, is a small web-based personal project I built utilising Django, base CSS, and Django Templates. It's a very simplistic web-app and can run entirely on it's own within a docker container. It isn't published anywhere since it was supposed to be a project to reinforce my learning.",
            link: "https://github.com/ZanderMB/ror2-wiki-project",
            GithubAPI: "ror2-wiki-project",
            img: ror2Img
        },
        {
            name: " Corah Web-based Kiosk",
            stack: "Django, Tailwind, PostCSS, Javascript",
            description: "A Django-based web app designed for the <strong>Centre of Rural and Aging Health</strong> at NSCC Strait Area Campus. It was built using a full-stack pipeline. Django, PostgreSQL, Tailwind CSS, and spun up utilizing Docker. This was a group project, I was mainly on the event side of things. I built the event cards, event list, event detail page, the event forms, as well as some of the semantic tokens for Tailwind CSS.",
            link: "",
            GithubAPI: "",
            img: corahImg

        },
    ]
};

export default projectPanel;