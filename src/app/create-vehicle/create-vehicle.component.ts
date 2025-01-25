import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent {
  id: number = 0;
  constructor(private _activatedRoute: ActivatedRoute,private _vehicleService: VehicleService, private _router: Router) {
    // capturing id with activated route
    _activatedRoute.params.subscribe(
      (data: any) => {
      console.log(data.id);
      this.id = data.id;
      // integrating API
      _vehicleService.getVehicle(data.id).subscribe(
        (data: any) => {
        console.log(data);
        // display the data inform
        this.vehicleForm.patchValue(data);
      });
    });
  }

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  });

  submit() {
    // update vehicle
    if (this.id) {
      this._vehicleService.updateVehicle(this.id, this.vehicleForm.value) .subscribe(
          (data: any) => {
            alert('Updated Successfully!');
            this._router.navigateByUrl('/dashboard/vehicle');
          },(err: any) => {
            alert('Internal Server Error');
          }
        );

      // create vehicle
    } else {
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data: any) => {
          console.log(data);
          alert('Vehicle created successfully');
          this._router.navigateByUrl('/dashboard/vehicle');
        },(error: any) => {
          alert('internal server error');
        }
      );
    }
  }
}
