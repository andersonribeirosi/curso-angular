import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurant/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.restaurantsOfReviews(this.route.parent.snapshot.params['id'])
  }

}
