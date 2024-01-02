let burger__button = document.querySelector(".burger__button")
let burger__block = document.querySelector(".burger__block")
let toggle_delete = document.querySelector(".toggle_delete")


burger__button.addEventListener("click", () => {
    burger__block.classList.add('vision')
})
toggle_delete.addEventListener("click", () => {
    burger__block.classList.toggle('vision')
})