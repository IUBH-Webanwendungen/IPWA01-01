class Rechteck {
    höhe = 0;
    breite = 0;
    constructor(h, b) {
        this.höhe = h;
        this.breite = b;
    }

    get höhe () { return this.höhe; }
    get breite () { return this.breite; }

    get fläche() {
        return this.höhe * this.breite;
    }

    get umfang() {
        return this.höhe*2 + this.breite*2;
    }
}

let assert = console.assert;

let r = new Rechteck(7, 8);
assert(r.breite === 8);
assert(r.höhe === 7);
assert(r.fläche === 56);
assert(r.umfang == 30);
