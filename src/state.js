// State Logic
// Literally just a seperate module to hold the current state,
// Easier to pass it to init.js and paneler.js this way

export let currentPanel = 0;

export function setCurrentPanel(index) {
    currentPanel = index
};