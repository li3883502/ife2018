//添加编辑字样
tableWarpper.addEventListener("mouseover",function(evt){
  var target=evt.target;
  if(target.nodeName.toLowerCase()==='td'){
      var p=document.createElement('p');
      p.innerHTML="编辑";
      p.setAttribute('class','pencil');
      target.appendChild(p);
  }
});
tableWarpper.addEventListener("mouseout",function(evt){
    var target=evt.target;
    if(target.nodeName.toLowerCase()==='td'){
        var p=document.querySelector('[class="pencil"]');
        if(p){
            target.removeChild(p);
        }
        
    }
});
var tdInner=0;
//改变td增加button.
body.addEventListener("click",function(evt){
    var bodyInput=document.querySelector('#table-wrapper input');
    var target=evt.target;
    
   
    if(target.nodeName.toLowerCase()==='td'){
        var div=document.createElement('div');
        var btnEn=document.createElement('button');
        var btnEs=document.createElement('button');
        var input=document.createElement('input');
        tdInner=/\d+/.exec(target.innerHTML);

        target.innerHTML='';
        input.setAttribute('type','text');
        btnEn.innerHTML='确定';
        btnEs.innerHTML='取消';

        btnEs.addEventListener('click',function(evt){
            target.innerHTML=tdInner;
        })
        div.appendChild(input);
        div.appendChild(btnEn);
        div.appendChild(btnEs);
        target.appendChild(div);

    }
    
    //取消事件 
    if(target.nodeName.toLowerCase()==='button'&&target.innerHTML==='取消'){
        target.parentNode.innerHTML=tdInner;
    }
    if(target.nodeName.toLowerCase()==='button'&&target.innerHTML==='确定'){
        target.parentNode.parentNode.innerHTML=target.parentNode.querySelector('input').value;
    }else if(bodyInput&&(!(target.nodeName.toLowerCase()==='input'))){
        bodyInput.parentNode.parentNode.innerHTML=tdInner;  
    }
    
});
body.addEventListener('keyup',function(evt){
    var keyCode=evt.keyCode;
    var bodyInput=document.querySelector('#table-wrapper input');
   if(keyCode===13){
    target.parentNode.parentNode.innerHTML=target.parentNode.querySelector('input').value;
   }
   if(keyCode===27){
    bodyInput.parentNode.parentNode.innerHTML=tdInner;
   }
});

