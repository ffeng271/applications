// Wie viele Links sollen in die navi?

var howManyLinks = 13;

for (var i = 1; i < howManyLinks+1; i++){
    var linkHtml = '<a id="link-' + i + '">' + i + '</a>';
    $('#navbox').append(linkHtml);
}

// A $( document ).ready() block.


// KLICK AUF EIN NAV-ITEM

var clickedLinkInt = 0;
var stylesheet;

// injectSketch injiziert den Sketch in das DOM
function injectSketch(a){
    $('#sketchStyles').attr('href','sketches/' + a + '/index.css');
    $('#stageWrapper').load('sketches/' + a + '/index.html');
    $.getScript( 'sketches/' + a + '/index.js');
};

// Sketch injizieren, wenn ein Link geklickt wird
$('#navbox a').click(function (){
    clickedLinkInt = $(this).attr('id').replace( /^\D+/g, '');
    injectSketch(clickedLinkInt);
    $('#navbox a').removeClass('active');
    $(this).addClass('active');
});

// Inject the first sketch
$( document ).ready(function() {
    injectSketch(1);
    $('#link-1').addClass('active');
});


$('#nav-toggle').click(function(){
    $('#overlay').toggleClass('active');
        $('#overlay p').toggleClass('hide');

    $(this).toggleClass('active');
    $('body').removeClass('invert');
});


$('#toggleColor').click(function(){
    $('body').toggleClass('invert');
});
