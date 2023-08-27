class Car {
  constructor() {
    this.vel = 0;
    this.giro = false;
    this.des = 0.5;
    this.girook = false;
    this.direccion='right';
    this.id="auto";
    this.teclaPress="";
    this.rotacion=0;
    this.frames;
  }

  mover(){
    let auto=document.getElementById(this.id);
    if(this.direccion==="up"){
      const cssObj = window.getComputedStyle(auto, null);
      let tauto = Number(cssObj.getPropertyValue("top").split('px')[0]);
      tauto=tauto-this.vel;
      auto.style.top=tauto+'px';
    }else if(this.direccion==="right"){
      const cssObj = window.getComputedStyle(auto, null);
      let lauto = Number(cssObj.getPropertyValue("left").split('px')[0]);
      lauto=lauto+this.vel;
      auto.style.left=lauto+'px';
    }else if(this.direccion==='down'){
      const cssObj = window.getComputedStyle(auto, null);
      let dauto = Number(cssObj.getPropertyValue("top").split('px')[0]);
      dauto=dauto+this.vel;
      auto.style.top=dauto+'px';
    }else if(this.direccion==="left"){
      const cssObj = window.getComputedStyle(auto, null);
      let rauto = Number(cssObj.getPropertyValue("left").split('px')[0]);
      rauto=rauto-this.vel;
      auto.style.left=rauto+'px';
    }
  }

  desplazar(){
    let auto=document.getElementById(this.id);
    if(this.teclaPress==="right"){
      const cssObj = window.getComputedStyle(auto, null);
      let lauto = Number(cssObj.getPropertyValue("left").split('px')[0]);
      lauto=lauto+this.des;
      auto.style.left=lauto+"px"
    }else if(this.teclaPress==="left"){
      const cssObj = window.getComputedStyle(auto, null);
      let lauto = Number(cssObj.getPropertyValue("left").split('px')[0]);
      lauto=lauto-this.des;
      auto.style.left=lauto+"px"
    }else if(this.teclaPress==="up"){
      const cssObj = window.getComputedStyle(auto, null);
      let lauto = Number(cssObj.getPropertyValue("top").split('px')[0]);
      lauto=lauto-this.des;
      auto.style.top=lauto+"px"
    }else if(this.teclaPress==="down"){
      const cssObj = window.getComputedStyle(auto, null);
      let lauto = Number(cssObj.getPropertyValue("top").split('px')[0]);
      lauto=lauto+this.des;
      auto.style.top=lauto+"px"
    }
  }

  girar(a){
    let auto=document.getElementById(this.id);
    switch(a){
        case 'right':
          auto.style.transform=`rotate(90deg)`;
          this.direccion="right";
          this.rotacion=90;
          this.girook=true;
        break;
        case 'left':
          auto.style.transform=`rotate(-90deg)`;
          this.direccion="left";
          this.rotacion=90;
          this.girook=true;
        break;
        case 'up':
          auto.style.transform=`rotate(0deg)`;
          this.direccion="up";
          this.rotacion=undefined;
          this.girook=true;
        break;
        case 'down':
          auto.style.transform=`rotate(180deg)`;
          this.direccion="down";
          this.rotacion=undefined;
          this.girook=true;
        break;
    }
  }

  getTop(){
    let auto=document.getElementById(this.id);
    const cssObj = window.getComputedStyle(auto, null);
    let tauto = Number(cssObj.getPropertyValue("top").split('px')[0]);
    return(tauto);
  }

  getLeft(){
    let auto=document.getElementById(this.id);
    const cssObj = window.getComputedStyle(auto, null);
    let lauto = Number(cssObj.getPropertyValue("left").split('px')[0]);
    return(lauto);
  }

  setTop(valor){
    let auto=document.getElementById(this.id);
    auto.style.top=valor+"px";
  }

  setLeft(valor){
    let auto=document.getElementById(this.id);
    auto.style.left=valor+"px";
  }

  update(){
    this.frames=requestAnimationFrame(this.update.bind(this));
    this.mover();
    this.desplazar();
  }

  noUpdate(){
    cancelAnimationFrame(this.frames);
  }
}