import { Component } from '@angular/core';
import * as Handsontable from 'handsontable-pro';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  dataset: any[] = Handsontable.helper.createSpreadsheetData(30, 30)
}
