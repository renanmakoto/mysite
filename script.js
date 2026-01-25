// Mobile menu toggle
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('navToggle', 'navMenu')

// Active link on scroll
const navLinks = document.querySelectorAll('.navLink')
const sections = document.querySelectorAll('section')

const updateActiveLink = () => {
    let currentSection = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id')
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active')
        }
    })
}

window.addEventListener('scroll', updateActiveLink)

// Close menu on link click (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu')
        navMenu.classList.remove('show')
    })
})

// Smooth scroll for contact button
const contactButton = document.querySelector('.button[href="#contact"]')
if (contactButton) {
    contactButton.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
    })
}

// ScrollReveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 100,
    easing: 'ease-out',
    reset: false
})

sr.reveal('.homeSubtitle', { delay: 100 })
sr.reveal('.homeTitle', { delay: 200 })
sr.reveal('.homeDesc', { delay: 300 })
sr.reveal('.button', { delay: 400 })
sr.reveal('.aboutText', { delay: 200 })
sr.reveal('.skillsData', { interval: 100 })
sr.reveal('.workCard', { interval: 150 })
sr.reveal('.contactText', { delay: 100 })
sr.reveal('.contactLink', { interval: 100 })
