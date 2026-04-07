// This script grabs a specific Repository for the Projects panel.

export async function getRepo(repo) {
    const res = await fetch(`https:/api.github.com/repos/ZanderMB/${repo}`);
    if (!res.ok) throw new Error("API Error");
    return await res.json();
};
console.log(res.json());