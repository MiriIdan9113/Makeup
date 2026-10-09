import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from '../Components/home-page/home-page';
import { Users } from '../Components/users/users';
import { User } from '../Components/user/user';

@Component({
  selector: 'app-root',
  imports: [HomePage,Users,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Makeup');
  
}
