import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
@Component({
  selector: 'app-crudcours',
  templateUrl: './crudcours.component.html',
  styleUrls: ['./crudcours.component.css']
})
export class CrudcoursComponent implements OnInit{
  cours = [];
  constructor(private course: CoursService)
  {
  }
  ngOnInit(): void {
    this.loadcours()
  }

  loadcours(){
    this.course.getefiles().subscribe((rep) => {
      this.cours = rep;
      console.log(rep);
    });
  }

  deleteFile(id: number): void {
    if (confirm('Are you sure you want to delete this file?')) {
      this.course.deleteFile(id).subscribe((response: any) => {
        typeof(response)
        this.loadcours()
        console.log('File deleted successfully');
      }, (error: any) => {
        console.error(error);
      });
    }
  

}}
