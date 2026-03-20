// Initialisation
import { setCurrentPanel, currentPanel } from "./state.js";
import { renderPanel } from "./paneler.js";
import { panels } from "./paneler.js";

export function pageInit(){
    // Return currentPanel from sessionStorage, if null default 0(homePanel)
    const currentPanel = parseInt(sessionStorage.getItem("currentPanel")) || 0
    console.log(panels)
    renderPanel(panels[currentPanel])
};