import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users }  from '../users.model';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
}) 
export class UsersComponent implements OnInit {
  users : any;
  constructor(private usersservice :UsersService) { }

  ngOnInit() {
    console.log('---data-----');
    this.getData();
  }

  getData(){
     
    this.usersservice.getUsers()
        .subscribe((data: Users[]) => {  
          console.log(data);  
          this.users = Array.from(data);
      });
  }

}
