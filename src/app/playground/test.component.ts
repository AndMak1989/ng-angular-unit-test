import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-',
  template: ''
})
export class TestComponent {
  counter:number = 0;
  @Output() countEmitter = new EventEmitter<number>();
  inc(number=1){
    this.countEmitter.emit(this.counter)
    this.counter +=number
  }
  dec(number=1){
    this.counter -=number
  }
}
