import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Users }  from './users.model';
import { catchError, map, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
 
  

  getUsers (): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  }

  getAlbum(id: number): Observable<Users[]> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/albums?userId='+id);
  }

  getSpecificUSer(id: number): Observable<Users[]> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users?id='+id);
  }

  getPhotos(id: number): Observable<Users[]> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/photos?albumId='+id);
  }

  getSpecificalbumDetail(id: number): Observable<Users[]> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/albums?id='+id);
  }
  
  


}  
