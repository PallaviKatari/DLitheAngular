import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  trainees: Trainee[] = [];

    constructor(private traineeservice: TraineeService) {}

    ngOnInit() {
        const traineesObservable = this.traineeservice.getTrainees();
        traineesObservable.subscribe((traineesData: Trainee[]) => {
            this.trainees = traineesData;
        });
    }

    onclick()
    {
      
    }

}
