import {Rechteck} from "../../Lesson-6/Rechteck.js";
import assert from 'node:assert';

describe('Rechteck', function () {
    describe('.fläche', function () {
        it('sollte richtige Fläche zurückgeben', function () {
            let r = new Rechteck(7, 8);
            assert(r.fläche === 56);
        });
    });
    describe('.umfang', function () {
        it('sollte richtigen Umfang zurückgeben', function () {
            let r = new Rechteck(7, 8);
            assert(r.umfang == 30);
        });
    });
});