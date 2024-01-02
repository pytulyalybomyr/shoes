let front = document.querySelector(".faq__main-card_front")
let back = document.querySelector(".faq__main-card_back")

front.addEventListener('mouseover', () => {
    front.classList.add("rt90")
    back.classList.add("rt180")
})
front.addEventListener('mouseout', () => {
    front.classList.remove("rt90")

    back.classList.remove("rt180")
})