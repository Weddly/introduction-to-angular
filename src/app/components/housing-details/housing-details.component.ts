import { HousingDataService } from 'src/app/services/housing-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingLocation } from 'src/app/interfaces/housing-location';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {
  location?: HousingLocation;
  name = "";
  constructor(private route: ActivatedRoute, private service: HousingDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('data') ?? "";
    });

    if (this.name.length > 0) {
      this.service.getHouse(this.name).subscribe(v => this.location = v);
    }
  }


}
