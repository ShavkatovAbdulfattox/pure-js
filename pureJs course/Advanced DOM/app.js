"use-strict"


const section1 = document.querySelector(".section-1")
document.querySelector(".down").addEventListener("click", () => {

    // const s1coords = section1.getBoundingClientRect()

    // console.log(s1coords);
    // window.scrollTo({
    //     top: s1coords.top + window.pageYOffset,
    //     left: s1coords.left + window.pageXOffset,
    //     behavior: "smooth"
    // })
    section1.scrollIntoView({ behavior: "smooth" })
})

// ! ===============================================================================================

// TODO BUbling and capturing 


document.querySelector(".nav--links").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("nav--link")) {
        const id = e.target.getAttribute("href")
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        })
    }
})


// ! ============== tab =================


const tabContent = document.querySelectorAll(".tab-content")
const tabParent = document.querySelector(".tab-container")
const btnTab = tabParent.querySelectorAll("button")

tabParent.addEventListener("click", (e) => {
    const clicked = e.target.closest(".btn-primary")

    if (!clicked) return

    // removing Active classes
    btnTab.forEach(btn => btn.classList.remove("btn-active"))
    tabContent.forEach(t => t.classList.remove("t-active"))

    // Adding active classes
    clicked.classList.add("btn-active")
    document.querySelector(`.t-order--${clicked.dataset.tab}`).classList.add("t-active")
})

// ! ============= navbar ===================
const nav = document.querySelector(".header-content")

const fadeIn = function (e) {
    console.log(this);
    if (e.target.classList.contains("nav--link")) {
        const link = e.target
        const siblings = link.closest(".header-content").querySelectorAll(".nav--link")
        const logo = link.closest(".header-content").querySelector("h1")
        const btn = link.closest(".header-content").querySelector("button")

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this
        })
        logo.style.opacity = this
        btn.style.opacity = this

    }
}

nav.addEventListener("mouseover", fadeIn.bind(0.5))
nav.addEventListener("mouseout", fadeIn.bind(1))



const obsCallback = function () {

}
const obsOptions = {
    root: null,
    threshold: 0.1
}
const observer = new IntersectionObserver(obsCallback, obsOptions)
observer.observe(section1)

// ! Intersection observer Api => what is this , and why it is helpful?
// TODO : WELL THIS API allows to our code observe changes to the way the certain target element intersects another element ot the way it intersects the viewport

// Observer it takes two parametrs the first one is callback , second one is the obj=>
// ! the root is the target is intersecting so again this here is the target and the root element will be the element that we want or target element to intersect so we could now here select  an element or as an alternative  we can write null and them will be able  to observe our target element intersecting the entire viewport
// ! and the second we can define a threshold and this is basically the percentage of intersection at WHICH OBSERVER  callback will be called 