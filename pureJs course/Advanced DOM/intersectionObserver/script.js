// this will take and callback function and the options for how you want to configure it, the CB => will called every time when observing changing in the intersection


const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 1
})
cards.forEach(card => {
    observer.observe(card)
})