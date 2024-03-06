function colorMode(){
    document.body.classList.toggle("dark-mode")
}

const darkModeToggle = document.querySelector("#darkModeToggle");
darkModeToggle.addEventListener("click", colorMode);