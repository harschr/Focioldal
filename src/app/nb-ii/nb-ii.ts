import { Component, ChangeDetectorRef } from '@angular/core'; //ChangeDetectorRef nélkül nem jelent meg a tabella az oldalon, csak ha mentettem a pl.html oldalt
import { NBIITable } from '../nbii-table';
import { NBIITableService } from '../nbii-table-service';


@Component({
  selector: 'app-nb-ii',
  standalone: false,
  styleUrl: './nb-ii.css',
  templateUrl: './nb-ii.html',
})
export class NbII {
  table: NBIITable[] = []; //tomb, ami jon az api-bol
  day: number = new Date().getDate();
  month: number = new Date().getMonth() + 1;
  year: number = new Date().getFullYear();

  date: string = String(this.year + ". " + this.month + ". " + this.day);

  constructor(private tableService: NBIITableService, private cdr: ChangeDetectorRef) {
    tableService.getNBIITable().subscribe({
      next: (data: NBIITable[]) => {
        this.table = data;
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        console.log("Hiba a tabella lekérésekor:");
        console.log(err);
      }
    });
  }
}