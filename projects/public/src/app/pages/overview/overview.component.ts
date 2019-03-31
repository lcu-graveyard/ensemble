import { Component, OnInit } from '@angular/core';

export class OverviewSpot {
  public Abstract: string;

  public Description: string;

  public Lookup: string;

  public Name: string;
}

@Component({
  selector: 'lcu-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  //  Fields
  protected spots: OverviewSpot[];

  //  Properties
  public ActiveSpot: string;

  public get Spots(): OverviewSpot[] {
    return !this.ActiveSpot
      ? [...this.spots]
      : [...this.spots].sort((a, b) => {
          return a.Lookup === this.ActiveSpot ? -1 : 1;
        });
  }

  //  Constructors
  constructor() {}

  //  Life Cycle
  public ngOnInit() {
    this.spots = [
      {
        Name: 'Prototype & Innovate',
        Lookup: 'prototype',
        Abstract: 'Prototype ...',
        Description: 'Prototype & innovate desc ...'
      },
      {
        Name: 'Partner & Explore',
        Lookup: 'partner',
        Abstract: 'Partner ...',
        Description: 'Partner & explore desc ...'
      },
      {
        Name: 'Prepare & Reveal',
        Lookup: 'prepare',
        Abstract: 'Prepare ...',
        Description: 'Prepare & reveal desc ...'
      },
      {
        Name: 'Share & Monetize',
        Lookup: 'share',
        Abstract: 'Share ...',
        Description: 'Share & monetize desc ...'
      }
    ];
  }

  //  API Methods
  public GetCol(spot: string) {
    const index = this.Spots.findIndex(s => s.Lookup === spot);

    return this.ActiveSpot === spot ? '1 / span 3' : this.ActiveSpot ? index.toString() : ((index % 2) + 1).toString();
  }

  public GetRow(spot: string) {
    const index = this.Spots.findIndex(s => s.Lookup === spot);

    return this.ActiveSpot === spot ? '1 / span 2' : this.ActiveSpot ? '3' : Math.round((index + 1) / 2).toString();
  }

  public SetActiveSpot(spot: string) {
    if (this.ActiveSpot === spot) {
      this.ActiveSpot = null;
    } else {
      this.ActiveSpot = spot;
    }
  }
}
