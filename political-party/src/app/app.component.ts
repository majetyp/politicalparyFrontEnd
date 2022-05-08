import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'political-party';
  enableLeaderInfo = false;
  enablePartyInfo = false;
  selectedLeader: number = 1;
  partyDetails: any = {}
  finalTableValues: any = [{}]

  partyLeaders = [
    {
        "politicalLeaderId": 1,
        "politicalPartyId": 1,
        "candidateName": "JPNarayana",
        "candidateState": "Telanagana"
    },
    {
        "politicalLeaderId": 2,
        "politicalPartyId": 1,
        "candidateName": "Ashwin Mahesh",
        "candidateState": "Karnataka"
    }
  ];

  partyInfo = [
    {
        "developmentId": 1,
        "politicalLeaderId": 1,
        "title": "urban area development",
        "activity": "drainage",
        "budget": "2500",
        "state": "UPState",
        "activityMonth": 5,
        "activityYear": 2023
    },
    {
      "developmentId": 2,
      "politicalLeaderId": 2,
      "title": "urban area development2",
      "activity": "drainage2",
      "budget": "2500",
      "state": "APState",
      "activityMonth": 6,
      "activityYear": 2023
    }
  ];

  onFetchDetails() {
    this.enableLeaderInfo = true;
  }

  onFecthLeaderActivites() {
    this.enablePartyInfo = true;
    this.partyDetails = this.partyLeaders.find( (data) => data.politicalLeaderId == this.selectedLeader);
    this.finalTableValues = this.partyInfo.filter((data) => data.politicalLeaderId == this.selectedLeader);
    console.log("this.partyDetails", this.partyDetails);
  }

  partyInformation() {
  }

}