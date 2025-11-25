import productGet from '@/actions/products-get';
import Introduction from '@/components/Home/Introduction';
import RapSection from '@/components/Home/RapSection';
import RecentAlbums from '@/components/Home/RecentAlbums';
import UniqueSection from '@/components/Home/UniqueSection';

export default async function Home() {
  const recentProducts = await productGet({
    limit: 3,
    sortBy: 'createdAt',
    sortOrder: 'DESC',
  });

  return (
    <>
      <Introduction />
      <RecentAlbums recentProducts={recentProducts} />
      <RapSection />
      <UniqueSection />
    </>
  );
}
