import { useParams, useSearchParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <p>Product #{params.id}</p>
      <p>{searchParams.get('text')}</p>
    </div>
  )
}