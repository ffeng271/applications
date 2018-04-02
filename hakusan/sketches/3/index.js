
var headline = "Asien, Teil von Eurasien, ist mit rund 44,615 Millionen Quadratkilometern, etwa einem Drittel der gesamten Landmasse, der flächenmäßig größte Erdteil. Mit über vier Milliarden Menschen, mehr als der Hälfte der Weltbevölkerung, ist dieser Erdteil auch der einwohnerstärkste. Es gibt 47 international anerkannte Staaten Asiens.";

$('.marquee-text').html(headline);
$('.marquee').fadeIn('slow');

var marquee = $('div.marquee');
marquee.each(function() {
    var mar = $(this),
    indent = mar.width();
    mar.marquee = function() {
        indent-=3;
        mar.css('text-indent',indent);
        if (indent < -1 * mar.children('div.marquee-text').width()) {
            indent = mar.width();
        }
    };
    mar.data('interval',setInterval(mar.marquee,50/10));
});
