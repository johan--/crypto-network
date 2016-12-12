import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { IndexComponent } from './index.component';
import { routing } from './index.routing';

//import { CloudtasksDirective } from 'angular2-cloudtasks';

@NgModule({
  imports: [
  	CommonModule,
    routing
  ],
  declarations: [
    IndexComponent
    //CloudtasksDirective
  ]
})
export default class IndexModule { }
