import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

   
  }
  


  total=0;
  // music question #Q1
  BET:string;
  BETAswer="sjava"
  BETMark=0;
  // music question #Q2
  album:string;
  albumAswer="Scopion";
  albumMark=0;
  //music question Q3
  fill:string;
  fillAnswer="fill";
  fillMark=0;
  //music question Q4
  alive:string;
  aliveAnswer="dead";
  aliveMark=0;

  //music question Q5
  math:string;
  mathAnswer="Dr";
  mathMark=0;

  checkAlive():void{
    if (this.alive==this.aliveAnswer){
      this.aliveMark=1;
    }
  }

  checkfill():void{
    if(this.fill==this.fillAnswer){
      this.fillMark=1;
    }
  }

  checkBET():void{
    if(this.BET===this.BETAswer){
       this.BETMark=1;
    }
  }
  checkAlbum():void{
    if(this.album===this.albumAswer){
       this.albumMark=1;
    }
  }

  checkmath():void{
    if(this.math===this.mathAnswer){
       this.mathMark=1;
    }
  }
  musicResults():void{
    this.checkmath();
    this.checkAlive();
    this.checkfill();
    this.checkBET();
    this.checkAlbum();
    this.total=this.BETMark+this.albumMark+this.fillMark+this.aliveMark+this.mathMark;
  }

  //movie question Q1
  king:string;
  kingAswer="two";
  kingMark=0;


  //movie question Q2
  langauge:string;
  langaugeAswer="xhosa";
  langaugeMark=0;


  //movie question Q3
  avengers:string;
  avengerAnswer="war";
  avengerMark=0;

   //movie question Q4
   game:string;
   gameAnswer="second";
   gameMark=0;

    //movie question Q5
    role:string;
    roleAnswer="danzel";
    roleMark=0;
   
  checkLangauge():void{
    if(this.langauge==this.langaugeAswer){
      this.langaugeMark=1;

    }
  }
  checkAvenger():void{
    if(this.avengers==this.avengerAnswer){
      this.avengerMark=1;
    }
  }

  checkKing():void{
    if(this.king==this.kingAswer){
      this.kingMark=1;
    }
  }

  checkgame():void{
    if(this.game==this.gameAnswer){
      this.gameMark=1;
    }
  }
  checkRole():void{
    if(this.role==this.roleAnswer){
      this.roleMark=1;
    }
  }

  movieResults():void{
    this.checkRole();
    this.checkgame();
    this.checkLangauge();
    this.checkAlive();
    this.checkKing();
   
    this.total=this.kingMark+this.avengerMark+this.langaugeMark+this.gameMark+this.roleMark;
  }


   //movie question Q1
   value:string;
   valueAswer="axa";
   valueMark=0;
 
 
   //movie question Q2
   find:string;
   findAswer="three";
   finalMark=0;
 
 
   //movie question Q3
   complete:string;
   completeAnswer="twethytwo";
   completeMark=0;
  
  //movie question Q4
  give:string;
  giveAnswer="tw";
  giveMark=0;
 
  //movie question Q5
  of:string;
  ofAnswer="corr";
  ofMark=0;
 
   checkvalue():void{
    if(this.value==this.valueAswer){
      this.valueMark=1;
    }
  }

  checkfind():void{
    if(this.find==this.findAswer){
      this.finalMark=1;
    }
  }

  checkcomplete():void{
    if(this.complete==this.completeAnswer){
      this.completeMark=1;
    }
  }

  checkgive():void{
    if(this.give==this.giveAnswer){
      this.giveMark=1;
    }
  }
  checkof():void{
    if(this.of==this.ofAnswer){
      this.ofMark=1;
    }
  }
  mathemathicsResults():void{
    this.checkof();
    this.checkvalue();
    this.checkfind();
    this.checkcomplete();
    this.checkgive();
   
    this.total=this.valueMark+this.finalMark+this.completeMark+this.giveMark+this.ofMark;
  }

}
