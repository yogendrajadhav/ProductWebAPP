import { Component, OnInit } from '@angular/core';
import configurl from '../../public/assets/config/config.json';
import { DemoService } from './services/demo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'ProductWebAPP';
  config = {ApiUrl: configurl.apiServer.url};

response:any=[];

constructor(private sharedService:DemoService){}

refreshProductList(){
  this.sharedService.getData().subscribe(data=>{
    this.response=data;
    console.log(this.response);
  });
}

ngOnInit(){
  setTimeout(() => {
    this.refreshProductList();
  }, 1000);
}

}
