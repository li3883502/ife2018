//解析hash值
function getSeach(){
    var content=[];
    content[0]=location.hash.replace('#','')
    content[0]= content[0].replace('N','华北');
    content[0]=content[0].replace('S','华南');
    content[0]=content[0].replace('E','华东');
    content[0]=content[0].replace('P','');
    content[0]=content[0].replace('T','');
    content[0]=content[0].replace('S','');
    content[1]=location.hash.replace('#','')
    content[1]=content[1].replace('P','手机');
    content[1]=content[1].replace('T','笔记本');
    content[1]=content[1].replace('S','智能音箱');
    content[1]=content[1].replace('N','');
    content[1]=content[1].replace('S','');
    content[1]=content[1].replace('E','');
    return content;
}
//渲染页面
function render(){
    var content=getSeach();
    if(content[0]===''){
        regionSelector[0].checked=true;
    }else{
    for(let i=0;i<regionSelect.length;i++){
        if(content[0].indexOf(regionSelect[i].value)!==-1){
            regionSelect[i].checked=true;
        }else{
            regionSelect[i].checked=false;
        }
    }
}
console.log(content[1])
if(content[1]===''){
    elcpdSelect[0].checked=true;
}else{
    for(let i=0;i<elcpdSelect.length;i++){
        if(content[1].indexOf(elcpdSelect[i].value)!==-1){
            elcpdSelect[i].checked=true;
        }else{
            elcpdSelect[i].checked=false;
        }
    }
}
}
regionSelect[0].addEventListener('change',a);
regionSelect[1].addEventListener('change',a);
regionSelect[2].addEventListener('change',a);
elcpdSelect[0].addEventListener('change',a);
elcpdSelect[1].addEventListener('change',a);
elcpdSelect[2].addEventListener('change',a);
function a(){
    var str=checkedValue(regionSelect)+checkedValue(elcpdSelect);
    str=str.replace('华北','N');
    str=str.replace('华南','S');
    str=str.replace('华东','E');
    str=str.replace('手机','P');
    str=str.replace('笔记本','T');
    str=str.replace('智能音箱','S');
    history.pushState(null,null,'#'+str);
    return str;   
}

window.onpopstate =render;