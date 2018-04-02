var text = book
.replace(/\r?\n|\r/g,' ')
.replace(/\s\s+/g, ' ')
.replace(/--/g , ", ")
.replace(/\. /g, ".$")
.replace(/\! /g, "!$")
.replace(/\? /g, "?$");

var a = 0;

var timeout1, timeout2, interval1;

var hasBeenClicked = false;

function map ( value, in_min , in_max , out_min , out_max ) {
	return ( value - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
}

var sentences = text.split('$');

var medium_length_sentences = [];

// sentences.sort(function(a, b){
//     // ASC  -> a.length - b.length
//     // DESC -> b.length - a.length
//
//   return a.length - b.length;
// });

for (var i = 0 ; i < sentences.length; i++){

}

for (var i = 0 ; i < sentences.length; i++){
    if (sentences[i].length < 100 && sentences[i].length > 30){
            medium_length_sentences.push(sentences[i]);
    }
}

// console.log('medium_length_sentences.length = ' + medium_length_sentences.length);


var state = true;
var state2 = false;


// Navigation

var navChooseSentence;


var mousex;
var mousey;

$('#siddhartha-nav').mousemove(function( e ) {
    mousex = e.pageX; //Get X coordinates
    mousey = e.pageY; //Get Y coordinates
    navChooseSentence = Math.floor(map(e.clientX,0, $( window ).width(), 0,medium_length_sentences.length));
    $('.tooltip')
    .css("bottom", "5vh")
    .css('left',mousex - $('.tooltip').outerWidth()/2).
    html(medium_length_sentences[navChooseSentence]);
});





$(document).ready(function() {
    $('.tooltip')
    .css("bottom", "5vh")
    .css('left',0).
    html('siddhartha');

});

function loop(){

// Reset a if it is larger than the array of sentences

    if (a < medium_length_sentences.length){
        a++;
    } else {
        a = 0;
    }

// Clear
    $("#k").html('');
    $("#l").html('');

// Set fontsize related to text-length

    // Get Text-length
    var fontsize1 = map(medium_length_sentences[a].length,30,100,10,7)+"vw";
    var fontsize2 = map(medium_length_sentences[a].length,30,100,100,7)+"vw";
        // Old code
        // var fontsize1 = 5+Math.random()*10+"vw";


// Time offset for showing the text
timeout1 = setTimeout(function(){
    $("#k").html('<div class="animated fadeIn">'+medium_length_sentences[a]+'</div>');
}, 1000);

timeout2 = setTimeout(function(){
    $("#l").html('<div class="txt2 l-text">'+medium_length_sentences[a+1]+'</div>');
}, 2000);



    if (a % 1 == 0){
        state = !state;
    }

    if (a % 10){
        state2 = !state2;
    }

    if (state == true){
        $("#bg").css('background','#eeeeee');
        $("#k").css('color','#222222');
        $("#l").css('color','#eeeeee');
    } else {
        $("#bg").css('background','#222222');
        $("#k").css('color','#eeeeee');
        $("#l").css('color','#222222');
    }

    $('#k').css('font-size',fontsize1);
    $('#k').css('line-height','100%');
    $('#l').css('font-size',fontsize2);
    $('#l').css('line-height','100%');

    var chooseImage = 1+Math.floor(Math.random()*25);


// Clipping paths

    $('#image').html('<img class="image1 simg" src="img/'+chooseImage+'.gif">');

    var cp1 = 20+Math.floor(Math.random()*40);
    var cp2 = 0+Math.floor(Math.random()*10);
    var cp3 = 0+Math.floor(Math.random()*10);
    var cp4 = 80+Math.floor(Math.random()*20);
    var cp5 = 70+Math.floor(Math.random()*25);
    var cp6 = 70+Math.floor(Math.random()*25);
    var cp7 = 70+Math.floor(Math.random()*25);
    var cp8 = 0+Math.floor(Math.random()*25);

    var polygonCode = "polygon("+ cp1 +"% "+cp2+"%, "+cp3+"% "+cp4+"%, "+cp5+"%"+cp6+"%,"+cp7+"%"+cp8+"%)";

    $("#image img").css("-webkit-clip-path", polygonCode);

    var chooseImage2 = 1+Math.floor(Math.random()*25);

    $('#image2').html('<img class="image2 simg" src="img/'+chooseImage2+'.gif">');

    var cp1b = 20+Math.floor(Math.random()*40);
    var cp2b = 0+Math.floor(Math.random()*10);
    var cp3b = 0+Math.floor(Math.random()*10);
    var cp4b = 80+Math.floor(Math.random()*20);
    var cp5b = 70+Math.floor(Math.random()*25);
    var cp6b = 70+Math.floor(Math.random()*25);
    var cp7b = 70+Math.floor(Math.random()*25);
    var cp8b = 0+Math.floor(Math.random()*25);

    var polygonCode2 = "polygon("+ cp1b +"% "+cp2b+"%, "+cp3b+"% "+cp4b+"%, "+cp5b+"%"+cp6b+"%,"+cp7b+"%"+cp8b+"%)";

    $("#image2 img").css("-webkit-clip-path", polygonCode2);


    // Show the indicator

    var indicatorLeft = $(window).width() / medium_length_sentences.length * a;
    console.log(indicatorLeft);
    $('#indicator').css('left',indicatorLeft-5);

}

$( document ).ready(function() {
    loop();
});

interval1 = setInterval(function(){
    loop();
}, 5000);




$( "#siddhartha-nav" ).click(function() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    a = navChooseSentence-1;
    loop();
    clearInterval(interval1);
    interval1 = setInterval(function(){
            loop();
    }, 5000);
});

$( "#k" ).click(function() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    a+=1;;
    loop();
    clearInterval(interval1);
    interval1 = setInterval(function(){
            loop();
    }, 5000);
});


// Hide the timeline when mouse is not moving

var timer;
$(window).mousemove(function(e){
    if (e.pageY > $(window).height()*0.7) {
        console.log('aaaa');
        $('.tooltip').fadeIn();
        $('#siddhartha-nav').addClass('show');

  try {
    clearTimeout(timer);
  } catch (e) {}
  timer = setTimeout(function () {
      $('.tooltip').fadeOut();
      $('#siddhartha-nav').removeClass('show');
      $('.tooltip').removeClass('show');
}, 1000)
};
});
