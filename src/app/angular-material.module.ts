import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule, MdDialogModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule, MdDialogModule, MatProgressSpinnerModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule, MdDialogModule, MatProgressSpinnerModule],

})

export class AngularMaterialModule {}
