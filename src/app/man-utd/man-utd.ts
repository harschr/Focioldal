import { Component } from '@angular/core';
import { Matches } from '../matches';
import { Match } from '../match';
import { MatchWithMonth } from '../match';

@Component({
  selector: 'app-man-utd',
  standalone: false,
  styleUrl: './man-utd.css',
  templateUrl: './man-utd.html',
})

export class ManUtd {
  matches: Match[] = []; //eredeti tomb, ami jon az api-bol
  matchesWithMonth: MatchWithMonth[] = [];
  groupedMatches: { month: string, games: Match[] }[] = [];

  months = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december"
  ];

  teamLogos: { [key: string]: string } = {
    "Everton": "logos/everton.png",
    "Hull City": "logos/hull-city-logo-footylogos-320.webp",
    "Ipswich Town": "logos/ipswich-town.webp",
    "Sabah": "logos/sabah.webp",
    "Man City": "logos/mancity.png",
    "Brighton": "logos/brighton.png",
    "Fulham": "logos/fulham.png",
    "Man Utd": "logos/mu.png",
  };


  /* constructor(private matchesService: Matches) {
     this.matchesService.getMatches().subscribe(data => {
       console.log(data);
     });
   }*/

  //HIBAKERESÉSHEZ jobb ez: (amúgy ugyanazt csinálja, mint a fenti konstruktor)
  constructor(private matchesService: Matches) {
    console.log("1. A konstruktor lefutott");

    this.matchesService.getMatches().subscribe({
      next: data => {
        this.matches = data.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        this.matchesWithMonth = this.matches.map(match => {
          return {
            ...match,
            month: this.months[new Date(match.date).getMonth()]
          }
        });

        for (const match of this.matchesWithMonth) {
          const group = this.groupedMatches.find(
            group => group.month === match.month
          );

          if (!group) {
            this.groupedMatches.push({
              month: match.month,
              games: [match]
            });
          }

          if (group) {
            group.games.push(match);
          }

          console.log(JSON.stringify(this.groupedMatches));
        }


        //console.log(this.matches);
        //console.log(this.months[new Date(data[0].date).getMonth()]);
        //console.log("2. Megérkezett az adat:");
        //console.log(data);
      },
      error: err => {
        console.log("3. HIBA:");
        console.log(err);
      }
    });
  }
}
