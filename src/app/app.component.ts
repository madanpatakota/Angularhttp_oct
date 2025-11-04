import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angularhttp_oct';
  constructor(private http: HttpClient) {}

  fakeAPIURL = 'https://jsonplaceholder.typicode.com/todos'; // i need to get the response from this api

  // i want to prepare my own apis as i want to learn not only get , but also post , put , delete , patch
  myLocalfakeAPIURL = 'http://localhost:3000/Students'; // json server url

  data: any = [];

  //http://localhost:3000/Students

  ngOnInit(): void {
    // this.http.get(this.fakeAPIURL).subscribe( (response) => {
    //     console.log(response);
    //     this.data = response;
    // })
  }

  showTableData = false;

  //get all students
  fetchData() {
    // i want to provide my identity to the api header for provide my self 
    this.http
      .get(this.myLocalfakeAPIURL, {
        // headers: {
        //   MyIdentity: 'MadanMohanReddy',
        //   Role      : 'Admin',
        //   Location  : 'India'
        // },
        // params:{
        //   subject  : 'Angular',
        //   topic    : 'HTTPClient'
        // }
      })
      .subscribe((response) => {
        //console.log(response);
        this.data = response;
        this.showTableData = true;
      });
  }

  //get students by id
  fetchDataByID(element: HTMLInputElement) {
    let id = +element.value; // to get the value from i
    let GetStudentsByIDURL = `http://localhost:3000/Students/${id}`; // json server url
    //:id --> 1 , 2 , 3 , 4 , 5
    this.http.get(GetStudentsByIDURL).subscribe((response) => {
      //console.log(response);

      let Stuents = [];
      Stuents.push(response); // pushing object into array
      //setTimeout(() => {
      this.data = Stuents;
      this.showTableData = true;
      //}, 1000);
    });
    //console.log(id);
  }

  //Add new student
  AddStudent() {
    let newStudent = {
      id: '11',
      name: 'Madan mohan',
      age: 22,
      course: 'Hindi',
    };

    let addURL = `http://localhost:3000/Students`; // json server url
    //Post

    //post for send the record to the server for insertion
    this.http.post(addURL, newStudent).subscribe((response) => {
      console.log(response);
      alert('New Student Added Successfully');
      //this.fetchData(); // to refresh the table data
    });
  }

  DeleteStudent(inputelement: HTMLInputElement) {
    let Id = +inputelement.value;
    this.http
      .delete(`http://localhost:3000/Students/${Id}`)
      .subscribe((response) => {
        console.log(response);
        alert('Student Deleted Successfully');
        //this.fetchData(); // to refresh the table data
      });
  }

  //Update Student Record
  //Keep in mind

  // ID is important to update the record

  // Id 1
  //"name": "John Doe Junior",
  //"age": 15,
  //"course": "Mathematics"

  UpdateStudent(inputelement: HTMLInputElement) {
    let Id = +inputelement.value;

    let url = `http://localhost:3000/Students/${Id}`; // 1
    // vvvvvv IMp you will get this url in real time env from seniors
    // or team leads

    //take the form in the .html prepare the three textboxes.
    let body = {
      name: 'John Doe Junior',
      age: 15,
      course: 'Mathematics',
    };

    this.http.put(url, body).subscribe((response) => {
      console.log(response);
      alert('Student Record Updated Successfully');
      //this.fetchData(); // to refresh the table data
    });
  }

  //patch student record
  PatchStudent(inputelement: HTMLInputElement) {
    let Id = +inputelement.value;
    let url = `http://localhost:3000/Students/${Id}`; // 1
    let body = {
      course: 'Physics',
    };

    this.http.patch(url, body).subscribe((response) => {
      console.log(response);
      alert('Student Record Patched Successfully');
      //this.fetchData(); // to refresh the table data
    });
  }
}
