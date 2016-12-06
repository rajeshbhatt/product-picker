import AsyncLoader from './AsyncLoader';
export default class Config {
  constructor() {
    this.searchDrilDown = false;
    this.searchType = '';
    this.mData = [];
  }
  pushData(a,b){
    this.mData.push(a);
  }
  load(){
    let selectedModules = ['Accordian','Drawer','Search'];
    let obj = {};
    let _this = this;
    // require(['./Accordian','./Drawer','./Search'], function(a,b,c){
    //   console.log('aaaa',a);
    // })
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',AsyncLoader);
    selectedModules.map(function(module,i){
        console.log('module...',module);
        obj[i] = new AsyncLoader(module)

    });
    console.log('ojbbb',obj,obj.Accordian);
  }
};
new Config().load();
