import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment4';
  name:string;
  username:string;
  password:string;
  emailid:string;
  dob:string;
  phn:string;
  gender:string;
  age:string;
  nationality:string;
  photo:string;
  count:number[]=[0,0,0,0,0,0,0,0,0,0];
  check:boolean[];
  temp:number=0;
  OnInit()
  {
    this.name="";
    this.username="";
    this.password="";
    this.dob=""
    this.emailid=""
    this.phn=""
    this.gender=""
    this.age="";
    this.nationality="";
    this.photo="";
    for (let i=0;i<10;i++){
      this.check[i]=true;
    }
 }
  checkname(){
    if(this.name!="" && /^[a-zA-Z]+$/.test(this.name)){
      this.check[0]=true;
      this.count[0]+=1
    }
    else{
      this.check[0]=false;
      this.count[0]+=1
      this.name=""
    }
  }
  checkusername(){
    if(this.username!="" && /^[a-zA-Z0-9]+$/.test(this.username)){
      this.check[1]=true;
      this.count[1]+=1
    }
    else{
      this.check[1]=false;
      this.count[1]+=1
      this.username=""
    }
  }
  checkpassword(){
    if(this.password!="" && /.{5,}/.test(this.password)){
      this.check[2]=true;
      this.count[2]+=1
    }
    else{
      this.check[2]=false;
      this.count[2]+=1
      this.password=""
    }
  }
  checkdob(){
    if(this.dob!="" && /^\d{2}-d{2}-d{4}&/.test(this.dob)){
      this.check[3]=true;
      this.count[3]+=1
    }
    else{
      this.check[3]=false;
      this.count[3]+=1
      this.dob=""
    }
  }
  checkemailid()
  {
    if(this.emailid!="" && /.*@(gmail.com|sairamit.edu.in|yahoo.com|outlook.com)/.test(this.emailid))
    {
      this.check[4]=true
      this.count[4]=1;
    }
    else{
      this.check[4]=false;
      this.count[4]+=1
      this.emailid=""
    }
  }
  checkphn(){
    
    if(this.phn!="" && /^\d{10}$/.test(this.phn))
    {
      this.check[5]=true
      this.count[5]+=1;
    }
    else{
      this.check[5]=false;
      this.count[5]+=1
      this.phn=""
    }

  }
  checkgender(){
    if(this.gender!="")
    {
      this.check[6]=true
      this.count[6]+=1;
    }
    else{
      this.check[6]=false;
      this.count[6]+=1
      this.gender=""
    }
  }
    checkage(){
      if(this.age!="" && /\d{1,2}/.test(this.age))
    {
      this.check[7]=true
      this.count[7]+=1;
    }
    else{
      this.check[7]=false;
      this.count[7]+=1
      this.age=""
    }
  }
  checknationality(){
    if(this.nationality!="")
    {
      this.check[8]=true
      this.count[8]+=1;
    }
    else{
      this.check[8]=false;
      this.count[8]+=1
      this.nationality=""
    }
  }
  checkphoto(){
    if(this.photo!="")
    {
      this.check[9]=true
      this.count[9]+=1;
    }
    else{
      this.check[9]=false;
      this.count[9]+=1
      this.photo=""
    }
  }
  checkinfo(){
    for (let i=0;i<10;i++)
    {
      if(this.check[i]==true){
        this.temp+=1
      }
    }
    if(this.temp==10){
      alert("submited successfully")
    }
    else{
      alert("please fill all details and check again")
    }
  }
}
