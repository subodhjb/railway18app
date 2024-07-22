import { Component, Inject, OnInit, inject } from '@angular/core';
import { IStation } from '../model/train';
import { TrainService } from '../service/train.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  trainService = inject(TrainService);
  router = inject(Router);
  trainList:IStation []=[];

  fromStationId:number=0;
  toStationId:number=0;
  dateOfTravel:string="";

  ngOnInit(): void {
    this.loadAllStation();
  }
 
  loadAllStation(){
   this.trainService.getAllStations().subscribe((res:any)=>{
    this.trainList = res.data;
   })
  }

  search(){
    if(this.fromStationId==0 ||this.toStationId==0 ||this.dateOfTravel==''){
      alert("Fill the All details..!");
    }else{
      if(this.fromStationId == this.toStationId){
      alert("From Station & To Station is same");
      }else{
      this.router.navigate(['/search',this.fromStationId,this.toStationId,this.dateOfTravel]);
      }
    }
  }

}
