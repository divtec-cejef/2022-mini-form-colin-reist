/**
 * @author Colin Reist
 * @since 2022.09.06
 */

'use strict';

const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // annule l'envoie du formulaire
    alert('envoyé');
});

const listeBackground = document.getElementById('background');
formulaire.addEventListener('change', function (event) {
    event.preventDefault(); // annule l'envoie du formulaire
    alert(listeBackground.value);
    document.body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value})`
});

console.log('Test liaison JS');
