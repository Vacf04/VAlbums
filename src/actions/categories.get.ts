'use server';
import { apiRequest } from '@/functions/api-request';

interface CategoryGetParams {
  page?: number;
  limit?: number;
  search?: string;
}

export type CategoryResponseType = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function categoryGet({
  page = 1,
  limit = 10,
  search,
}: CategoryGetParams) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
    });

    if (search) params.append('search', search);

    const data = await apiRequest<CategoryResponseType>(
      `store/categories?${params.toString()}`,
    );
    if (data.data) {
      return { success: true, data, error: null };
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
