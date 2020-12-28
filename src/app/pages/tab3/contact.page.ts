import {Component} from '@angular/core';
import {ContactService} from "./contact.service";

@Component({
  selector: 'bonly-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  private placeholderText: any;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getPlaceholderText()
        .subscribe(e => {
          this.placeholderText = e;
        })
  }
}
