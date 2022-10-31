var assert = require('assert');

describe('Rechteck', function () {
    describe('.breite', function () {
        it('sollte richtige Breite zurückgeben', function () {
            let r = new Rechteck(7, 8);
            assert(r.breite === 8);
        });
    });
    describe('.höhe', function () {
        it('sollte richtige Höhe zurückgeben', function () {
            let r = new Rechteck(7, 8);
            assert(r.höhe === 7);
        });
    });
    describe('.fläche', function () {
        it('sollte richtige Fläche zurückgeben', function () {
            let r = new Rechteck(7, 8);
            assert(r.fläche === 56);
        });
    });
    describe('.breite', function () {
        it('sollte richtigen Umfang zurückgeben', function () {
            let r = new Rechteck(7, 8);
            assert(r.umfang == 30);
        });
    });
});