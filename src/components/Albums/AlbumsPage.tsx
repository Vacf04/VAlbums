'use client';
import productGet, { ProductsResponseType } from '@/actions/products-get';
import AlbumsGrid from './AlbumsGrid';
import styles from './AlbumsPage.module.css';
import Message from '../Helper/Message';
import React from 'react';

export default function AlbumsPage() {
  const [error, setError] = React.useState<string[] | null>(null);
  const [data, setData] = React.useState<ProductsResponseType | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetchData() {
      const { success, data, error } = await productGet({ page: 1, limit: 15 });
      setError(error);
      setData(data);
    }
    setLoading(true);
    fetchData();
    setLoading(false);
  });

  if (loading) return <p>loading...</p>;
  return (
    <section className={styles.albumsSection}>
      <div className="container">
        <h1 className="font-72">Albums</h1>
        {error && <Message type="ERROR" message={error[0]} />}
        {data && <AlbumsGrid data={data.data} />}
        <div></div>
      </div>
    </section>
  );
}
