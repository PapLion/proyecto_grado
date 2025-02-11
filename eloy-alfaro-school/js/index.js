document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view")
    }
  })
}, observerOptions)

document.querySelectorAll(".feature").forEach((feature) => {
  observer.observe(feature)
})

document.querySelectorAll(".feature").forEach((feature) => {
  feature.classList.add("in-view")
})

const menuToggle = document.createElement("button")
menuToggle.classList.add("menu-toggle")
menuToggle.innerHTML = "☰"
document.body.appendChild(menuToggle)

const navLinks = document.querySelector(".nav-links")

menuToggle.addEventListener("click", () => {
  header.classList.toggle("active")
  navLinks.classList.toggle("active")
  menuToggle.innerHTML = header.classList.contains("active") ? "✕" : "☰"
})

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("active")
    navLinks.classList.remove("active")
    menuToggle.innerHTML = "☰"
  })
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    header.classList.remove("active")
    navLinks.classList.remove("active")
    menuToggle.innerHTML = "☰"
  }
})

