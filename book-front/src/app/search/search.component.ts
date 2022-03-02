import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  authors: any;
  searchAuthor: any;
  author: any;
  search: any;
  books: any;
  searchBook: any;

  
    
      

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  findAuthor(){
    this.http
    .get('https://booktracker00.herokuapp.com/api/authors')
    .subscribe((response: any) => { 
    this.authors = response;
    console.log(this.authors);
    console.log(this.searchAuthor)
    });
  }
  findBook(){
    this.http
    .get('https://booktracker00.herokuapp.com/api/books')
    .subscribe((response: any) =>{
      this.books = response;
      console.log(this.books);
      console.log(this.searchBook)
    })
  }
  
}
   
  


