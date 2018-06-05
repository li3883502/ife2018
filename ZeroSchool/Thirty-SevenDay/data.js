//根据select获取数据
var sourceData = [{
  product: "手机",
  region: "华东",
  sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
  product: "手机",
  region: "华北",
  sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
  product: "手机",
  region: "华南",
  sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
  product: "笔记本",
  region: "华东",
  sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
  product: "笔记本",
  region: "华北",
  sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
  product: "笔记本",
  region: "华南",
  sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
  product: "智能音箱",
  region: "华东",
  sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
  product: "智能音箱",
  region: "华北",
  sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
  product: "智能音箱",
  region: "华南",
  sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]
var form=document.querySelector('form');
var regionSelect=document.querySelectorAll('[name=region]');
var elcpdSelect=document.querySelectorAll('[name=product]');
var monthSelect=document.querySelector('#month-select');
var tableWarpper=document.querySelector('#table-wrapper');
var fielRe=document.querySelector('#region-radio-wrapper');
var fielPr=document.querySelector('#product-radio-wrapper');
var btn=document.querySelector('button');
var body=document.querySelector('body');

function LssouceData(){
  var sourceDataPath=[];
  var j=0;
  if(localStorage.getItem('sourceData')){
    sourceDataPath=JSON.parse(localStorage.sourceData);
    for(let i of sourceData){
      if(i.product===sourceDataPath[j].product&&i.region===sourceDataPath[j].region){
        i.sale=sourceDataPath[j].sale;
        if(j<sourceDataPath.length-1){
          j++;
        }else{
          break;
        }
      }
    }
  }
}
function getData(){
    var list=[];
    var conpareStr='';
    LssouceData();
    conpareStr+=checkedValue(regionSelect);
    conpareStr+=checkedValue(elcpdSelect);
    for(let i=0,j=0;i<sourceData.length;i++ ){
    if(conpareStr.indexOf(sourceData[i].region)!==-1&&conpareStr.indexOf(sourceData[i].product)!==-1){
        list[j++]=sourceData[i];
      }
    }
    return list;
  }
  //判定选值
  function checkedValue(que){
    var Str='';
      for(let i=0;i<que.length;i++){
         if(que[i].checked){
           Str+=que[i].value;
         }
       }
    return Str;
  }