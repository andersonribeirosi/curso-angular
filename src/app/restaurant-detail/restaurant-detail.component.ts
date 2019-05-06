import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurant/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restautansService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restautansService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
