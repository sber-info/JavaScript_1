if (!("a" in window)) {
    var a = 1;
}
console.log('1. '+a);



var b = function a(x) {
    x && a(--x);
};
console.log('2. '+a);



function a(x) {
    return x * 2;
}
var a;
console.log('3. '+a);



function b(x, y, a) {
    arguments[2] = 10;
    console.log('4. '+a);
}



b(1, 2, 3);
function a() {
    console.log('5. '+this);
}



a.call(null);
consol.log('6. '+a);