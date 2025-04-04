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

const navLink = document.querySelectorAll('.navLink')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    let currentSection = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id')
        }
    })

    navLink.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active')
        }
    })
})

navLink.forEach(n => n.addEventListener('click', function() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('show')
}))

document.querySelector('.button[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.homeTitle', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.aboutText', { delay: 400 })
sr.reveal('.skillsData', { interval: 200 })
sr.reveal('.workCard', { interval: 200 })
sr.reveal('.contactLink', { interval: 200 })


const buttons = document.querySelectorAll('.button')
const icons = document.querySelectorAll('.contactLink i')

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 10px 36px rgba(0, 0, 0, 0.25)'
    })

    button.addEventListener('mouseout', () => {
        button.style.boxShadow = '0 10px 36px rgba(0, 0, 0, 0.15)'
    })
})

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#33c0b3'
    })

    icon.addEventListener('mouseout', () => {
        icon.style.color = '#00ADA2'
    })
})
