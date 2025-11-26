'use server';
import { apiRequest } from '@/functions/api-request';
import { ProductGetParams, ProductsResponseType } from '@/types/product';

export default async function productsGet({
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
    return data;
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
