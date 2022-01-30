import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private data: DataService) { }

  public subscription : Subscription = new Subscription();

  cart: string = "";

  nrOfItems: number = 0;

  ngOnInit(): void {
    this.subscription = this.data.currentCart.subscribe(cart => this.cart = cart)

  }
  
  parse(){
    return JSON.parse(this.cart).length
  }
}
