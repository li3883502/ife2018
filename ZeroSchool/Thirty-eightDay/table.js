//创建表格
function createTable() {  
    //加入表格
     tableWarpper.appendChild(displayTd());  
   }
   //打印表头
   function createTh(table) {
      var re=checkedNum(regionSelect);
      var pr=checkedNum(elcpdSelect);
      var newTrText=["商品","地区","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
      var newTr=document.createElement('tr');
       for(let i=0;i<newTrText.length;i++){
           var newTh=document.createElement('th');
           newTh.innerHTML=newTrText[i];
           newTr.appendChild(newTh);
         }
       changeOrder(newTr);
       table.appendChild(newTr);//添加表头
   }
   //创建表格
   function displayTd(){
     var tableData=getData();//获取数据
     var newTable=document.createElement('table');
     createTh(newTable);//渲染表头
     
     for(let i=0;i<tableData.length;i++){
       var newTr=document.createElement('tr');
       for(var x in tableData[i]){
         if(typeof(tableData[i][x])==='string'){
              var newTd=document.createElement('td');
              newTd.innerHTML=tableData[i][x];
              newTr.appendChild(newTd);
         }
         else{
           for(let j=0;j<tableData[i][x].length;j++){
             var newMonTd=document.createElement('td');
             newMonTd.innerHTML=tableData[i][x][j];
             newMonTd.setAttribute('class','sale');
             newTr.appendChild(newMonTd);
           }
         }  
       }
       changeOrder(newTr);
       newTable.appendChild(newTr);
     }
     //changeRow(newTable);
     mergeTd(newTable);
     return newTable;
   }
   //交换列顺序
   function changeOrder(tr){
      var re=checkedNum(regionSelect);
      var pr=checkedNum(elcpdSelect);
      var temp='';
      if(re===1&&pr!==1){
        temp=tr.children[0].innerHTML;
        tr.children[0].innerHTML=tr.children[1].innerHTML;
        tr.children[1].innerHTML=temp;
      }
   }
   //交换行顺序
  /* function changeRow(table){
     var re=checkedNum(regionSelect);
      var pr=checkedNum(elcpdSelect);
     if(re===1&&pr!==1)
       for(let i=1;i<table.children.length;i++){
         if(table.children[i].children[0].innerHTML==='华北'){
           table.appendChild(table.children[i]);
         }
       }
          for(let i=2;i<table.children.length;i++){
         if(table.children[i].children[0].innerHTML==='华南'){
           table.appendChild(table.children[i]);
         }
       }    
   }*/
   //合并首行
   function mergeTd(table){
      var firTd='';
      var re=checkedNum(regionSelect);
      var pr=checkedNum(elcpdSelect);
      var num=0;

      //rowspan的数量
      if(re>1){
          num=re;
      }else{
          num=pr;
      }
      for(let i=1;i<table.children.length;i++){
        if(table.children[i].children[0].innerHTML!==firTd){
          firTd=table.children[i].children[0].innerHTML;
          table.children[i].children[0].setAttribute('rowspan',num);
        }else
        {
          table.children[i].removeChild(table.children[i].children[0]);
        }
      }
   }
   //判断个数
   function checkedNum(que){
     var num=0;
       for(let i=0;i<que.length;i++){
          if(que[i].checked){
           num++;
          }
        }
     return num;
   }