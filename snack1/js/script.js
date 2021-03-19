/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

// 1. creo array di oggetti delle bici
const biciDaCorsa = [
  {
    nome: 'Bianchi',
    peso: 5500
  },
  {
    nome: 'Atala',
    peso: 6000
  },
  {
    nome: 'Pininfarina',
    peso: 5000
  },
  {
    nome: 'Pinarello',
    peso: 7000
  },
];

// 2. inizializzo la variabile per fare il controllo sul peso delle bici
let biciDaCorsaLeggera = biciDaCorsa[0];
// 3. cerco quale bici è la più leggera nell'array
for (let i = 0; i < biciDaCorsa.length; i++){
  if (biciDaCorsa[i].peso < biciDaCorsaLeggera.peso){
    biciDaCorsaLeggera = biciDaCorsa[i];
  }
}
// 4. stampo in console il peso della bici più leggera
let {nome} = biciDaCorsaLeggera
let {peso} = biciDaCorsaLeggera;
console.log(` La bici più leggera è la ${nome} che pesa: ${peso}  `);
