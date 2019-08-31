//task #1
console.log('task #1')
var i=0, j, prostoe;
while (i<=100) {
    j=2;
    prostoe=0;
    while ((j<i)&&(j%i>0)) {
        if (i % j == 0) {
            prostoe++;
        }
        j++;
    }
    if (prostoe==0) {
        console.log(i);
    };
    i++;
}


//task #2
console.log('task #2')
var basket=[], dataPrices=[];

//генерация случайного набора товаров в корзине
for (var i=1;i<=3;i++) {
    basket.push('Товар №'+(Math.round(Math.random()*(3-1)+1)));
}
console.log(basket);

//устанавливаю определенную цену на каждый товар
var product1 = {
    'productName': 'Товар №1',
    'productPrice': 10
}
var product2 = {
    'productName': 'Товар №2',
    'productPrice': 5
}
var product3 = {
    'productName': 'Товар №3',
    'productPrice': 20
}
var product4 = {
    'productName': 'Товар №4',
    'productPrice': 100
}

dataPrices.push(product1,product2,product3,product4)

//функция подсчета стоимости всех товаров в корзине
function countBasketPrice(basket) {
    var s=0;
    for (var i=0;i<=basket.length-1;i++) {
        for (var j=0;j<=dataPrices.length-1;j++) {
            if (basket[i]==dataPrices[j].productName) {
                s=s+dataPrices[j].productPrice;
                break;
            }
        }
    }
    return s;
}

//вывод
console.log(countBasketPrice(basket));


//task #3
console.log('task #3')
for (var k=0;k<=9;k++) {
    console.log(k);
}


//task #4
console.log('task #4')
var x='';
for (var l=1;l<=20;l++) {
    x+='x'
    console.log(x+'\n');
}