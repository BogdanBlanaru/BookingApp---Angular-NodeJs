import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchModel } from 'src/app/models/searchOption';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  destination: string = '';
  date: string[] = [
    new Date(Date.now()).toLocaleString().split(',')[0],
    new Date(Date.now()).toLocaleString().split(',')[0],
  ];

  options!: SearchModel;
  subscription!: Subscription;

  start: FormControl = new FormControl();
  end: FormControl = new FormControl();

  range = new FormGroup({
    start: this.start,
    end: this.end,
  });

  openDate: boolean = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.searchService.getDestination().subscribe((el) => {
      console.log(el);
      this.destination = el.destination;
      this.date = el.date;
      this.options = el.options;
    });
  }

  onOpenDate() {
    this.openDate = !this.openDate;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
