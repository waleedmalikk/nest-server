import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '468723648732',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '9485093908',
      name: 'Item Two',
      qty: 20,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
