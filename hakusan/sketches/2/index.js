// var blur1,blur2;
//
// $(document).mousemove(function(e) {
//
//     function map_range(value, low1, high1, low2, high2) {
//         return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
//     }
//
//     blur1 = map_range(e.pageX, 0, $(window).width(), 0,20);
//     blur2 = map_range(e.pageX, 0, $(window).width(), 20,0);
//
//   $('#tokyo').css('filter', 'blur(' + blur2 + 'px)');
//   $('#tokyo').css('webkit-filter', 'blur(' + blur2 + 'px)');
//
//   $('#kyoto').css('filter', 'blur(' + blur1 + 'px)');
//   $('#kyoto').css('webkit-filter', 'blur(' + blur1 + 'px)');
//
//   opac1 = map_range(e.pageX, 0, $(window).width(), 0,20);
//   opac2 = map_range(e.pageX, 0, $(window).width(), 20,0);
//
// $('#tokyo').css('filter', 'blur(' + blur2 + 'px)');
// $('#tokyo').css('webkit-filter', 'blur(' + blur2 + 'px)');
//
// $('#kyoto').css('filter', 'blur(' + blur1 + 'px)');
// $('#kyoto').css('webkit-filter', 'blur(' + blur1 + 'px)');
//
// });
