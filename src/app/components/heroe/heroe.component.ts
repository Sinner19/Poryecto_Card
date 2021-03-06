import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activateRoute: ActivatedRoute,
                private heroesService: HeroesService, private router:Router){
    
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.heroe = this.heroesService.getHeroe(params['id'])
      
    });

  }

  

  ngOnInit(): void {
  }

  verHeroes(){
this.router.navigate(['/heroes'])
  }
}
