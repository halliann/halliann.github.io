// About slider
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about-center');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        // remove active from other buttons
        btns.forEach(function(btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});



// // Projects slider
// const menu = document.querySelector('.project-menu');
// const arrowBtn = document.querySelectorAll('.arrow-btn');
// const slidesCont = document.querySelectorAll('.project-slides');
// const slides = document.querySelectorAll('.slide');

// menu.addEventListener('click', function(f) {
//     const id = f.target.dataset.id;

//     // remove active from slide
//     slides.forEach(function(slide) {
//         slide.classList.remove('active');
//         f.target.classList('active');
//     })

//     // add active to clicked slide
//     f.target.classList.add('active');

//     // slide left and ride
//     const slideWidth = slides[0].clientWidth;
//     if(id === 'next') {
//         slidesCont.scrollLeft += slideWidth;
//     } else if (id === 'prev') {
//         slidesCont.scrollLeft -= slideWidth;
//     }
// });

// Submit contact form message
const form = document.querySelector('.form');
const submitBtn = document.getElementById('submit');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const confirmation = document.getElementById('message-sent');

form.addEventListener('submit', event => {
    // prevent form default behavior
    event.preventDefault();

    // disable button once clicked
    submitBtn.disabled = true;

    // add 'message sent' text
    confirmation.innerText = 'Message sent. Chat soon!';
    confirmation.style.display = 'block';

    // clear out input fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});