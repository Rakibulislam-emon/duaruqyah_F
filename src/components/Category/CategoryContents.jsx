"use client";
import React, { useEffect, useState } from 'react';
import CategoryContentCard from './CategoryContentCard';
import { useSearch } from './SearchContext';

export default function CategoryContents() {
  const url = process.env.NEXT_PUBLIC_API_URL

  const { searchTerm } = useSearch(); 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/api/category`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, [url]); 

  // Filter data based on the searchTerm if it exists, otherwise show all data
  const filteredData = searchTerm
    ? data.filter((item) =>
      item?.cat_name_en?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : data;

  if (loading) return <p className='text-center'>loading....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='border w-full'>
      {filteredData.length > 0 ? (
        <CategoryContentCard getData={filteredData} />
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
}
