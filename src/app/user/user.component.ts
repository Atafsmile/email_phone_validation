import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userStatus:string;

  allowEnable = false;
  users=["user1","user2"]
  username='tst user';
  userNAme='';
  isuserCreated=false;
  constructor(){
    setTimeout(()=>{

    return this.allowEnable=true;
  },3000),

  this.userStatus=Math.random()>0 ?'offline':'online';
}
  ngOnInit(): void {
    
  }
changeUser(){
  this.isuserCreated=true;
  this.users.push(this.username);
}
userName(event:Event){
  //this.username=(<HTMLInputElement>event.target).value; or
  this.username=(event.target as HTMLInputElement).value;
}
userID=10;
userid=0;
userids=17
getUserById(){
  return this.userStatus;
  
}
getColor():any{
  if(this.userStatus=='online'){
    return 'green';
  }else{
    return 'red';
  }
}
}
