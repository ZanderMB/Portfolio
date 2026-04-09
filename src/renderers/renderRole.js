export function renderRole(element, role) {
    let myRole = document.createElement("p");
    myRole.textContent = role;
    myRole.classList.add(
        "font-body",
        "text-copper-light",
        "text-lg",
        "tracking-wide"
    );
    element.appendChild(myRole);
}