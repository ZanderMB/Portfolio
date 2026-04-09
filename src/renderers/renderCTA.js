import { swapPanel } from "../paneler.js";

export function renderCTA(element, cta) {
    let ctaBtn = document.createElement("button");
    ctaBtn.textContent = cta;
    ctaBtn.dataset.panel = "2";
    ctaBtn.classList.add(
        "inline-flex",
        "w-fit",
        "rounded-full",
        "font-body",
        "border-3",
        "border-copper-dark",
        "bg-copper",
        "text-text",
        "text-center",
        "px-6",
        "py-3",
        "hover:bg-copper-light",
        "hover:text-background",
        "transition",
        "cursor-pointer"
    );
    ctaBtn.addEventListener("click", () => swapPanel(2));
    element.appendChild(ctaBtn);
}