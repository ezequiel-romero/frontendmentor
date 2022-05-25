let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        var current = document.querySelector(".active");

        if (current) {
            var currentPanel = current.nextElementSibling;
            current.classList.toggle("active");
            currentPanel.style.display = "none";
        }
        
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}