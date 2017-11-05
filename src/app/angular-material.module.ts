import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MatExpansionModule],

})

export class AngularMaterialModule {}
