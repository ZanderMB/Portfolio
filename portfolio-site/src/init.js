// Initialisation
import { setCurrentPanel, currentPanel } from "./state.js";
import { renderPanel, swapPanel } from "./paneler.js";
import { panels } from "./paneler.js";


export function pageInit(){
    const savedPanel = parseInt(sessionStorage.getItem("currentPanel")) || 0;
    swapPanel(savedPanel);
};

/* Defunct Init, was causing a caching bug with the hidden class and creating a buncha dead space.
export function pageInit(){
    // Return currentPanel from sessionStorage, if null default 0(homePanel)
    const currentPanel = parseInt(sessionStorage.getItem("currentPanel")) || 0
    console.log(panels)
    renderPanel(panels[currentPanel])
};
*/