//
tableWarpper.addEventListener('mouseover',function(evt){
    var target=evt.target;
    if(target.nodeName.toLowerCase()==='td'&&target.getAttribute('class')){
        target.setAttribute('class','edit-icon');//使用css的after添加文字，不担心js创建p后移入p文字闪烁的问题
    }
});
tableWarpper.addEventListener('mouseout',function(evt){
    var target=evt.target;
    if(target.nodeName.toLowerCase()==='td'&&target.getAttribute('class')){
        target.removeAttribute('class','edit-icon');
        target.setAttribute('class','sale');
    }
});

body.addEventListener('click',function(evt){
    
    var target=evt.target;
    var theInput=document.querySelector('#table-wrapper input');
    
    if(target.nodeName.toLowerCase()==='td'&&target.getAttribute('class')){
        tempNum=target.innerHTML;
        var div=document.createElement('div');
        var btnEn=document.createElement('button');
        var btnEs=document.createElement('button');
        var input=document.createElement('input');
        btnEn.innerHTML='确认';
        btnEs.innerHTML='取消';
        input.value=/\d+/.exec(tempNum);
        target.setAttribute('id','edit-icon');
        target.innerHTML='';

        div.appendChild(input);
        div.appendChild(btnEn);
        div.appendChild(btnEs);
        target.appendChild(div);
        
    }else if(target.nodeName.toLowerCase()==='button'&&target.innerHTML==='确认'){
        if(isNaN(theInput.value)||theInput.value===''){
            alert('请输入数字')
        }else{
            var parentTd=target.parentNode.parentNode;
        parentTd.innerHTML=theInput.value;
        saveLs();
        }
        
    }else if(target.nodeName.toLowerCase()==='button'&&target.innerHTML==='取消'){
        var parentTd=target.parentNode.parentNode;
        parentTd.innerText=/\d+/.exec(tempNum);
        parentTd.setAttribute('class','sale');
        parentTd.removeAttribute('id');
    }else if(target.nodeName.toLowerCase()!=='input'){
        if(theInput){
            var parentTd=theInput.parentNode.parentNode;
        parentTd.innerText=/\d+/.exec(tempNum);
        parentTd.setAttribute('class','sale');
        parentTd.removeAttribute('id');
        }
        
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
/*tableWarpper.addEventListener('mouseout',function(evt){
    var target=evt.target;
    if(target.nodeName.toLowerCase()==='td'){
        target.addEventListener('mouseleave',function(evt){
            if(evt.target.children[0]){
                evt.target.removeChild(evt.target.children[0]);
            }
            
        });

    }
    
});*/