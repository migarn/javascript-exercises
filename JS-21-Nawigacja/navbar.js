// navbar.js

// Modyfikacja:
// Zmieniaj kolejność elementów w zależności od aktualnego czasu

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
		if (location.href.indexOf(navURLs[i]) == -1) {	// this one when not browsing locally
			navStr += ' <B>[</B><A HREF="' + navURLs[i] + '">' + linkText[i] + '</A><B>]</B> ';
			}
		}
	document.writeln('<BR><BR>' + navStr);
	}