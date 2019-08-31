//task #1
var a = 1, b = 1, c, d;
c = ++a; console.log('c='+c+', т.к. происходит инкриментация перемненной a=1 до вывода ее в консоль. Сначала значение "a" увеличивается на единицу, затем результат присваиватся переменной "b". В след.итерации уже будет а=2.');
d = b++; console.log('d='+d+', т.к. инкриментация перемненной b=1 происходит после вывода ее в консоль. Сначала значение "b" присваиватся переменной "d", затем "b" увеличивается на единицу. В след.итерации уже будет b=2.');
c = (2+ ++a); console.log('c='+c+', т.к. мы прибавляем к 2 переменную a=3 (а=2 увеличенную на 1 в этом выражении). В след.итерации уже будет а=3.');
d = (2+ b++); console.log('d='+d+', т.к. мы прибавляем к 2 переменную b=2. После обработки результата в консоли b увеличится на 1. В след.итерации уже будет b=3.'); 
console.log('a='+a+', т.к. в 3ем выражении "a" приобрело значение =3.'); 
console.log('b='+b+', т.к. в 4ом выражении "b" приобрело значение =3.');


//task #2
var a = 2;
var x = 1 + (a *= 2);
console.log('x='+x+', т.к. к 1 прибавляется "a", значение которого в этом выражение приобрело 2*2=4 ');


//task #3
function rez(a,b) {
    if (a>=0 && b>=0) {
        return a-b;
    }

    if (a<0 && b<0) {
        return a*b;
    }

    if ((a*b)<0) {
        return a+b;
    }    
}

var a=0, b=10;
console.log(rez(a,b));


//task #4
function rnd() {
    return Math.round(Math.random()*15-0);
}


function outAllBetween(a,b) {
    if (a>b) {
        return;
    }
    console.log(a);
    return outAllBetween(a+1,b);
}

var a=rnd();

switch (a)
    {
        default: console.log('а='+a+' не в [0;15]');
        case 0: console.log(0);
        case 1: console.log(1);
        case 2: console.log(2);
        case 3: console.log(3);
        case 4: console.log(4);
        case 5: console.log(5);
        case 6: console.log(6);
        case 7: console.log(7);
        case 8: console.log(8);
        case 9: console.log(9);
        case 10: console.log(10);
        case 11: console.log(11);
        case 12: console.log(12);
        case 13: console.log(13);
        case 14: console.log(14);
        case 15: console.log(15);
    }

//task #4*
outAllBetween(a,15);


//task #5
function sum(a,b) {
    return a+b;
}
function dif(a,b) {
    return a-b;
}
function div(a,b) {
    return a/b;
}
function mul(a,b) {
    return a*b;
}

var a=10, b=3;
console.log('Сумма: '+sum(a,b)+'. \nВычетание: '+dif(a,b)+'. \nПроизведение: '+mul(a,b)+'. \nРазность: '+div(a,b));

//task #6
function mathOperation(arg1,arg2,operation) {
    switch (operation) {
        case sum: return sum(arg1,arg2);
        case dif: return dif(arg1,arg2);
        case mul: return mul(arg1,arg2);
        case div: return div(arg1,arg2);
        default: console.log('операция не распознана');
    }
}

console.log(mathOperation(2,10,mul));


//task #7
console.log((0===null)+'. Возможно, потому что 0 и null относятся к разным типам переменных: 0-'+typeof(0)+', null-'+typeof(null));


//task #8
function power(val,pow) {
    if (pow==1) {
        return val;
    }
    if (pow==0) {
        return 1;
    }
    if (pow==-1) {
        return 1/val;
    }
    pow=(pow>1)?(--pow):++pow;
    val+=val;
    return power(val,pow);
}

var val=2, pow=4;
console.log(power(val,pow));