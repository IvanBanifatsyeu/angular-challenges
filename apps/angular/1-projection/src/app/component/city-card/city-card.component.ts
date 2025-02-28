import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CardTitle } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card
      [list]="cities()"
      (deleteItem)="deleteItem($event)"
      customClass="bg-light-blue"
      [title]="title">
      <img
        ngProjectAs="card-img"
        ngSrc="assets/img/city.png"
        width="200"
        height="200" />
      <button
        ngProjectAs="add-btn"
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addNewItem()">
        Add
      </button>
    </app-card>
  `,
  imports: [CardComponent, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      ::ng-deep .bg-light-blue {
        background-color: rgba(0, 104, 250, 0.1);
      }
    `,
  ],
})
export class CityCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  store = inject(CityStore);
  cities = this.store.items;
  title = CardTitle.NAME;

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));
  }

  addNewItem() {
    this.store.addOne(randomCity());
  }

  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
}
