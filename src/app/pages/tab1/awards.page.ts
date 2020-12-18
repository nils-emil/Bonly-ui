import {Component} from '@angular/core';
import {IPrize} from "../../shared/model/prize.model";
import {AccountService} from "../../core/auth/account.service";
import {ITEMS_PER_PAGE} from "../../shared/constants/pagination.constants";
import {HttpResponse} from "@angular/common/http";
import {PrizeService} from "./prize.service";
import {ModalController} from "@ionic/angular";
import {PrizeRegistrationModalComponent} from "./prize-registration-modal/prize-registration-modal.component";

@Component({
  selector: 'bonly-awards',
  templateUrl: 'awards.page.html',
  styleUrls: ['awards.page.scss']
})
export class AwardsPage {
  prizes: IPrize[];
  prizesExist = false;
  itemsPerPage: number;
  links: any;
  page: number;
  predicate: string;
  ascending: boolean;
  availableCreditCount = 0;
  public triangles: number[];
  public ribbons: number[];


  slideOpts = {
    initialSlide: 1,
    speed: 400,

    swipeToClose: true,
  };
  constructor(
      protected prizeService: PrizeService,
      protected accountSercice: AccountService,
      public modalController: ModalController
  ) {
    this.triangles = Array(3).fill(0).map((x, i) => i);
    this.ribbons = Array(5).fill(0).map((x, i) => i);
    this.prizes = [];
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.page = 0;
    this.links = {
      last: 0,
    };
    this.predicate = 'id';
    this.ascending = true;
  }

  ngOnInit(): void {
    this.loadAll();
    this.accountSercice.getAccount().subscribe(e => {
      this.availableCreditCount = e.creditCount;
    });
  }

  loadAll(): void {
    this.prizeService
        .query({
          page: this.page,
          size: this.itemsPerPage,
          sort: this.sort(),
        })
        .subscribe((res: HttpResponse<IPrize[]>) => {
          this.prizesExist = !!res.body;
          this.prizes = res.body || [];
        });
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  openPrizeRegistration(prize: any): void {
    console.log("should open modal");
  }

  async presentModal(prize: any) {
    const modal = await this.modalController.create({
      component: PrizeRegistrationModalComponent,
      componentProps: prize,
      cssClass: 'prize-registration-modal'
    });
    return await modal.present();
  }

  getColor(type: string) {
    if(type === 'MONTHLY') {
       return 'black'
    }
    return 'white'
  }
}
