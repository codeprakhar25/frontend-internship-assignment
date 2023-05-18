import { Component, Input } from '@angular/core';
import { AuthorBook } from 'src/app/core/models/book-response.model';

@Component({
  selector: 'front-end-internship-assignment-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.scss'],
})
export class AuthorSearchComponent {
  @Input() booksList: AuthorBook[] = [];
  @Input() subjectName = '';
}
