import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule, MdDialogModule, MatProgressSpinnerModule, MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule, MdDialogModule, MatTooltipModule, MatProgressSpinnerModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule, MdDialogModule, MatTooltipModule, MatProgressSpinnerModule],

})

export class AngularMaterialModule {}
