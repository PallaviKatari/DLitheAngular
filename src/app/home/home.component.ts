import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="I am the Home Component";
  course="Hello Trainees";

  //Property Binding
  public image="/assets/images/img3.jpg";

  //Event Binding
  onClick()
  {
    alert("Hello");
  }

  onClick1()
  {
    console.log("Hi")
  }

  //Two-way binding
  info=""
  
  //*ngFor
  Movies: any[] = [
    {
      "name": "Avengers: Endgame"
    },
    {
      "name": "Harry Potter"
    },
    {
      "name": "Lord of the Rings"
    },
    {
      "name": "Avatar"
    },
    {
      "name": "Aladdin"
    }, 
    {
      "name": "Cindrella"
    },
    {
      "name": "Avatar 2"
    }
  ];

  //Hide Movie List
  isVisible: boolean = true;
  hideList()
  {
    this.isVisible = !this.isVisible;
  }
  //Style Binding
  status:string='error';

  getColor() {
    return 'black';
  }

  public isCourse = true;
courses = [
    {
      name: "Introduction to Web Development",
      level: "Beginner",
      color: "green"
    },
    {
      name: "Understanding APIs",
      level: "Beginner",
      color: "blue"
    },
    {
      name: "Introduction to Docker Containers",
      level: "Advanced",
      color: "red"
    },
    {
      name: "Understanding Time complexities",
      level: "Advanced",
      color: "red"
    },
    {
      name: "Algorithms and Data Structures",
      level: "Advanced",
      color: "purple"
    },
    {
      name: "My first HTML page",
      level: "Beginner",
      color: "blue"
    },
    {
      name: "Ways to use CSS in your web page",
      level: "Beginner",
      color: "green"
    },
    {
      name: "Introduction to Unit testing",
      level: "Beginner",
      color: "green"
    },
    {
      name: "What are PWAs",
      level: "Beginner",
      color: "green"
    }
  ];
  //ngSwitch
  superhero = 'Spiderman';

  Cars: any[] = [
    {
      "name": "BMW",
      "average": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];
  //Pipes
  dateToday: string | undefined;

  name: string | undefined;

  amount: number|undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();

    this.name = "Angular Training";

    this.amount=100;
  }

}
