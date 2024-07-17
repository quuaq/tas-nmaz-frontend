import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Tasinmaz } from '../models/tasinmaz';
import { TasinmazService } from '../services/tasinmaz.service';

@Component({
  selector: 'app-tasinmaz-table',
  templateUrl: './tasinmaz-table.component.html',
  styleUrls: ['./tasinmaz-table.component.css'],
  providers: [TasinmazService]
})
export class TasinmazTableComponent implements OnInit {
  tasinmazlar: Tasinmaz[];

  constructor(private alertifyService: AlertifyService, private tasinmazService: TasinmazService) { }

  ngOnInit() {
    this.loadTasinmazlar();
  }

  loadTasinmazlar() {
    this.tasinmazService.getTasinmazlar().subscribe(
      data => {
        this.tasinmazlar = data;
      },
      error => {
        console.error('Veri çekme hatası:', error);
      }
    );
  }

  addToEstate() {
    this.alertifyService.success("Taşınmaz Eklendi");
  }

  deleteToEstate() {
    this.alertifyService.error("Taşınmaz Silindi!");
  }

  updateToEstate() {
    this.alertifyService.warning("Taşınmazlar Güncellendi.");
  }
}

