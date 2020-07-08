import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app.error';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url: string = "https://api.github.com/users/mosh-hamedani/followers";
  constructor(private http: HttpClient) { }

  getFollowers(){
    return this.http.get(this.url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse) {
    return throwError(new AppError(error.message, error.status));
  }
}
