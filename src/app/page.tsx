import Introduction from '@/components/Home/Introduction';
import RapSection from '@/components/Home/RapSection';
import RecentAlbums from '@/components/Home/RecentAlbums';
import UniqueSection from '@/components/Home/UniqueSection';

export default function Home() {
  return (
    <>
      <Introduction />
      <RecentAlbums />
      <RapSection />
      <UniqueSection />
    </>
  );
}
