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
  devActivities=false;
  partyDetails = {
    "politicalLeaderId": 1,
    "politicalPartyId": 1,
    "candidateName": "JPNarayana",
    "candidateState": "Telanagana"
  };

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
        "state": "AP State",
        "activityMonth": 5,
        "activityYear": 2023
    },
    {
      "developmentId": 2,
      "politicalLeaderId": 2,
      "title": "Rural area development",
      "activity": "Blacktop roads",
      "budget": "900",
      "state": "UPState",
      "activityMonth": 12,
      "activityYear": 2021
  }
  ];

  onFetchDetails() {
    console.log("clicked me!", this.partyLeaders);
    this.partyDetails = this.partyLeaders[0];
    this.enableLeaderInfo = true;
  }

  partyInformation() {
    this.enablePartyInfo = true;
    console.log("party ifno", this.partyDetails);
  }
  getDevelopActivities()
  {
    this.devActivities=true;

  }

}
