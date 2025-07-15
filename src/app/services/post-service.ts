import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) {}

  public getPosts(): Promise<Post[]> {
    return lastValueFrom(this.http.get<Post[]>(`${this.baseUrl}/posts`));
  }

}
