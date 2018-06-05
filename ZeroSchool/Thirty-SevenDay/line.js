function drawSvg(){
  var svg=document.querySelector('g');
  x=document.createElementNS('http://www.w3.org/2000/svg','rect');
  y=document.createElementNS('http://www.w3.org/2000/svg','rect');
  
  svg.innerHTML+='<line x1="20" x2="500" y1="260" y2="260" style="stroke:#999;stroke-width:2;"/>'
  svg.innerHTML+='<line x1="20" x2="20" y1="20" y2="260" style="stroke:#999;stroke-width:2;"/>'
  var n=30;
  var pli=260*2/3/270;
  for(let x=0;x<sourceData.length;x++){
    for(let i=0;i <sourceData[x].sale.length;i++){
      var px=pli*sourceData[x].sale[i];
      svg.innerHTML+='<rect x="'+n+'" y="'+(260-px)+'" width="18" height="'+px+'" style="fill:blue;opacity:0.4;"/>';
      n+=30;
    }
  } 
}
line={
    array:[],
    maxData:0,
    lineHeight:[],
    reHeight:0,
    distance:40,
    lineColor:["#EE6A50","#EEA9B8","#0000CC","#FFF68F","#BCD2EE","#CD96CD","#9AFF9A","#B2DFEE","#ADFF2F"],
    drawLines:function(){
      var canvas=document.querySelector('#canvas');
      this.maxData=this.getMax();
      if(canvas.getContext){
        var ctx=canvas.getContext('2d'); 
        ctx.beginPath();
        
        for(let i=0;i<this.array.length;i++){
            this.distance=40;
            for(let j=0;j<this.array[i].length;j++,this.distance+=40){  
            this.lineHeight[j]=260*2*this.array[i][j]/3/this.maxData;
            ctx.fillStyle=this.lineColor[i];
            ctx.beginPath();
            ctx.arc(this.distance,260-this.lineHeight[j],5,0,Math.PI*2,false);
            ctx.fill();
            
            if(j!==0){
              ctx.beginPath();
              ctx.moveTo(this.distance,260-this.lineHeight[j]);
              ctx.lineTo(this.distance-40,260-reHeight);
              ctx.stroke();
            }
            reHeight=this.lineHeight[j];
      }ctx.closePath();
    }
    }
    },
    drawXY:function(){
      var canvas=document.querySelector('#canvas');
      if(canvas.getContext){
        var ctx=canvas.getContext('2d');

        ctx.beginPath();
        
        ctx.moveTo(20,20);
        ctx.lineTo(20,280);
        ctx.lineTo(500,280);
        ctx.stroke();
      }
    },
    clearDraw:function(){
      var canvas=document.querySelector('#canvas');
      if(canvas.getContext){
        var ctx=canvas.getContext('2d');
        ctx.clearRect(10,10,500,300);
      }
    }
    ,
    getMax:function(){
      var max=0;
      for(let i=0;i<this.array.length;i++){
        for(let j=0;j<this.array[i].length;j++){
          max=Math.max(this.array[i][j],max);
        }
      }
      return max;
    },
    setData:function(number){
        var array=[];
        for(let i=0;i<number.length;i++){
          array[i]=number[i].sale;
    }
    this.array=array;
    this.clearDraw();
    this.drawXY();
    this.drawLines();
    }, 
}

//drawSvg();



