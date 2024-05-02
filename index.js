let nomeDoHeroi = ""
let xpDoHeroi = 0
let nivel = ""

switch(xpDoHeroi){
  case xpDoHeroi <= 1.000:
    nivel = Ferro
    break
  case xpDoHeroi >= 1.001 || xpDoHeroi <= 2.000 :
    nivel = Bronze
    break  
  case xpDoHeroi >= 2.001 || xpDoHeroi <= 5.000:
    nivel = Prata
    break
  case xpDoHeroi >= 5.001 || xpDoHeroi <= 7.000:
    nivel = Ouro
    break
  case xpDoHeroi >= 7.001 || xpDoHeroi <= 8.000:
    nivel = Platina
    break
  case xpDoHeroi >= 8.001 || xpDoHeroi <= 9.000:
    nivel = Ascendente
    break  
  case xpDoHeroi >= 9.001 || xpDoHeroi <= 10.000:
    nivel = Imortal
    break
  default:
    nivel = Radiante
      
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)