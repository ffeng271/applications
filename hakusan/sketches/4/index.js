
	var mappedRange;
	var currentWord;
	var a = 0;


// Array

var str = "Bis zur Annexion Koreas durch Japan 1910 hatte es Staaten gegeben, die sich über die gesamte Halbinsel erstreckten. Die Teilung des Landes begann nach dem Zweiten Weltkrieg mit der Aufteilung Koreas in eine US-amerikanische und eine sowjetische Besatzungszone, aus denen 1948 infolge der Teilung Koreas zwei unabhängige Staaten hervorgingen. Der Koreakrieg (1950 bis 1953) besiegelte die Spaltung der koreanischen Halbinsel (siehe dazu Korea-Konflikt).";

var string2 = str.replace(/&shy;/g,'');

var string3 = string2.replace(/-/g,'- ');

var arr = string3.split(' ');

// TEXT
// A $( document ).ready() block.
// $(document).mousemove(function(event){
// 	currentWord = arr[0];
// 	mappedRange = Math.floor(arr.length * event.pageX / window.innerWidth);
// 	currentWord = arr[mappedRange];
// 	$('#h1').text(currentWord);
// });

clearInterval(myInterval);

var myInterval = setInterval(function(){
	currentWord = arr[a];
	$('#h1').text(currentWord);
	a++;
}, 500);
