var p='<p>';
p+='Hellow, world!'
p+='</p>'
document.write(p);

//объетки
var d=new Date;
var year=d.getFullYear();
console.log(year);
if (year % 4 == 0) {
    console.log('Високосный год')
}
else {
    console.log('Не високосный год');
}

//тернар
var a=40;
b=(a<20||a<40)?20:1;

//switch
var a=11;
switch (a) {
    case 1: console.log(a);
    break;
    case 2: console.log(a);
    break;
    case 11: console.log(a);
    break;
    default: console.log(0);
}