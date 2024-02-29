// [future] i use json to retrive content base on user selected language
// content_ar.json for storing arabic version page content 
// content_en.json for storing english version page content 

// Dark/light Mode
function theme () {
    const switcher = document.querySelector(".Banner__themeSwitcher input");
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    let darkModeState = localStorage.getItem("dark") === "true";
    
    function toggleDarkMode(state) {
        document.documentElement.classList.toggle("dark", state);
        darkModeState = state;
        switcher.classList.toggle("checked", state)
        // switcher.checked = state;
    }
    
    function setDarkModeLocalStorage(state) {
        localStorage.setItem("dark", state);
    }
    
    // Initial settings
    toggleDarkMode(darkModeState);
    
    // Listen for changes in the OS settings.
    useDark.addListener((evt) => toggleDarkMode(console.log(evt.matches)));
    
    // Toggles the "dark-mode" class on click and sets localStorage state
    switcher.addEventListener("change", () => {
        darkModeState = !darkModeState;
        toggleDarkMode(darkModeState);
        setDarkModeLocalStorage(darkModeState);
    });
}
theme()
    


