class Penguine {
    constructor () {
        this.habitat = "Antartica";
    }

    printPlaceofOrigin() {
        console.log(this.habitat);
    }
}

const mypenguine = new Penguine();
mypenguine.printPlaceofOrigin();   // =====> Antartica
console.log(mypenguine);
// =====> Penguine { habitat: 'Antartica' }


