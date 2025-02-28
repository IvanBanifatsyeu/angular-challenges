import { Injectable, signal } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { IStore } from './../core/interfaces/store.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherStore implements IStore<Teacher> {
  public items = signal<Teacher[]>([]);

  addAll(teachers: Teacher[]) {
    this.items.set(teachers);
  }

  addOne(teacher: Teacher) {
    this.items.set([...this.items(), teacher]);
  }

  deleteOne(id: number) {
    this.items.set(this.items().filter((t) => t.id !== id));
  }
}
