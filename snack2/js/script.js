/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
const squadreCalcio = [
  {
    'nome': 'Juventus',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Roma',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Sampdoria',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Milan',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Sassuolo',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Napoli',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
];
// genero funzione per i numeri random per i punti e falli
function generaNumeroRandom(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 2. tramite la funzione inserisco i numeri random in punti fatti e falli subiti
for (let i = 0; i < squadreCalcio.length; i++){
  squadreCalcio[i].puntiFatti = generaNumeroRandom(0,114);
  squadreCalcio[i].falliSubiti = generaNumeroRandom(0,100);
}
console.log(squadreCalcio);
// 3. inizializzo il nuovo array di squadre che conterrà i nomi e i falli subiti
const falliSubitiSquadre = [];
for (let i = 0; i < squadreCalcio.length; i++){
  let {nome, falliSubiti} = squadreCalcio[i];
  falliSubitiSquadre.push({
    nome,
    falliSubiti,
  });
}
console.log(falliSubitiSquadre);
