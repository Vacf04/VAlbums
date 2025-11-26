import productGet from '@/actions/product-get';
import AlbumPage from '@/components/Album/AlbumPage';

export default async function Album({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await productGet(id);

  return <AlbumPage data={data} />;
}
