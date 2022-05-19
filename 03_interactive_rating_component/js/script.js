let form = document.querySelector('#form-rate');
let flipCard = document.querySelector('.flip-card-inner');
let rateGiven = document.querySelector('.rate-given');

form.onsubmit = e => {
    e.preventDefault();
    const formData = new FormData(form);
    const formRate = formData.get('rating');
    rateGiven.textContent = formRate;
    flipCard.className += " flipped";
}