export class Rechteck {
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