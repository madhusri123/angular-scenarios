import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

import { AppComponent } from './app.component';

import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { ParentComponent } from './task3/parent/parent.component';
import { ChildComponent } from './task3/child/child.component';
import { Task4Module } from './task4/task4.module';
import { Task5Module } from './task5/task5.module';
import { Task6Module } from './task6/task6.module';
import { Subchild16Component } from './task6/subchild16/subchild16.component';



@NgModule({
  declarations: [
    AppComponent,
  
    Task2Component,
    Task3Component,
    ParentComponent,
    ChildComponent,
    
   
  ],
  imports: [
    BrowserModule,
    Task4Module,
    Task5Module,
    Task6Module
  ],
  providers: [Subchild16Component],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
