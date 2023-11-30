
import Link from "next/link";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
    const { data, isLoading } = useSWR("/api/products", fetcher);
    console.log(data)
  
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
    if (!data) {
      return;
    }
  
    
      
    return (
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.name},
            {product.description}
          </li>
        ))}
      </ul>
    );
  }
  
  
  
