/**
 * @author Colin Reist
 * @since 2022.09.06
 */

'use strict';

//Animation du bouton
const btCreer = document.querySelector('[type="submit"]');
//Animation du bouton

btCreer.addEventListener('animationend', function () {
    alert('envoyé');
    formulaire.reset();
    btCreer.classList.remove('animate__heartBeat');
})


const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // annule l'envoie du formulaire
    btCreer.classList.add('animate__heartBeat');
});

const listeBackground = document.getElementById('background');
listeBackground.addEventListener('change', function (event) {
    event.preventDefault(); // annule l'envoie du formulaire
    alert(listeBackground.value);
    document.body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value})`
});

console.log('Test liaison JS');
