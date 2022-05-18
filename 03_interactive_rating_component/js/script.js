var btns = document.querySelectorAll(".rating-number");
var btnActive = '';

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.querySelector(".active");
        if (current) {
            current.className = current.className.replace(" active", "");
        }
        this.className += " active";
        return btnActive = this.textContent;
    });
  }

document.querySelector(".submit").addEventListener("click", function() {
    if (document.querySelector(".active")) {
        document.querySelector(".rating").textContent = 'You selected ' + btnActive + ' out of 5';
        document.querySelector(".rating-container").className += " d-none";
        document.querySelector(".thankyou-container").className += " d-block";
    } else {
        alert('Please choose a rating!')
    }
});