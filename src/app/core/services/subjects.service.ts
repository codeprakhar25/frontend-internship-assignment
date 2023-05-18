import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AuthorResponse, BookResponse, SearchResponse } from 'src/app/core/models/book-response.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private apiService: ApiService) {}

  getAllBooks(subjectName: string): Observable<BookResponse> {
    const limit = 1000;
    return this.apiService.get(`/subjects/${subjectName.toLowerCase().split(' ').join('_')}.json?limit=${limit}`);
  }
  getAllQueryBooks(searchValue: string): Observable<SearchResponse> {
    // const limit = 1000;
    console.log(searchValue.toLowerCase().split(' ').join('+'))
    return this.apiService.get(`/search.json?q=${searchValue.toLowerCase().split(' ').join('+')}`);
  }
  getByAuthor(searchAuthor: string): Observable<AuthorResponse>{
    return this.apiService.get(`/search/authors.json?q=${searchAuthor.toLowerCase().split(' ').join('+')}`);
  }
}
// https://openlibrary.org/search?q=aa&mode=everything
