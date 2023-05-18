import { Component, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';


@Component({
  selector: 'front-end-internship-assignment-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() booksList: Book[] = [];
  @Input() subjectName = '';
}
