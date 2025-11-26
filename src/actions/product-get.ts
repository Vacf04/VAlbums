'use server';
import { apiRequest } from '@/functions/api-request';
import { ProductResponseType } from '@/types/product';
export default async function productGet(slug: string) {
  try {
    const data = await apiRequest<ProductResponseType>(
      `store/products/${slug}`,
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
