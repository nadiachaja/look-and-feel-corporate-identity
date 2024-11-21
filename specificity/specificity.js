// tekst in het wolkje dat met de tijd verandert 
var today = new Date();
var curHr = today.getHours();
var greetingText = document.querySelector(".greeting");
var subText = document.querySelector(".sub-text");
var lessonsLink = document.querySelector(".lessons");
var goodnightMessage = document.querySelector(".goodnight-message"); // Nieuwe variabele
var cloud = document.querySelector(".wolkje")

if (curHr >= 0 && curHr < 6) { // Tussen 0 en 5 (6 uur is niet inbegrepen)
    greetingText.textContent = "Good night";
    subText.textContent = "It's time to sleep";
    goodnightMessage.innerHTML = "I see you <span class='purple'>tomorrow</span>"; // Voeg de boodschap toe met een span
    cloud.classList.add("moved-down"); // Voeg de klasse toe voor de beweging
    
} else if (curHr < 12) {
    greetingText.textContent = "Good morning,";
    subText.textContent = "Shall we start with a story?";
    cloud.classList.remove("moved-down"); // Verwijder de klasse
    
    
} else if (curHr < 18) {
    greetingText.textContent = "Good afternoon,";
    subText.textContent = "Shall we start with a story?";
    cloud.classList.remove("moved-down"); // Verwijder de klasse
   
    
} else {
    greetingText.textContent = "Good evening,";
    subText.textContent = "Shall we start with a story?";
    cloud.classList.remove("moved-down"); // Verwijder de klasse
}




// menu openen en sluiten 
let button = document.querySelector('#menuToggle');
let navigation = document.querySelector('header');

button.addEventListener("click", function() {
    navigation.classList.toggle('show-menu');
    



// tabindex voor menu open en dicht 
    if (navigation.classList.contains('show-menu')) {
        button.setAttribute('tabindex', '8'); 
    } else {
        button.setAttribute('tabindex', '2'); 
        button.focus(); 
    }
});




//andere svg als het menu open is en als het menu dicht is 
const menuIcon = document.getElementById('menuIcon');

button.addEventListener('click', function() {
    if (menuIcon.innerHTML.includes('M 6.0626 19.5390')) {
        // Nieuwe SVG voor het open menu
        menuIcon.innerHTML = '<path d="M16 8L8 16M8 8L16 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
        menuIcon.setAttribute('viewBox', '0 0 24 24'); // Nieuwe viewBox instellen
    } else {
        // Terug naar de originele SVG voor het gesloten menu
        menuIcon.innerHTML = '<path d="M 6.0626 19.5390 L 49.9144 19.5390 C 50.8984 19.5390 51.7187 18.7656 51.7187 17.7812 C 51.7187 16.7968 50.8984 16 49.9144 16 L 6.0626 16 C 5.0782 16 4.2813 16.7968 4.2813 17.7812 C 4.2813 18.7656 5.0782 19.5390 6.0626 19.5390 Z M 6.0626 29.7578 L 49.9144 29.7578 C 50.8984 29.7578 51.7187 28.9843 51.7187 28 C 51.7187 26.9921 50.8984 26.1953 49.9144 26.1953 L 6.0626 26.1953 C 5.0782 26.1953 4.2813 26.9921 4.2813 28 C 4.2813 28.9843 5.0782 29.7578 6.0626 29.7578 Z M 6.0626 40 L 49.9144 40 C 50.8984 40 51.7187 39.2031 51.7187 38.1953 C 51.7187 37.2109 50.8984 36.4375 49.9144 36.4375 L 6.0626 36.4375 C 5.0782 36.4375 4.2813 37.2109 4.2813 38.1953 C 4.2813 39.2031 5.0782 40 6.0626 40 Z"/>';
        menuIcon.setAttribute('viewBox', '0 0 56 56'); // Terug naar originele viewBox
    }
});



//vraagteken openen en sluiten
let vraagToggle = document.querySelector('#vraagToggle');  
let hulp = document.querySelector('article'); 


vraagToggle.addEventListener("click", function() {
    hulp.classList.toggle('show-hulp');  
});





//wobble effecten op de kopje in het menu 

const huis = document.querySelector('.huis');

// Wobble effect on hover
huis.addEventListener('mouseenter', () => {
    huis.classList.add('wobble');
});

huis.addEventListener('mouseleave', () => {
    huis.classList.remove('wobble');
});


const testen = document.querySelector('.testen');

// Wobble effect on hover
testen.addEventListener('mouseenter', () => {
    testen.classList.add('wobble');
});

testen.addEventListener('mouseleave', () => {
    testen.classList.remove('wobble');
});


const les = document.querySelector('.les');

// Wobble effect on hover
les.addEventListener('mouseenter', () => {
    les.classList.add('wobble');
});

les.addEventListener('mouseleave', () => {
    les.classList.remove('wobble');
});


const doelen = document.querySelector('.doelen');

// Wobble effect on hover
doelen.addEventListener('mouseenter', () => {
    doelen.classList.add('wobble');
});

doelen.addEventListener('mouseleave', () => {
    doelen.classList.remove('wobble');
});


const gebruiker = document.querySelector('.gebruiker');

// Wobble effect on hover
gebruiker.addEventListener('mouseenter', () => {
    gebruiker.classList.add('wobble');
});

gebruiker.addEventListener('mouseleave', () => {
    gebruiker.classList.remove('wobble');
});