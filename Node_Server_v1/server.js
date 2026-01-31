const http = require('http');
const math = require('./Math').add; // Importation de toutes les fonctions depuis Math.js
const add = require('./Math').add; // Importation spécifique de la fonction add
const subtract = require('./Math').subtract; // Importation spécifique de la fonction subtract
const { add: additionner } = require('./Math'); // Importation avec renommage utilise la syntaxe destructuring (recommandée)

// Importation avec les modules ES6
//import { addition , soustraction } from './operation';

// Création d'un serveur Http basique
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Mes opérations \n 5 + 3 = ${add(5, 3)} 5 - 3 = ${subtract(5, 3)} \n`);
});
// Le serveur écoute sur le port 3000
server.listen(3000, () => {
    console.log('Serveur écoute sur http://localhost:3000/');
});