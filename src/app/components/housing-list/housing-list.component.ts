import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingDataService } from 'src/app/services/housing-data.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  locationList: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  filteredLocations: HousingLocation[] = [];

  constructor(private service: HousingDataService) {
  }

  ngOnInit(): void {
    this.service.getHouses()
      .subscribe(locations => this.locationList = locations);
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) this.filteredLocations = this.locationList;
    this.filteredLocations = this.locationList.filter(x => x.city.toLowerCase().includes(searchText.toLowerCase()));
    this.selectedLocationEvent.emit();
  }

  selectHouseLocation(location: HousingLocation) {

  }

}
