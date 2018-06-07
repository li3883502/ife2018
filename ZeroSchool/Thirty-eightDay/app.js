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


