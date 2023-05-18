/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Book } from 'src/app/core/models/book-response.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchValue: string = "";
  bookSearch: FormControl;
  isLoading: boolean = true;

  allSearchBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute ,
    private subjectsService: SubjectsService 
  ) {
    this.bookSearch = new FormControl('');

  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];
  getAllQueryBooks() {
    // Perform your search operation here using the searchValue
    console.log('Searching for:', this.searchValue);
    this.subjectsService.getAllQueryBooks(this.searchValue).subscribe((data) => {
      this.allSearchBooks = data?.works;
      // this.subjectsArray = data;
      this.isLoading = false;
    });
    // You can make an API call or manipulate data locally based on the searchValue
  }
  close(){
    this.searchValue="";
    console.log('clopsing for:', this.searchValue);

  }
  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),
      ).
      subscribe((value: string)=>{
     console.log(value) });
     this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchValue = params.get('name') || '';
      this.isLoading = true;
      this.getAllQueryBooks();
    });  
  }
}
