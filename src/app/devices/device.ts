import { Category } from '../categories/category';

export type Device = {
  id?: number;
  color: string;
  partNumber: string;
  category: Category;
};
