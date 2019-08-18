// document.write('<h1>Write</h1>');
// console.log('тест консоли');

// var name=prompt('What is your name?')
// console.log('Hellow, ' + name)
// console.log(1/0);
// var b = (2===3)
// console.log ('Пример \n'+b);

// var str=parseInt("5");
// console.log(str);

// var t=10;
// t*=20;
// console.log(t);

// var x=20;
// var y=++x;
// console.log("x="+x+"; y="+y);

//вывод ul с помощью js
var ul='<ul>';
ul+='<li>1</li>';
ul+='<li>2</li>';
ul+='<li>3</li>';
ul+='</ul>';

document.write(ul);

var x1='str', x2=25, x3=true, x4=null;
console.log(typeof(x4));

//объекты
var user = {
    'login': 'admin',
    'pass': '12345'
}

console.log(user.login);

var a=1.5, b=20;
b=a+b;
a=b-a;
b=b-a;
console.log('a='+a+'; b='+b);
