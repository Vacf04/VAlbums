import { CategoryResponseType } from './category';

export type ProductGetParams = {
  page?: number;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
  sortBy?: 'createdAt' | 'name' | 'price';
  category?: string;
  search?: string;
};

export type ProductResponseType = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category: CategoryResponseType;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductsResponseType = {
  currentPage: number;
  data: ProductResponseType[];
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};
