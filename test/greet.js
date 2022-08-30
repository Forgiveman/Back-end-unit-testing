import greet from '../greet.js';
import assert from 'assert';
describe ('The Greet function', function(){
    it ('should be able to greet Kgothatso', function (){
        assert.equal('Hello, Kgothatso', greet('Kgothatso'));
    });
    it ('should be able to greet Cloud', function (){
        assert.equal('Hello, Cloud', greet('Cloud'));
    });
});