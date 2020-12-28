import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {TermsService} from "./terms.service";

@Component({
  templateUrl: './terms.page.html'
})
export class TermsModalPage implements OnInit{

  public terms: string | null;

  constructor(
      public termsService: TermsService,
      public modalController: ModalController,
  ) {
  }


  dismiss() {
    this.modalController.dismiss()
  }

  ngOnInit(): void {
    this.termsService.getPlaceholderText()
        .subscribe(e => {
          this.terms = e;
        })
  }
}
