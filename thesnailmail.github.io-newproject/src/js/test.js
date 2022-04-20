"use strict"

let a = prompt("Какого типа сайт вы для себя хотите?\nВыберите один из вариантов:\n1. Визитка\n2. Новостной портал\n3. Форум\n4. Интернет-магазин\n5. Корпоративный портал");

if (a.replace (/\d/g, '').length) {
	alert ("Просьба вводить цифровые значения");
	a = prompt("Какого типа сайт вы для себя хотите?\nВыберите один из вариантов:\n1. Визитка\n2. Новостной портал\n3. Форум\n4. Интернет-магазин\n5. Корпоративный портал");
};

console.log(a);

let b = prompt("Какой дизайн вы хотите для сайта?\nВыберите один из вариантов:\n1. Шаблонный\n2. Уникальный");

if (b.replace (/\d/g, '').length) {
	alert ("Просьба вводить цифровые значения");
	b = prompt("Какой дизайн вы хотите для сайта?\nВыберите один из вариантов:\n1. Шаблонный\n2. Уникальный");
};

if (b == 2) {
		alert("ВНИМАНИЕ!\nПри уникальном дизайне количество бесплатных правок ограничено и зависит от выбраного типа сайта!")
	}

console.log(b);

let c = prompt("Нужна ли адаптация для мобильных устройств?\nВыберите один из вариантов:\n1. Да\n2. Нет");

if (c.replace (/\d/g, '').length) {
	alert ("Просьба вводить цифровые значения");
	c = prompt("Нужна ли адаптация для мобильных устройств?\nВыберите один из вариантов:\n1. Да\n2. Нет");
};

console.log(c);

let cost = 0;

let time = 0;

let yes = 0;

let no = 0;

let change = 0;

let design = 0;

let adapt = 0;

let timeOne = 0;

let timeTwo = 0;

let resultOne = {  //Тип сайта
	c: [
		0,
		5000,
		10000,
		10000,
		20000,
		25000
	],
	t: [
		0,
		1,
		1.5,
		3,
		5,
		7
	]
};

let resultTwo = {  //Дизайн сайта
	c: [
		[0],
		[0, 3000, 5000, 5000, 7000, 10000]
	],
	t: [
		[0],
		[0, 1, 1.5, 1.5, 2, 2]
	]
};

let resultThree = {  //Адаптация
	c: [
		[0],
		[0, 3000, 5000, 5000, 7000, 10000]
	],
	t: [
		[0],
		[0, 1, 1, 1, 1.5, 1.5]
	]
};

let resultFour = {  //Правки
	g: [
		0,
		2,
		3,
		3,
		5,
		5
	]
};

let qOne = [  //Вопрос 1
	"Визитка",
	"Новостной портал",
	"Форум",
	"Интернет-магазин",
	"Корпоративный сайт",
];

let qTwo = [  //Вопрос 2
	"Шаблонный",
	"Уникальный",
];

let qThree = [  //Вопрос 3
	"Да",
	"Нет",
];

qOne.unshift("Пустышка");

qTwo.unshift("Пустышка");

qThree.unshift("Пустышка");

if (b == 2) {
	design = resultTwo.c[1][a];
	timeOne = resultTwo.t[1][a];
};

if (c == 1) {
	adapt = resultThree.c[1][a];
	timeTwo = resultThree.t[1][a];
};

change = resultFour.g[a];

alert("Итог:\nТип сайта: " + qOne[a] + "\nДизайн сайта: " + qTwo[b] + "\nС адаптацией: " + qThree[c] + "\nСтоимость: " 
	+ (resultOne.c[a] + design + adapt) + " рублей" + "\nСроки: " + (resultOne.t[a] + timeOne + timeTwo) + " недель" + "\nДоступное количество правок: " + change);

console.log(design);

console.log(adapt);

console.log(change);