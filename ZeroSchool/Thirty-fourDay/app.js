//初始数据化
createTable();
line.setData(getData());
//全选事件
fiel(fielRe);
fiel(fielPr);
form.onclick=function(){
  line.setData(getData());
  tableWarpper.innerHTML='';
  createTable();//渲染新表格
}
tableWarpper.onmouseover=function(evt){
  var target=evt.target;
  var array=[[]];
  if(target.nodeName.toLowerCase()==='td'){
    var tr=target.parentNode;
    for(let i=2,j=0;i<tr.children.length;i++,j++){
      array[0][j]=tr.children[i].innerHTML;
      
    }
    console.log(array);
    line.array=array;
    line.clearDraw();
    line.drawXY();
    line.drawLines();
  }
}
tableWarpper.onmouseout=function(){
  line.setData(getData());
}