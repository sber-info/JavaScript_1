document.body.style.margin = 0;

var container = document.createElement('div');
container.style.cssText = 'margin: 0 auto; min-width: 360px; max-width: 1230px; width: 100%; display: flex; justify-content: center; flex-wrap: wrap; font-family: Arial;';
document.body.appendChild(container);

catalog.forEach(el => {
    var prodInfo = document.createElement('div');
    prodInfo.style.cssText = 'width: 150px; min-height: 250px; border: 1px solid #aeaeae; padding: 20px; margin: 20px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; flex-direction: column;';
    // prodInfo.style.backgroundImage = 'url(' + el.miniature + ')';
    container.appendChild(prodInfo);

    var prodInfoTitle = document.createElement('span');
    prodInfoTitle.style.cssText = 'display: block; width: 100%; text-align: center; font-size: 17px; line-height: 1.2; min-height: 50px; font-weight: 700;';
    prodInfoTitle.innerText = el.title;
    prodInfo.appendChild(prodInfoTitle);

    var prodInfoImg = document.createElement('img');
    prodInfoImg.src = el.miniature;
    prodInfoImg.width = 100;
    prodInfoImg.height = 100;
    prodInfoImg.id = 'i' + catalog.indexOf(el);
    prodInfoImg.align = 'center';
    prodInfo.appendChild(prodInfoImg);

    var prodInfoPrice = document.createElement('span');
    prodInfoPrice.style.cssText = 'display: block; width: 100%; text-align: center; font-size: 17px; line-height: 30px; min-height: 50px;';
    prodInfoPrice.innerText = el.price + ' руб.';
    prodInfo.appendChild(prodInfoPrice);

    var prodInfoBtn = document.createElement('button');
    prodInfoBtn.style.cssText = 'width: 100%; height: 40px; outline: none; background-color: #363636; border-radius: 6px; border: 0; color: #fff; font-wight: 700;';
    prodInfoBtn.innerText = 'Заказать';
    prodInfoBtn.id = 'p' + catalog.indexOf(el);
    prodInfo.appendChild(prodInfoBtn);
});

var modalWin = document.createElement('div');
modalWin.id = 'mod1';
modalWin.style.cssText = 'position: fixed; z-index: 2; width: 600px; height: 300px; top: 15px; display: none; transition: .5s; background-repeat: no-repeat; position: center; background-size: 100%; justify-content: space-between; align-items: center; text-shadow: 1px 1px 10px black; background-color: #aeaeae; border-radius: 6px;';
container.appendChild(modalWin);

var modalWinClose = document.createElement('span');
modalWinClose.innerText = '🞫';
modalWinClose.style.cssText = 'cursor: pointer; position: absolute; z-index: 2; text-align: right; color: #fff; display: none; font-weight: 700; top: 25px; right: 29%; text-shadow: 1px 1px 10px black; font-size: 20px';
container.appendChild(modalWinClose);

//элемент next
var modalWinNext = document.createElement('span');
modalWinNext.style.cssText = 'text-align: center; cursor: pointer; width: 30px; height: 30px; text-aline: center; color: #fff; font-size: 20px;'
modalWinNext.id = 'left';
modalWinNext.innerText = '◀';
modalWin.appendChild(modalWinNext);

var modalWinNext = document.createElement('span');
modalWinNext.style.cssText = 'text-align: center; cursor: pointer; width: 30px; height: 30px; text-aline: center; color: #fff; font-size: 20px; '
modalWinNext.id = 'right';
modalWinNext.innerText = '▶';
modalWin.appendChild(modalWinNext);

var summary = document.createElement('div');
summary.style.cssText = 'width: 70%; display: block; padding: 30px; border: 1px dashed #aeaeae;';
container.appendChild(summary);

var sum = 0;
var count = 0;

var summarySum = document.createElement('h2');
summarySum.innerHTML = 'Выбранно машин: ' + count + ', сумма: ' + sum + ' руб.';
summarySum.style.cssText = 'margin: 0; padding: 0;';
summary.appendChild(summarySum);

var selectedProd;
function inBasket(event) {
    let i = parseInt(this.id.match(/\d+/));
    j = 0;
    selectedProd = catalog[i];
    er(j);
    modalWin.style.backgroundImage = 'url(' + catalog[i].images[j] + ')';

    modalWin.style.display = 'flex';
    modalWinClose.style.display = 'inline';
}

function modalWinOut(event) {
    modalWin.style.display = 'none';
    modalWinClose.style.display = 'none';
}

var j = 0;
function next(event) {
    if (this.id == 'right') {
        j++;
        if (j > selectedProd.images.length - 1) { j = 0; }
    }
    else {
        j--;
        if (j < 0) { j = selectedProd.images.length - 1; }
    }
    modalWin.style.backgroundImage = 'url(' + selectedProd.images[j] + ')';
    er(j);
}

function er(r) {
    let img = document.createElement('img');
    img.src = selectedProd.images[r];
    img.onerror = function () { alert('Картинка не найдена'); }
}


var masProd = [];
var masCounItem = [0, 0, 0];
var summaryItem = document.createElement('p');
// var counItem=0;
function addProd(event) {
    let i = parseInt(this.id.match(/\d+/));
    selectedProd = catalog[i];
    masCounItem[i] = masCounItem[i] + 1;
    summaryItem.id = i;

    count++;
    sum += selectedProd.price;
    summarySum.innerHTML = 'Выбранно машин: ' + count + ', сумма: ' + sum + ' руб.';

    let summaryItem9 = document.createElement('p');
    summaryItem9.innerHTML = count + '. ' + selectedProd.title + ': ' + selectedProd.price + ' руб.'
    summary.appendChild(summaryItem9);
}


//назначаем ожидание события click
var img = document.getElementsByTagName('img');
for (let el of img) {
    el.addEventListener('click', inBasket);
}

var btn = document.getElementsByTagName('button');
for (let el of btn) {
    el.addEventListener('click', addProd);
}

modalWinClose.addEventListener('click', modalWinOut);
document.getElementById('right').addEventListener('click', next);
document.getElementById('left').addEventListener('click', next);

