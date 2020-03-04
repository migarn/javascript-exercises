// navbar.js

/*
Modyfikacja:
Zmieniaj kolejność elementów w zależności od aktualnego czasu

Przyjąłem, że aktualny czas będzie reprezentowany przez liczbę powstałą przez zsumowanie aktualnych: roku
miesiąca, dnia, godziny, minuty i sekundy. Następnie dla liczby tej obliczam resztę z dzielenia przez
długość tablicy zawierającej adresy URL. Reszta ta zawsze będzie równa jednemu z indeksów tablicy (dla
rozważanego przykładu obliczam resztę z dzielenia przez 5, co daje mi 0, 1, 2, 3 lub 4) i tę wartość przyjmuję
jako pierwszy element nowej tablicy 'indices'. Tablicę tę uzupełniam kolejnymi wartościami indeksów (w odpowiednim
momencie przechodząc do wartości 0). Następnie w pętli uzupełniającej wartość zmiennej 'navStr' jako indeksy
tablic 'navURLs' oraz 'linkText' nie przyjmuję kolejnych wartości zmiennej 'i' lecz kolejne wartości tablicy
'indices'.

*/

var navURLs  = new Array('astronomy.html', 'science.html', 'sports.html', 'music.htm', 'people.htm');
var linkText = new Array('Astronomy', 'Other Sciences', 'Sports', 'Musicians\' Corner', 'Cool People');

function navbar() {
	var currentDate = new Date();
	var summedTime = currentDate.getFullYear() + currentDate.getMonth() + 1 + currentDate.getDate() + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();
	var indices = new Array(navURLs.length);
	var currentIndex = summedTime % navURLs.length;
	
	for (var i = 0; i < indices.length; i++) {
		indices[i] = currentIndex;
		currentIndex++;
		if (currentIndex == navURLs.length) {
			currentIndex = 0;
		}
	}
	
	var navStr= '';
	for (var i = 0; i < navURLs.length; i++) {
		//	if (location.href != navURLs[i]) {		    	   Uncomment this line and comment 
		if (location.href.indexOf(navURLs[indices[i]]) == -1) {	// this one when not browsing locally
			navStr += ' <B>[</B><A HREF="' + navURLs[indices[i]] + '">' + linkText[indices[i]] + '</A><B>]</B> ';
			}
		}
	document.writeln('<BR><BR>' + navStr);
	}