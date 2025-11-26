export type CategoryGetParams = {
  page?: number;
  limit?: number;
  search?: string;
};

export type CategoryResponseType = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};
