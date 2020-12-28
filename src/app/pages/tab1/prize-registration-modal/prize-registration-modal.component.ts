import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from "../../../core/auth/account.service";
import {Prize} from "../../../shared/model/prize.model";
import {PrizeRegistrationService} from "./prize-registration.service";
import {Account} from '../../../core/user/account.model';
import {ModalController, ToastController} from "@ionic/angular";
import {SERVER_API_URL} from "../../../../environments/environment";

@Component({
  selector: 'jhi-prize-registration-modal',
  templateUrl: './prize-registration-modal.component.html',
  styleUrls: ['./prize-registration-modal.component.scss'],
})
export class PrizeRegistrationModalComponent implements OnInit {
  public account: Account | null = null;
  public prize: Prize | null = null;
  public error = '';
  public color = 'primary';

  @Input() creditsRequired;
  @Input() id;
  @Input() imageId;
  @Input() type;
  @Input() winner;
  @Input() title;
  public imageDownload = SERVER_API_URL + "api/image/";
  private numberOfTickets: number | null;
  constructor(
      private accountSercice: AccountService,
      public prizeRegistrationService: PrizeRegistrationService,
      public modalController: ModalController,
      public toastController: ToastController
  ) {
  }

  ngOnInit(): void {
    if (this.type == 'DAILY') {
      this.color = "primary"
    }
    if (this.type == 'WEEKLY') {
      this.color = "secondary"
    }
    if (this.type == 'MONTHLY') {
      this.color = "tertiary"
    }
    this.prizeRegistrationService.findNumberOfRegistraionsByPrizeId(this.id).subscribe(e => {
      this.numberOfTickets = e.body;
    });

    this.accountSercice.getAccount().subscribe(e => {
      this.account = e;
    });
  }

  save(): void {
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Registration successful',
      position: 'top',
      animated: true,
      color: this.color,
      cssClass: "max-width-toast",
      duration: 2000,
    });
    toast.present();
  }


  async register() {
    this.prizeRegistrationService.create({prizeId: this.id}).subscribe(
        () => {
          this.presentToastWithOptions();
          this.accountSercice.getAccount().subscribe(e => {
            this.account = e;
            this.prizeRegistrationService.findNumberOfRegistraionsByPrizeId(this.id).subscribe(e => {
              this.numberOfTickets = e.body;
            });
          });
        },
        () => {
          this.error = 'Unable to register';
        }
    );
  }

  dismiss() {
    this.modalController.dismiss()
  }
}
