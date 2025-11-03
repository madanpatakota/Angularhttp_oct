import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angularhttp_oct';
  constructor(private http: HttpClient) { }

  fakeAPIURL           = "https://jsonplaceholder.typicode.com/todos";  // i need to get the response from this api


 // i want to prepare my own apis as i want to learn not only get , but also post , put , delete , patch
  myLocalfakeAPIURL    = "http://localhost:3000/Students"  // json server url

  data:any = [] ;


  //http://localhost:3000/Students

  ngOnInit(): void {
      // this.http.get(this.fakeAPIURL).subscribe( (response) => {
      //     console.log(response);
      //     this.data = response;
      // })


       this.http.get(this.myLocalfakeAPIURL).subscribe( (response) => {
          console.log(response);
          this.data = response;
      })



  }



}
