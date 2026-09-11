import { Component } from '@angular/core';

@Component({
  selector: 'app-man-utd',
  standalone: false,
  styleUrl: './man-utd.css',
  templateUrl: './man-utd.html',
})
export class ManUtd {

  matches = [
    {
      month: "2026. augusztus",
      games: [
        {
          date: "Aug. 22., szombat",
          competition: "Premier League",
          home: "Hull City",
          away: "Man Utd",
          homeLogo: "logos/hull-city-logo-footylogos-320.webp",
          awayLogo: "logos/mu.png",
          result: "2:0",
          played: true
        },
        {
          date: "Aug. 30., vasárnap",
          competition: "Premier League",
          home: "Man Utd",
          away: "Ipswich Town",
          homeLogo: "logos/mu.png",
          awayLogo: "logos/ipswich-town.webp",
          result: "5:2",
          played: true
        },
      ]
    },
    {
      month: "2026. szeptember",
      games: [
        {
          date: "Szept. 6., vasárnap",
          competition: "Premier League",
          home: "Everton FC",
          away: "Man Utd",
          homeLogo: "logos/everton.png",
          awayLogo: "logos/mu.png",
          result: "2:2",
          played: true
        },
        {
          date: "Szept. 10., csütörtök",
          competition: "Champions League",
          home: "Man Utd",
          away: "Sabah",
          homeLogo: "logos/mu.png",
          awayLogo: "logos/sabah.webp",
          result: "4:0",
          played: true
        },
         {
          date: "Szept. 13., vasárnap",
          competition: "Premier League",
          home: "Man Utd",
          away: "Man City",
          homeLogo: "logos/mu.png",
          awayLogo: "logos/mancity.png",
          result: "17:30",
          played: false
        },
         {
          date: "Szept. 16., szerda",
          competition: "League Cup",
          home: "Man Utd",
          away: "Brighton",
          homeLogo: "logos/mu.png",
          awayLogo: "logos/brighton.png",
          result: "21:00",
          played: false
        }
      ]
    }
  ]
}
