import { Movement } from './movement';

export interface Client {
  id: number;
  name: string;
  balance: number;
  movements_count: number;
  movements: Movement[];
}
