'use server';
import { apiRequest } from '@/functions/api-request';
import { CategoryResponseType } from './categories.get';

interface ProductGetParams {
  page?: number;
  limit?: number;
  sortOrder?: 'ASC' | 'DESC';
  sortBy?: 'createdAt' | 'name' | 'price';
  category?: string;
  search?: string;
}

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

export default async function productGet({
  page = 1,
  limit = 10,
  sortOrder = 'DESC',
  sortBy = 'createdAt',
  category,
  search,
}: ProductGetParams) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      sortOrder,
      sortBy,
    });

    if (category) params.append('category', category);
    if (search) params.append('search', search);

    const data = await apiRequest<ProductsResponseType>(
      `store/products?${params.toString()}`,
    );
    if (data.data) {
      return { success: true, data: data.data, error: null };
    } else {
      return data;
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return { success: false, data: null, error: 'Error, Try Again Later.' };
    } else {
      console.error(e);
      return { success: false, data: null, error: 'Unknow Error.' };
    }
  }
}
