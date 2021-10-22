import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post(`https://studentdbserver.herokuapp.com/usercreate`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://studentdbserver.herokuapp.com/userlist`)
  }

  getUserByID(id:number){
    return this.http.get<User>(`https://studentdbserver.herokuapp.com/useredit/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.post(`https://studentdbserver.herokuapp.com/useredit/${userId}`,userdata)
  }

  deleteUserById(id?:string){
    return this.http.delete(`https://studentdbserver.herokuapp.com/userdelete/${id}`)
  }
}