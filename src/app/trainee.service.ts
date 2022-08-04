//ng g s trainee
// trainee.service.ts

//The observer pattern is a software design pattern in which an object, called the subject, 
//maintains a list of its dependents, called observers, and notifies them automatically of state changes. 
//This pattern is similar (but not identical) to the publish/subscribe design pattern.
import { Injectable } from '@angular/core';
import { Trainee } from './trainee';
//Angular Observables support passing the messages between publishers
//(Creator of Observables) and subscribers(User of Observables) in your application. 
//Observables are declarative; you define the function for publishing values, 
//but it is not executed until the consumer subscribes to it.
//The observable can deliver multiple values of any type like literals, 
//messages, or events, depending on the context. For example, ass a publisher, 
//you can create an Observable instance that defines a subscriber function. 
//This function is executed when the consumer calls the subscribe() method. 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

trainees: Trainee[] = [{
    id: 1,
    name: 'Anoop',
    designation:'Developer',
    url:'https://www.google.co.in/'
},
{
    id: 2,
    name: 'Abhishek Soman',
    designation:'Developer',
    url:''

},
{
  id: 3,
  name: 'Ameen',
  designation:'Angular Developer',
  url:''

},
{
  id: 4,
  name: 'Roja',
  designation:'Angular Developer',
  url:''

},
{
  id: 5,
  name: 'Shashank',
  designation:'Angular Developer',
  url:''

},
{
  id: 6,
  name: 'Veeresh',
  designation:'Angular Developer',
  url:''

},
{
  id: 7,
  name: 'Venkatesh',
  designation:'Angular Developer',
  url:''

},
{
  id: 8,
  name: 'Pradeep',
  designation:'Developer',
  url:''

},
{
    id: 9,
    name: 'Abhishek S',
    designation:'Developer',
    url:''

}];

public getTrainees(): any {
  const traineesObservable = new Observable(observer => {
         setTimeout(() => {
             observer.next(this.trainees);
         }, 1000);
  });

  return traineesObservable;
}
}