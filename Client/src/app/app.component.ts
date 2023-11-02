import { Component, OnInit } from '@angular/core';
import { FoyerService } from './Core/services/foyer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GestionFoyer';
  constructor(private foyerService: FoyerService) {}
  ngOnInit(): any {
    this.foyerService.getData().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Une erreur est survenue : ', error);
      }
    );
  }
}
