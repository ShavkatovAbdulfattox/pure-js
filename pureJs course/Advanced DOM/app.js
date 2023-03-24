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


// ! Intersection observer Api => what is this , and why it is helpful?
// TODO : WELL THIS API allows to our code observe changes to the way the certain target element intersects another element ot the way it intersects the viewport

// Observer it takes two parametrs the first one is callback , second one is the obj=>
// ! the root is the target is intersecting so again this here is the target and the root element will be the element that we want or target element to intersect so we could now here select  an element or as an alternative  we can write null and them will be able  to observe our target element intersecting the entire viewport
// ! and the second we can define a threshold and this is basically the percentage of intersection at WHICH OBSERVER  callback will be called 
const obsCallback = function (entires) {
    const [entry] = entires

    if (!entry.isIntersecting) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")

    }
}
const obsOptions = {
    threshold: 0,
    rootMargin: "-20px"
}
const observer = new IntersectionObserver(obsCallback, obsOptions)
observer.observe(section1)

const sections = document.querySelectorAll("section");


const obsAnim = (entires, observe) => {
    const [entry] = entires;
    console.log(entry);
    if (!entry.target) return
    entry.target.classList.remove("hidden-section")
    observe.unobserve(entry.target)
}
const obsSection = new IntersectionObserver(obsAnim, { threshold: 0.25 })
sections.forEach(sec => {
    obsSection.observe(sec)
    // sec.classList.add("hidden-section")
})
// ! ============= SLIDER ++++++++++++++++++++

const slider = () => {



    const slides = document.querySelectorAll(".slide")
    const slider = document.querySelector(".slider")
    const btnRight = document.querySelector(".slider__btn--right")
    const btnLeft = document.querySelector(".slider__btn--left")
    const dotContainer = document.querySelector(".dots")

    let curSlide = 0
    const maxSlide = slides.length - 1


    // Functions

    const createDots = () => {
        slides.forEach((_, i) => {
            dotContainer.insertAdjacentHTML("beforeend", `
        <button class="btn dots__dot" data-slide="${i}"></button>`)
        })

    }


    const activateDot = function (slide) {
        document.querySelectorAll(".dots__dot").forEach(dot => {
            dot.classList.remove("btn-primary")
        })
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("btn-primary")
    }
    slider.style.overflow = "hidden"
    // functions 

    const goToSlide = (slide = 0) => {
        slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`)
    }

    const nextSlide = () => {
        if (curSlide === maxSlide)
            curSlide = 0
        else
            curSlide++
        goToSlide(curSlide)
        activateDot(curSlide)

    }
    const prevSlide = () => {
        if (curSlide <= 0)
            curSlide = maxSlide
        else
            curSlide--
        goToSlide(curSlide)
        activateDot(curSlide)
    }

    const init = () => {
        createDots()
        goToSlide()

        activateDot(0)

    }

    init()

    // Event handlers

    btnRight.addEventListener("click", nextSlide)
    btnLeft.addEventListener("click", prevSlide)

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") prevSlide()
        e.key === "ArrowRight" && nextSlide()
    })


    dotContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn")) {
            const { slide } = e.target.dataset
            goToSlide(slide)
            activateDot(slide)
        }
    })
}

slider()



document.addEventListener("DOMContentLoaded", (e) => { 
    
})

