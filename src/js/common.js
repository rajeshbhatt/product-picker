// var test = function(){
//   alert('hi');
// }
//
// module.exports = test;
// alert('incommingf')

var getData = function(options){
  $.ajax({
  method: "POST",
  url: options.url,
  data: opitons.data
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
}
