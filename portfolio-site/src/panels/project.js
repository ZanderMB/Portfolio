// Projects will be an Object with nested objects.

/* This is the template to add another project to the list.
        {
            name: " Project Name ",
            stack: " Tech Stack ",
            description: " Description of Project",
            link: " Link to Repo goes Here",
            GithubAPI: " Repo Name Goes Here "
        },
*/

// The nested objects will be seperate projects.
const projectPanel = {
    title:" Zander's Professional and Personal Projects",
    projects: [
        {
            name: "Risk of Rain 2 Wiki",
            stack: "Django",
            description: "The Risk of Rain 2(ROR2) wiki, is a small web-based personal project I built utilising Django, base CSS, and Django Templates. It's a very simplistic web-app and can run entirely on it's own within a docker container. It isn't published anywhere since it was supposed to be a project to reinforce my learning.",
            link: "https://github.com/ZanderMB/ror2-wiki-project",
            GithubAPI: "ror2-wiki-project"
        },
        {
            name: "",
            stack: "",
            description: "",
            link: "",
            GithubAPI: ""
        },
    ]
};

export default projectPanel;