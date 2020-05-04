import { Component, OnInit } from '@angular/core';
import { AwsService } from './aws.service';
import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  dashboard: any;
  constructor(private aws: AwsService) {}

  ngOnInit() {
    this.aws.getEmbeddedUrl().subscribe(data => {
        console.log(data);
        this.setDashboard(data['url']);
    });
  }

  setDashboard(embeddedURL: string) {
    const containerDiv = document.getElementById('dashboardContainer');
    const options = {
      url: embeddedURL,
      container: containerDiv,
      scrolling: 'yes',
      height: '700px',
      width: '100%'
    };

    this.dashboard = QuickSightEmbedding.embedDashboard(options);
  }
}
