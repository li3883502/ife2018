//根据select获取数据
function getData(){
    var list=[];
    var conpareStr='';
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