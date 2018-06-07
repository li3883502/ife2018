//全选事件
function fiel(id){
    id.onclick=function(evt){
      var target=evt.target;
      var select=id.querySelectorAll('[name]');
      var count=0;
      if(target.type==='checkbox'){
        if(target.value==="全选"){
          //取消全选，只勾中第一个
          if(!id.querySelector('[value="全选"]').checked){
            for(let i=1;i<select.length;i++){
            if(select[i].checked){
              select[i].checked=false;
            }
          } 
         //勾中全选，选中全部
          }else{
            for(let i=0;i<select.length;i++){
            if(!select[i].checked){
              select[i].checked=true;
            }
          } 
          } 
        }else{
          for(let i=0;i<select.length;i++){
            if(select[i].checked){
              count++;
            }
          }
            if(count===0){
              target.checked=true;
            }else if(count===3){
              id.querySelector('[value="全选"]').checked=true;  
            }else{
              id.querySelector('[value="全选"]').checked=false;
            }
        }
      }
    }
  }