let isModalOpen = false;
let contrastToggle = true;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle

    if (contrastToggle) {
        document.body.classList += " dark-theme"
        document.getElementById("light-icon").style.display = "none";
        document.getElementById("dark-icon").style.display = "block";
    }
    else {
        document.body.classList.remove("dark-theme")
        document.getElementById("light-icon").style.display = "block";
        document.getElementById("dark-icon").style.display = "none";
    }
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm(
            'service_wbxpg8a',
            'template_qbyoq0a',
            event.target,
            'BCK6ynfq2y7qWWEXm'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavailible. Please contact me directly on thomasjprice2@gmail.com"
            )
        })

}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

// TESTIMONIAL CAROUSEL

// let nextButton = document.getElementById('next')
// console.log(nextButton);



// nextButton.addEventListener("click", (event) => {
//     const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//     const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft -= slideWidth;
// });