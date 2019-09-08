import { Component } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Upload Any Image';
  myRestrictions:FileRestrictions ={
    allowedExtensions:['.jpg', '.png']
  };
}
