import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import InlineEditor from 'ckeditor5-custom-build-inline'

@Component({
  selector: 'app-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.scss']
})
export class CkeditorToolComponent implements OnInit, AfterViewInit {
  public editorInstance: any;
  @ViewChild('editor') public editorRef: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    InlineEditor.create(this.editorRef.nativeElement)
      .then(editor => {
        this.editorInstance = editor;
        // editor.setData("Type the content here!");
      })
      .catch(error => {
        console.error(error.stack);
      });
  }

}
