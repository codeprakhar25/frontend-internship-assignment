import { Component, Input } from '@angular/core';
import { QueryBook } from 'src/app/core/models/book-response.model';


@Component({
  selector: 'front-end-internship-assignment-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() booksList: QueryBook[] = [];
  @Input() subjectName = '';
}
