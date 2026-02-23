import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('Anguladasdasdasdrrrrr');
  input = signal('');
  newTitle($event: string) {
    this.input.set($event);
  }
  changeTitle() {
    if (this.input()) {
      console.log(this.input);
      this.title.set(this.input());
    }
  }
}
