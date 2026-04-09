// This script grabs a specific Repository for the Projects panel.

export async function getRepo(repo) {
    if (repo === "") {
        const ApiEmpty = "No Repository Linked"
        return ApiEmpty
    } else {
        const res = await fetch(`https://api.github.com/repos/ZanderMB/${repo}`);
        if (!res.ok) throw new Error("API Error");
        return await res.json(); 
    };
};

// This one grabs all of my repos.

export async function getUserRepos() {
    const res = await fetch(`https://api.github.com/users/ZanderMB/repos`);
    if (!res.ok) throw new Error("API Error");
    return await res.json();
};


/* What Data I want to grab

    "name" = res.name
    "html_url" = res.html_url

*/