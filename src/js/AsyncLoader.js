export default class AsyncLoader {
  constructor(expr, callback){
    console.log('sssss',expr);
    require(["./" + expr + ".js"], function(result) {
      callback(null, result);
    });
  }
}
