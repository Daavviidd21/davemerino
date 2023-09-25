

// about me skills 

function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var link of tablinks) {
        link.classList.remove("active-link");
    }

    for (var content of tabcontents) {
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 

// end about me 



// Menu box fo mobile view 
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.querySelector('#sidemenu');


openBtn.addEventListener('click', function() {
    sideMenu.style.right = '0';
    
});

closeBtn.addEventListener('click', function() {
    sideMenu.style.right = '-200px'; 
});

//end menu box function 


// arrow up

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('#up')
    scroll.classList.toggle("active", window.scrollY > 500)
})

const upBtn = document.querySelector('#up')

upBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// arrow end here 

// Send Message 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyTUayrbluJQqnjldgUvL3PKSXBGhUSOU-Qq8IJFntWTzSkZliJKkB4RiHf2B9bh-kM3w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('#msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        },3000 );
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// send end here 





