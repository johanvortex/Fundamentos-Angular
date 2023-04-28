import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Johan- Andres';
  age = 88;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  person = {
    name: 'Johan ',
    age: 23,
    avatar: 'https://source.unsplash.com/random',
  };

   toggleButton(){
    this.btnDisable = !this.btnDisable;
  }
  increaseAge(){
    this.person.age +=1;
  }
  onScroll(event:Event ){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
}
