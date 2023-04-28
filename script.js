
let typed = new Typed('.auto-input', {
    strings: ['Web developer !', 'Freelancer !', 'Web disegner !'],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
})

function effectAnim() {
    let skills = document.getElementById('skills');
    let distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanceSkills >= 300) {
        let habil = document.getElementsByClassName('progress');
        habil[0].classList.add('javascript');
        habil[1].classList.add('myHtml');
        habil[2].classList.add('ph');
        habil[3].classList.add('wd');
        habil[4].classList.add('cps');
        habil[5].classList.add('creative');
        habil[6].classList.add('problem');
        habil[7].classList.add('team');
        habil[8].classList.add('organisation');
        habil[9].classList.add('creativity');
    }
}

window.onscroll = function() {
    effectAnim();
}
 
