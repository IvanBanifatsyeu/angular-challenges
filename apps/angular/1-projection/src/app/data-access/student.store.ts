import { Injectable, signal } from '@angular/core';
import { IStore } from '../core/interfaces/store.interface';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentStore implements IStore<Student> {
  public items = signal<Student[]>([]);

  addAll(students: Student[]) {
    this.items.set(students);
  }

  addOne(student: Student) {
    this.items.set([...this.items(), student]);
  }

  deleteOne(id: number) {
    this.items.set(this.items().filter((s) => s.id !== id));
  }
}
