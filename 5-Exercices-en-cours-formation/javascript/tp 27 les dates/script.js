let dateChoisie = new Date();
console.log(dateChoisie);

console.log($(dateChoisie.getMonth()));

const chooseDate = new Date(Date.UTC(2022, 11, 30, 13, 40, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(chooseDate.toLocaleDateString("fr-FR", options));