import { useQuery, gql } from 'urql';

const TodosQuery = gql`
  query {
    Products {
      id
      title
      price
    }
  }
`;

export default function Products() {
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      {
        data.Products.map(p => (
          <div key={p.id}>
            <p>{p.title}</p>
            <p>{p.price}</p>
          </div>
        ))
      }
    </div>
  )
}