import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weathers:any=[];
  date=new Date;
  constructor( private _weatherService:WeatherService){
    _weatherService.getweather().subscribe(
      (data:any)=>{
        this.weathers=data;
        console.log(this.weathers);
      }
    )
  }


}
