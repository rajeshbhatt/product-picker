export default class Utility{
  constructor(){

  }
  getData(options){
    //ajax call
    $.ajax({
     url: options.url,
     data: {
        format: 'json'
     },
     error: function() {
      //err
     },
     success: function(data) {
        consle.log(data);
        if(options.cb){
          cb(options,data);
        }
     },
     type: 'GET'
   });
  }
}
