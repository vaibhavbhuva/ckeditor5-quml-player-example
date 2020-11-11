import { Component} from '@angular/core';
import { data1 } from './quml-library-data';

enum modeType {
  Editor = 'Editor',
  Player = 'Player'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ckeditor-and-quml-player';
  public mode: modeType = modeType.Editor;
  QumlPlayerConfig = data1;

  changeMode(value) {
    this.mode = value;
  }

}
