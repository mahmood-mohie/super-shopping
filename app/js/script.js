console.log("hiiiii")


// Dark/light Mode
function darkMode () {
    const switcher = document.querySelector(".top-header__switch input")
    const useDark = window.matchMedia("(prefers-color-scheme: dark)")
    let darkModeState = false;
    
    function toggleDarkMode(state){
        document.documentElement.classList.toggle("dark", state);
        darkModeState = state;
    }

    function setDarkModeLocalStorage (state) {
        window.localStorage.setItem("dark", state )
    }
    // Intial settings
    toggleDarkMode(window.localStorage.getItem("dark") == true)
    // Listen for changes in the OS settings.
    useDark.addListener((evt)=> toggleDarkMode(evt.matches));
    // Toggles the "dark-mode" class on click and sets localStorage state
    switcher.addEventListener("change", ()=> {
        darkModeState = !darkModeState;
        toggleDarkMode(darkModeState);
        setDarkModeLocalStorage(darkModeState)
    })
}
darkMode()

