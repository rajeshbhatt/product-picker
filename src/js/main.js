var config = require('./../module-config.js');
console.log('config....',config);
var configData = [];
for(var module in config){
  configData.push(module);
}

// var aa = require('./common');
// console.log('aaa',aa);
// require(['./common'],function(){
//   alert('tesy');
// })

var requireTest = require.context('./common', true, /common\.js$/);
requireTest.keys().forEach(requireTest);

function requireAll(r) {
  console.log('rrrrrr',r);
   r.keys().forEach(r);
 }
var az = requireAll(require.context('./common/', true, /\.js$/));


console.log('aaamsg',az);
