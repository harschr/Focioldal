import { Component, signal } from '@angular/core';
import { Vidimatches} from '../vidimatches';
import { Vidimatch } from '../vidimatch';
import { VidimatchWithMonth } from '../vidimatch';

@Component({
  selector: 'app-vidi',
  standalone: false,
  styleUrl: './vidi.css',
  templateUrl: './vidi.html',
})

export class Vidi {
  matches: Vidimatch[] = []; //eredeti tomb, ami jon az api-bol
  matchesWithMonth: VidimatchWithMonth[] = [];

  groupedMatches = signal<{ month: string, games: Vidimatch[] }[]>([]);
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
    "Kozármisleny": "logos/kozarmisleny.png",
    "Kazincbarcika": "logos/kazincbarcika.png",
    "Szeged": "logos/szeged.png",
    "Kecskemét": "logos/kecskemet.png",
    "Mezőkövesd": "logos/mezokovesd.png",
    "Karcag": "logos/karcag.png",
    "Diósgyőr": "logos/dvtk.png",
    "Nagykanizsa": "logos/nagykanizsa.png",
    "Videoton": "logos/videoton.webp",
  };

  constructor(private matchesService: Vidimatches) {

    console.log("1. A konstruktor lefutott", this);

    this.matchesService.getVidimatches().subscribe({
      next: (data: Vidimatch[]) => {

        this.matches = data.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        this.matchesWithMonth = this.matches.map(meccs => {
          return {
            ...meccs,
            month: this.months[new Date(meccs.date).getMonth()]
          };
        });

        const grouped: {month: string, games: Vidimatch[]} [] = [];
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