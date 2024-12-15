const sumar = require("../src/suma");

test('suma 10 + 20 deberia ser 30', ()=>{
    expect(sumar(10, 20)).toBe(30);
});

test('suma -5 + 100 deberia ser 95', ()=>{
    expect(sumar(-5, 100)).toBe(95);
});

test('suma 0 + 41 deberia ser 41', ()=>{
    expect(sumar(0, 41)).toBe(41);
});

test('suma 1000 + 520 deberia ser 1520', ()=>{
    expect(sumar(1000, 520)).toBe(1520);
});
