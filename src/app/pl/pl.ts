import { Component, ChangeDetectorRef } from '@angular/core'; //ChangeDetectorRef nélkül nem jelent meg a tabella az oldalon, csak ha mentettem a pl.html oldalt
import { PlTable } from '../pl-table';
import { PlTableService } from '../pl-table-service';

@Component({
  selector: 'app-pl',
  standalone: false,
  styleUrl: './pl.css',
  templateUrl: './pl.html',
})

export class PL {
  table: PlTable[] = []; //tomb, ami jon az api-bol

  constructor(private tableService: PlTableService, private cdr: ChangeDetectorRef) {
    tableService.getPlTable().subscribe({
      next: (data: PlTable[]) => {
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