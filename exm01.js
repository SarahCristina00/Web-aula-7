function Cachorro (nome, raça){

    this.nome = nome;
    this.raça = raça;
    this.idade = undefined;
    this.dono = undefined;

}
Cachorro.prototype.fazBarulho = function(){
    console.log("Au!");

}
const toto = new Cachorro("Tótó", "Pug");
const rick = new Cachorro("Rick", "Pug");

console.dir(toto);
console.log(rick);