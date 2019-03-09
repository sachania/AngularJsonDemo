import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users }  from '../users.model';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor( private route: ActivatedRoute,private usersservice :UsersService) { }

  album:any;
  username:any;
  
  ngOnInit() {
    this.getAlbum();
  }
  
  getAlbum(){
    this.route.params.subscribe(params => {
         this.usersservice.getAlbum(params['id'])
          .subscribe((data: any) => {
            console.log(data);
            this.album = data;
      });
    });

    this.route.params.subscribe(params => {
      this.usersservice.getSpecificUSer(params['id'])
       .subscribe((xxx: any) => {
        //console.log(xxx[0]['name']);
         this.username = xxx[0]['name'];
      });
    });

  }
  

}
