const persone = [
  { nome: "Mario", cognome: "Rossi", eta: 25 },
  { nome: "Luigi", cognome: "Bianchi", eta: 30 },
  { nome: "Giovanna", cognome: "Verdi", eta: 40 },
  { nome: "Laura", cognome: "Neri", eta: 35 },
  { nome: "Paolo", cognome: "Gialli", eta: 17 },
  { nome: "Chiara", cognome: "Marroni", eta: 28 },
  { nome: "Antonio", cognome: "Azzurri", eta: 45 },
  { nome: "Roberta", cognome: "Rosa", eta: 50 },
  { nome: "Marco", cognome: "Celesti", eta: 32 },
  { nome: "Sara", cognome: "Viola", eta: 27 },
  { nome: "Andrea", cognome: "Arancioni", eta: 15 },
  { nome: "Elena", cognome: "Blu", eta: 33 },
  { nome: "Francesco", cognome: "Grisù", eta: 37 },
  { nome: "Valentina", cognome: "Indaco", eta: 42 },
  { nome: "Davide", cognome: "Turchesi", eta: 31 },
  { nome: "Giulia", cognome: "Argento", eta: 26 },
  { nome: "Matteo", cognome: "Rame", eta: 38 },
  { nome: "Federica", cognome: "Oro", eta: 36 },
  { nome: "Alessandro", cognome: "Platino", eta: 39 },
  { nome: "Elisa", cognome: "Bronzo", eta: 34 },
  { nome: "Simone", cognome: "Piombo", eta: 16 },
  { nome: "Veronica", cognome: "Ferro", eta: 41 },
  { nome: "Nicola", cognome: "Alluminio", eta: 43 },
  { nome: "Cristina", cognome: "Titanio", eta: 44 },
  { nome: "Giorgio", cognome: "Zinco", eta: 24 },
  { nome: "Daniela", cognome: "Rutenio", eta: 48 },
  { nome: "Fabio", cognome: "Mercurio", eta: 49 },
  { nome: "Silvia", cognome: "Osmio", eta: 47 },
  { nome: "Riccardo", cognome: "Tantalio", eta: 46 }
];
let arrayResult = [];

for (const value of persone) {
  let drives = value.eta >= 18 ? "può guidare" : "non può guidare";
  arrayResult.push(`${value.nome} ${value.cognome} ${drives}`);
}

console.log(arrayResult)