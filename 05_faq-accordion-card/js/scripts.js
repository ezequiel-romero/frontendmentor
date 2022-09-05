let btns = document.querySelectorAll(".btn");
let panels = document.querySelectorAll(".panel");

btns.forEach(element => {
    element.addEventListener("click", ()=> {
        
        // Check & hide active panel
        let btnActive = document.querySelectorAll(".active")
        if (btnActive.length !== 0) {
            btnActive.forEach(element => {
                element.classList.remove("active")
                let currentPanel = element.nextElementSibling
                currentPanel.style.maxHeight = "0"
            })
        }

        // Show clicked panel
        element.classList.add("active")
        let currentPanel = element.nextElementSibling
        currentPanel.classList.add("active")
        currentPanel.style.maxHeight = currentPanel.scrollHeight + "px"
    })
});