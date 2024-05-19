import { Component, OnInit } from '@angular/core';
import { HousingLocation } from './interfaces/housing-location';
import { HousingDataService } from './services/housing-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fairhouse';
  selectedLocation: HousingLocation | undefined;
  locations: HousingLocation[] = [];

  constructor(private service: HousingDataService) {
  }

  ngOnInit(): void {
    this.service.getHouses()
      .subscribe(locations => this.locations = locations);
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }

}
