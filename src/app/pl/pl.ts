import { Component } from '@angular/core';
import { TableRow } from '../tableRow';
import { Table } from '../table';

@Component({
  selector: 'app-pl',
  standalone: false,
  styleUrl: './pl.css',
  templateUrl: './pl.html',
})

export class PL {
table: TableRow[] = []; //eredeti tomb, ami jon az api-bol

constructor(private tableService: Table) {

    console.log("1. A konstruktor lefutott", this);

    tableService.getTable().subscribe({
      next: (data: TableRow[]) => {
        this.table = data.sort((a,b) => {
          return a.position - b.position
        });

      },
      error: (err: any) => {
        console.log("3. HIBA:");
        console.log(err);
      }


    });

   /* this.matchesService.getVidimatches().subscribe({
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
  }*/
}


}


