class Cachorro {
    constructor(nome, raça) {

        this.nome = nome;
        this.raça = raça;
        this.idade = undefined;
        this.dono = undefined;

    }
    fazBarulho() {
        console.log("Au!");

    }
}
const toto = new Cachorro("Tótó", "Pug");
const rick = new Cachorro("Rick", "Pug");
toto.dono = "Doroty";
rick.dono = "Morty";
toto.idade = 6;
rick.idade = 10;

console.dir(toto);
console.log(rick);