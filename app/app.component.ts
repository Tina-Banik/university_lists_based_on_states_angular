import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'universityList-2025';
  /**here I initialize the university related functions where I fetch the university api*/
  constructor(private api:ApiService) { }
  allUList:any =[];
  sList:any=[];
  p:number = 1;
  swList:any=[];
  ngOnInit(): void {
    this.getUniversityLists();
  }
  getUniversityLists(){
    this.api.getAllUniversityLists().subscribe({
      next:((response:any)=>{
        this.allUList = response;
        console.log("The all university lists :", this.allUList);
        this.getState();
      }),
      complete:(()=>{
        console.log("All the university lists are fetched successfully..")
      }),
      error:((error:any)=>{
        console.error("Error !! Error during the university lists", error.message);
      }),
    })
  }
  /** for all the university lists we fetch the state lists */
  getState(){
    this.sList = this.allUList.map((item:any)=>{
      return item['state-province']
    }).filter(Boolean).filter((item:any,pos:any,self:any)=>{
      return self.indexOf(item) == pos;
    })
    console.log("The state lists are :", this.sList);
  }
  select(st:any){
    console.log(st.value);
    this.swList = this.allUList.filter((item:any)=>{
      return item['state-province'] == st.value;
    });
    console.log("The state-wise lists are :", this.swList);
  }
}
