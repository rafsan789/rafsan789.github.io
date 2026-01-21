// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Form UX
const form = document.querySelector(".contact-form");
const button = form.querySelector("button");

form.addEventListener("submit", e => {
    e.preventDefault();
    button.innerText = "Mengirim...";
    setTimeout(() => {
        alert("Pesan berhasil dikirim!");
        form.reset();
        button.innerText = "Kirim Pesan";
    }, 1200);
});
