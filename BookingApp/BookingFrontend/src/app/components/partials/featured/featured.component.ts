import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getData(
        'http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london'
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
