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


//====================>  Inheritance  <=======================
//------------------  "Extend" keyword  ----------------------


class LivingOrganism {
    constructor () {
        this.breaths = true;
    }

    isBreathing () {
        console.log(this.breaths);
    }
}


class Bird extends LivingOrganism {
    constructor () {
        super();
        this.eats = true;
    }

    printHabit () {
        console.log(this.eats);
    }
}

class Penguin extends Bird {
    constructor() {
        super();
        this.habitat = "Antartica";
    }

    printPlaceofOrigin() {
        console.log(this.habitat);
    }
} 

const mypenguin = new Penguin();
console.log(mypenguin);
// ====> Penguin { breaths: true, eats: true, habitat: 'Antartica' }

mypenguin.printPlaceofOrigin();  // ====> Antartica
mypenguin.printHabit();   // ====> true
mypenguin.isBreathing();   // ====> true