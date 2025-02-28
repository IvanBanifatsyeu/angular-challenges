import { Signal } from '@angular/core';

export interface IStore<T> {
  items: Signal<T[]>;
  addAll(students: T[]): void;
  addOne(student: T): void;
  deleteOne(id: number): void;
}
