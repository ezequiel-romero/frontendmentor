const shareBox = document.querySelector(".card_main_footer_sharing")
const shareOpenIcon = document.querySelector(".card_main_footer_icon_share")
const shareCloseIcon = document.querySelector(".card_main_footer_sharing_icon_share")

shareOpenIcon.addEventListener("click", () => {
    if (shareBox.classList.contains("hidden")) {
        shareBox.classList.remove("hidden")
        shareBox.style.maxHeight = shareBox.scrollHeight + "px"
    } else {
        shareBox.classList.add("hidden")
        shareBox.style.maxHeight = "0"
    }
})

shareCloseIcon.addEventListener("click", () => {
    shareBox.classList.add("hidden")
    shareBox.style.maxHeight = "0"
})