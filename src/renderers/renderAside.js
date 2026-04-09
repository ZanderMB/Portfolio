export function renderAside(element, aside) {
    let newAside = document.createElement("img");
    newAside.src = aside;
    newAside.alt = aside;
    newAside.classList.add(
        "rounded-lg",
        "w-full",
        "object-cover",
        "border-3",
        "border-copper/30"
    );
    element.appendChild(newAside);
}