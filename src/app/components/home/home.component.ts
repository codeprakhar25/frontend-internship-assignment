/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { AuthorBook, QueryBook } from 'src/app/core/models/book-response.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchValue: string = "";
  searchAuthor: string= "";
  bookSearch: FormControl;

  isLoading: boolean = true;
   bookbool: boolean = false;
   authbool: boolean=false;
  allSearchBooks: QueryBook[] = [];

  allAuthorBooks: AuthorBook[]= [];

  constructor(
    private route: ActivatedRoute ,
    private subjectsService: SubjectsService 
  ) {
    this.bookSearch = new FormControl('');
    if(this.searchValue==""){
      this.bookbool=false;
    }
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
    console.log('Searching for:', this.searchValue);
    this.subjectsService.getAllQueryBooks(this.searchValue).subscribe((data) => {
      console.log(data)
      this.allSearchBooks = data?.docs;
      // this.subjectsArray = data;
      this.searchValue.length>1 ?  
      this.bookbool = true
      :
      this.bookbool = false
      data.docs.length>1 ?  
      this.isLoading = false
      :
      this.isLoading = true
    });
    console.log(this.allSearchBooks)
  }
  close(){
    this.searchValue="";
    console.log('clopsing for:', this.searchValue);
    this.bookbool=false;
  }
  getByAuthor(){
    console.log('Searching for author:', this.searchAuthor);
    this.authbool=true;
    this.subjectsService.getByAuthor(this.searchAuthor).subscribe((data) => {
      console.log(data)
      this.allAuthorBooks = data?.docs;
      this.searchAuthor.length>1 ?  
      this.authbool = true
      :
      this.authbool = false
      data.docs.length>1 ?  
      this.isLoading = false
      :
      this.isLoading = true
    });
    console.log(this.allAuthorBooks)
  }
  closeAuthor(){
    this.searchAuthor="";
    console.log('clopsing for:', this.searchAuthor);
    this.authbool=false;
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
