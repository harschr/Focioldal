import { Component, signal } from '@angular/core';
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

  groupedMatches = signal<{ month: string, games: Match[] }[]>([]);
  loading = signal(true);

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
    "Tottenham": "logos/tottenham.png",
    "Leeds Utd": "logos/leeds.png",
    "Atletico Madrid": "logos/atletico.png",
    "Chelsea": "logos/chelsea.png",
    "Bournemouth": "logos/bournemouth.png",
    "Como": "logos/como.png",
    "Liverpool": "logos/liverpool.png",
    "Aston Villa": "logos/villa.png",
    "Roma": "logos/roma.webp"
  };

  constructor(private matchesService: Matches) {

    console.log("1. A konstruktor lefutott", this);

    this.matchesService.getMatches().subscribe({
      next: (data: Match[]) => {

        this.matches = data.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        this.matchesWithMonth = this.matches.map(match => {
          return {
            ...match,
            month: this.months[new Date(match.date).getMonth()]
          };
        });

        const grouped: { month: string, games: Match[] }[] = [];

        for (const match of this.matchesWithMonth) {

          const group = grouped.find(
            group => group.month === match.month
          );

          if (group) {
            group.games.push(match);
          } else {
            grouped.push({
              month: match.month,
              games: [match]
            });
          }
        }

        // this.groupedMatches = grouped;
        this.groupedMatches.set(grouped);
        this.loading.set(false);
      },

      error: (err: any) => {
        console.log("3. HIBA:");
        console.log(err);
      }
    });
  }
}