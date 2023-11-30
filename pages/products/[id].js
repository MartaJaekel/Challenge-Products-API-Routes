import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);
    console.log(data)

    if (isLoading) {
        return <h1>Loading...</h1>;
      }
    
      if (!data) {
        return <h1>not found</h1>;}
        return (
            <>
            <h1>Product</h1>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>fact: {data.description}</p>
            {/* Add other product details as needed */}
            </>
          );
        



}