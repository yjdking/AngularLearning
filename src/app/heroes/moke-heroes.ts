import { Hero, Row } from "./hero";
import {MatPaginatorIntl} from '@angular/material';

export const heross: Hero[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' },
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export const Rows: Row[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export class MatPaginatorIntlCro extends MatPaginatorIntl  {
  /** A label for the page size selector. */
  itemsPerPageLabel = '';
  /** A label for the button that increments the current page. */
  nextPageLabel = '';
  /** A label for the button that decrements the current page. */
  previousPageLabel = '';
  /** A label for the button that moves to the first page. */
  firstPageLabel = '';
  /** A label for the button that moves to the last page. */
  lastPageLabel = '';
  /** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel =  (page: number, pageSize: number, length: number) => {
   /* if (length === 0 || pageSize === 0) {
      return '0 od' + length;
    }*/

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;
    // return `第${startIndex + 1}-${endIndex}条, 总共${length}条`;
    return ``;
  }
}

