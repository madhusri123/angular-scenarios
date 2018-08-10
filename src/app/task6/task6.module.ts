import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent6Component } from './parent6/parent6.component';
import { Child6Component } from './child6/child6.component';
import { Subchild16Component } from './subchild16/subchild16.component';
import { Subchild26Component } from './subchild26/subchild26.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parent6Component, Child6Component, Subchild16Component, Subchild26Component],
exports:[Parent6Component, Child6Component, Subchild16Component, Subchild26Component]

})
export class Task6Module { }
