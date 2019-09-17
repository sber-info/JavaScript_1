
var folderName = "./img/";

var prodList = [ 
					{
						key: "item_01",
						title: "Финики королевские",
						price: "324.20",
						picture: "item_01.jpg"
					},

					{
						key: "item_02",
						title: "Фундук",
						price: "244.80",
						picture: "item_02.jpg"
					},

					{
						key: "item_03",
						title: "Орехи пекан",
						price: "208.10",
						picture: "item_03.jpg"
					},

					{
						key: "item_04",
						title: "Семена тыквы",
						price: "324.20",
						picture: "item_04.jpg"
					},

					{
						key: "item_05",
						title: "Фисташки",
						price: "402.09",
						picture: "item_05.jpg"
					},

					{
						key: "item_06",
						title: "Грецкий орех",
						price: "282.44",
						picture: "item_06.jpg"
					}
				];

var prodMap = new Map();

var basketTableElement = document.getElementById("basket_table");
var itemListElement = document.getElementById("item_list");
var totalAmountElement = document.getElementById("total");

var basketContent = [];


function task_2() {

	for (var j = 0; j < prodList.length; j++) {
		drawNextProductItem(j);
	}

}

function drawNextProductItem(aProdItem) {

	var currentProduct = prodList[ aProdItem ];
	prodMap.set(currentProduct.key, currentProduct);

	var itemElement = document.createElement("div");
	itemElement.className = "item";
	itemElement.setAttribute("data-prod-id", currentProduct.key);

	var imgElement = document.createElement("img");
	imgElement.className = "prod_image";
	imgElement.src = folderName + currentProduct.picture;

	var basketButtonElement = document.createElement("div");
	basketButtonElement.className = "basket_icon_border";
	basketButtonElement.onclick = putItemToBasket;

	var basketIconElement = document.createElement("img");
	basketIconElement.className = "basket_icon";
	basketIconElement.src = "./img/basket.png";

	/* title & price */
	var textWrapperElement = document.createElement("div");
	textWrapperElement.className = "text";

	var titleElement = document.createElement("p");
	titleElement.className = "title";
	titleElement.innerText = currentProduct.title;

	var priceElement = document.createElement("p");
	priceElement.className = "price";
	priceElement.innerText = currentProduct.price;


	/* putting in the container */
	textWrapperElement.appendChild(titleElement);
	textWrapperElement.appendChild(priceElement);

	basketButtonElement.appendChild(basketIconElement);

	itemElement.appendChild(imgElement);
	itemElement.appendChild(basketButtonElement);
	itemElement.appendChild(textWrapperElement);

	itemListElement.appendChild(itemElement);

}

function putItemToBasket(e) {
	var clickedElement = e.target;

	var parent = clickedElement.parentNode;
	if (parent.className != "item") {
		parent = parent.parentNode;
	}

	prodKey = parent.getAttribute("data-prod-id");
	currentProduct = null
	ndxInBasket = -1;

	for (var j = 0; j < basketContent.length; j++) {
		var basketItem = basketContent[ j ];
		if (basketItem.key == prodKey) {
			basketItem.qty = basketItem.qty + 1;
			basketItem.total = (basketItem.price * basketItem.qty);
			ndxInBasket = j;
			break;
		}
	}

	if (ndxInBasket == -1) {
		currentProduct = prodMap.get(prodKey);

		var basketItem = {};

		basketItem.key = currentProduct.key;
		basketItem.title = currentProduct.title;
		basketItem.price = currentProduct.price;
		basketItem.qty = 1;
		basketItem.total = currentProduct.price;

		basketContent.push(basketItem);
	}


	drawTable(ndxInBasket);
}


function drawTable(aNdxInBasket) {

	var fieldList = [ 'title', 'price', 'qty', 'total' ];

	if (aNdxInBasket == -1) {
		var basketItem = basketContent[ basketContent.length - 1 ];

		var row = document.createElement("tr");
		row.setAttribute("data-row-id", basketItem.key);

		for (var col = 0; col < 5; col++) {
			var columnElement = document.createElement("td");

			if (col == 0) {
				columnElement.innerText = basketContent.length;
			} else  {
				var fieldName = fieldList[ col - 1 ];
				columnElement.innerText = basketItem[fieldName];
			}

			row.appendChild(columnElement);
		}

		basketTableElement.appendChild(row);

	} else {

		var basketItem = basketContent[ aNdxInBasket ];

		var row = document.querySelector("tr[data-row-id=" + basketItem.key + "]");

		row.childNodes[3].innerText = basketItem.qty;
		row.childNodes[4].innerText = basketItem.total;

	}

	var totalAmount = 0;

	for (var j = 0; j < basketContent.length; j++) {
		var basketItem = basketContent[ j ];
		totalAmount = parseFloat(totalAmount + basketItem.total);
	}

	totalAmountElement.innerText = "Итог: " + totalAmount;

}

