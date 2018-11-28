import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-job-dashboard',
  templateUrl: './job-dashboard.component.html',
  styleUrls: ['./job-dashboard.component.css']
})
export class JobDashboardComponent implements OnInit {

  title = 'Job Dashboard';
  constructor (private httpClient: HttpClient) { }
  job: any;
  jobArr:any=new Array(5);
  header:any;
  jobCount:number;
  pageCount:number;
  pageArray:any
  
  ngOnInit () {
    this.httpClient.get('./data/temp.json').subscribe(
      data => {
         this.job = data;	 // FILL THE ARRAY WITH DATA.
         this.header=Object.keys(this.job[0])
           this.setPaginationIndex(this.job);
           this.showJob(0,5);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

}
setPaginationIndex(data:any){
if(Array.isArray(data)){
 this.jobCount=data.length;
 this.pageCount=Math.ceil(this.jobCount/5);
 this.pageArray=new Array(this.pageCount);
 

}

}
pageEvent(num){
  console.log(num)
  
}

showJob(start,end){
  for(let a=start,b=0;a<end && b<5;a++,b++){
      this.jobArr[b]=this.job[a];
  }
}
}
