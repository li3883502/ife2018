//初始数据化
createTable();
checkNaN();
line.setData(getData());

//全选事件
fiel(fielRe);
fiel(fielPr);
form.onclick=function(){
  line.setData(getData());
  tableWarpper.innerHTML='';
  createTable();//渲染新表格
  checkNaN();//给input添加检查机制
}
tableWarpper.addEventListener("mouseover",function(evt){
  var target=evt.target;
  var array=[[]];
  if(target.nodeName.toLowerCase()==='td'){
    var tr=target.parentNode;
    for(let i=2,j=0;i<tr.children.length;i++,j++){
      array[0][j]=tr.children[i].innerHTML;
    }
    line.array=array;
    line.clearDraw();
    line.drawXY();
    line.drawLines();
  }
});
tableWarpper.addEventListener("mouseout",function(evt){
  line.setData(getData());
});

function checkNaN(){
  var inputs=document.querySelectorAll('#table-wrapper input');
  for(let i=0;i<inputs.length;i++){
    inputs[i].onblur=function(evt){
      var target=evt.target;
      if(isNaN(target.value)||target.value===''){
        alert('填入内容非数字');
      }
    }
  }
}

btn.onclick=function(){
  var td=document.querySelectorAll('#table-wrapper td');
  var Lsstorage=window.localStorage;
  var temp=getData();
  console.log(td);
  for(let i=0,k=2;i<temp.length;i++){
    for(let j=0;j<temp[i].sale.length;j++,k++){
      temp[i].sale[j]=td[k].innerHTML;
    }
  }
  Lsstorage.setItem("sourceData",JSON.stringify(temp));
  //console.log(Lsstorage)
}