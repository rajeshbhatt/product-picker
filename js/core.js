
function getData(src,cb){
    $.ajax({
      url: src,
      type: 'GET',
      success: function(data) {
        if(cb){
            cb(data);
        }
      },
      error: function(e) {
        console.log(e.message);
        return false;
      }
    });
}