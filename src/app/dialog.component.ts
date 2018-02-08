import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
})

export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}
}
