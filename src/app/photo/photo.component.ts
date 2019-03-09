import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users }  from '../users.model';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private usersservice :UsersService) { }
  photoes:any;
  albumname:any;
  albumid:any;
  ngOnInit() {
    this.getPhotos();
  } 

  getPhotos(){
    this.route.params.subscribe(params => {
         this.usersservice.getPhotos(params['id'])
          .subscribe((data: any) => {
            console.log(data);
            this.photoes = data;
      });
    });

    this.route.params.subscribe(params => {
      this.usersservice.getSpecificalbumDetail(params['id'])
       .subscribe((xxx: any) => {
        //console.log(xxx[0]['name']);
         this.albumname = xxx[0]['title'];
         this.albumid = xxx[0]['albumId'];
      });
    });

  }

}
