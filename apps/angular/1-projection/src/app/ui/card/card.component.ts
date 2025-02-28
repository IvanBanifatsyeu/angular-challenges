import { Component, input, output } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass()">
      <ng-content select="card-img"></ng-content>
      <section>
        @for (item of list(); track item.id) {
          <app-list-item [name]="item[this.title()]">
            <button (click)="delete(item.id)">
              <img class="h-5" src="assets/svg/trash.svg" />
            </button>
          </app-list-item>
        }
      </section>
      <ng-content select="add-btn"></ng-content>
    </div>
  `,
  imports: [ListItemComponent],
})
export class CardComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly list = input<any[] | null>(null);
  readonly customClass = input('');
  readonly title = input.required<string>();
  deleteItem = output<number>();

  delete(id: number) {
    this.deleteItem.emit(id);
  }
}
