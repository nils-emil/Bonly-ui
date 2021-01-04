import {Component, OnInit} from '@angular/core';
import {Advertisement, IAdvertisement} from "../../shared/model/advertisement.model";
import {AdvertisementService} from "./advertisement.service";
import {ToastController} from "@ionic/angular";
import {AdvertisementAnswers} from "../../shared/model/advertisement-answers.model";
import {SERVER_API_URL} from "../../../environments/environment";

@Component({
    selector: 'app-tab2',
    templateUrl: 'content.page.html',
    styleUrls: ['content.page.scss']
})
export class ContentPage implements OnInit {


    public advertisement: IAdvertisement | null = null;
    public adExist = false;
    public chosenAnswer: number = null;
    public answerSubmitted = false;
    public loading = true;
    public imageDownload = SERVER_API_URL + "api/image/";
    public placeholderText: any;

    constructor(private adService: AdvertisementService, public toastController: ToastController) {
    }

    ngOnInit(): void {
        this.findAnAddToShow();
        this.adService.getPlaceholderText()
            .subscribe(e => {
                this.placeholderText = e;
            })
    }

    private findAnAddToShow(): void {
        this.loading = true;
        this.advertisement = null;
        this.answerSubmitted = false;
        this.adService.findOneAdToShow().subscribe(e => {
            if (e && e.body) {
                this.adExist = true;
                this.advertisement = e.body;
                this.loading = false;
            } else {
                this.adExist = false;
                this.loading = false;
            }
        });
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Your settings have been saved.',
            duration: 2000
        });
        toast.present();
    }

    async presentToastWithOptions(creditsEarned: number) {
        if (creditsEarned > 0) {
            let creditsString = creditsEarned === 1 ? 'credit' : 'credits';
            const toast = await this.toastController.create({
                header: 'You earned ' + creditsEarned + ' ' + creditsString + ' from this question',
                position: 'top',
                animated: true,
                color: "primary",
                cssClass: "max-width-toast",
                duration: 2000,
            });
            toast.present();

        } else {
            const toast = await this.toastController.create({
                header: 'You earned ' + creditsEarned + ' credits from this question',
                position: 'top',
                animated: true,
                color: "secondary",
                cssClass: "max-width-toast",
                duration: 2000,
            });
            toast.present();

        }
    }


    chooseAnswer(question: Advertisement, answer: AdvertisementAnswers): void {
        if (this.answerSubmitted) {
            return;
        }
        this.chosenAnswer = answer.id;
        this.answerSubmitted = true;
        this.adService.chooseAnswer(question.id, answer.id).subscribe(
            () => {
                this.presentToastWithOptions(answer.correct ? question.creditCount : 0);
                setTimeout(() => {
                    this.findAnAddToShow()
                }, 3500)
            },
            () => {
                this.findAnAddToShow();
            }
        );
    }

    getNextMonday(): Date {
        var d = new Date();
        d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
        return d
    }
}
