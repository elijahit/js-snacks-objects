let arrayDefault = [
  {"nome": "cane", "famiglia": "canidi", "classe": "mammiferi"},
  {"nome": "gatto", "famiglia": "felidi", "classe": "mammiferi"},
  {"nome": "elefante", "famiglia": "elefanti", "classe": "mammiferi"},
  {"nome": "orso", "famiglia": "ursidi", "classe": "mammiferi"},
  {"nome": "tigre", "famiglia": "felidi", "classe": "mammiferi"},
  {"nome": "aquila", "famiglia": "accipitridi", "classe": "uccelli"},
  {"nome": "serpente", "famiglia": "colubridi", "classe": "rettili"},
  {"nome": "pinguino", "famiglia": "spheniscidi", "classe": "uccelli"},
  {"nome": "rana", "famiglia": "ranidi", "classe": "anfibi"},
  {"nome": "leone", "famiglia": "felidi", "classe": "mammiferi"},
  {"nome": "cavallo", "famiglia": "equidi", "classe": "mammiferi"},
  {"nome": "giraffa", "famiglia": "giraffidi", "classe": "mammiferi"},
  {"nome": "coccodrillo", "famiglia": "crocodilidi", "classe": "rettili"},
  {"nome": "falco", "famiglia": "falconidi", "classe": "uccelli"},
  {"nome": "scimpanzé", "famiglia": "ominidi", "classe": "mammiferi"},
  {"nome": "lupo", "famiglia": "canidi", "classe": "mammiferi"},
  {"nome": "koala", "famiglia": "phascolarctidi", "classe": "mammiferi"},
  {"nome": "struzzo", "famiglia": "struzionidi", "classe": "uccelli"},
  {"nome": "tartaruga", "famiglia": "testudinidi", "classe": "rettili"},
  {"nome": "panda", "famiglia": "ursidi", "classe": "mammiferi"}
];
let mammiferi = [];


for (const value of arrayDefault) {
  if(value.classe == "mammiferi") {
    mammiferi.push(value);
  }
}

console.log(mammiferi)
