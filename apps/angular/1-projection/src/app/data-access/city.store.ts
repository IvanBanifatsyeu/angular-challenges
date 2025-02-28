import { Injectable, signal } from '@angular/core';
import { IStore } from '../core/interfaces/store.interface';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore implements IStore<City> {
  items = signal<City[]>([]);

  addAll(cities: City[]) {
    this.items.set(cities);
  }

  addOne(city: City) {
    this.items.set([...this.items(), city]);
  }

  deleteOne(id: number) {
    this.items.set(this.items().filter((s) => s.id !== id));
  }
}
