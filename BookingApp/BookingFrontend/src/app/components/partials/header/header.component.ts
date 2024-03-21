import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { setOptions } from '@mobiscroll/angular';
import { SearchModel } from 'src/app/models/searchOption';
import { SearchService } from 'src/app/services/search.service';
import { FormControl, FormGroup } from '@angular/forms';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBed = faBed;
  faPlane = faPlane;
  faCar = faCar;
  faTaxi = faTaxi;
  faCalendarDays = faCalendarDays;
  faPerson = faPerson;

  currentDate = new Date(Date.now()).toLocaleString().split(',')[0];
  openDate = false;
  openOptions = false;
  options: SearchModel = {
    adult: 2,
    children: 0,
    room: 1,
  };

  start: FormControl = new FormControl();
  end: FormControl = new FormControl();
  destination: string = '';

  range = new FormGroup({
    start: this.start,
    end: this.end,
  });

  @Input() type: string = '';

  constructor(private router: Router, private searchService: SearchService) {}

  onOpenDate() {
    this.openDate = !this.openDate;
  }

  onOpenOptions() {
    this.openOptions = !this.openOptions;
  }

  handleOption(name: string, operation: string) {
    if (operation === 'increase') {
      if (name === 'adult') this.options.adult++;
      if (name === 'children') this.options.children++;
      if (name === 'room') this.options.room++;
    } else {
      if (name === 'adult') this.options.adult--;
      if (name === 'children') this.options.children--;
      if (name === 'room') this.options.room--;
    }
  }

  handleSearch() {
    console.log(this.range.value, this.end.value);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    this.router.navigate(['hotels']);
    this.searchService.setDestination({
      destination: this.destination,
      date: [
        this.start.value
          ? this.start.value.toLocaleDateString('en-EN', options)
          : this.currentDate,
        this.end.value
          ? this.end.value.toLocaleDateString('en-EN', options)
          : this.currentDate,
      ],
      options: this.options,
    });
  }

  ngOnInit(): void {}
}
