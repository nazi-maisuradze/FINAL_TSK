let navigationelement = document.getElementById ('navigationblock');
let burgerbar = document.getElementById ('burgerblock');

burgerbar.addEventListener ('click' , function() {
    navigationelement.classList.add('nav');
})