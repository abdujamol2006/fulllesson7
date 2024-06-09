import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function Product() {
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    `https://dummyjson.com/product/${id}`
  );
  console.log(data);
  return (
    <>
      {data && (
        <div>
          <img src={data.thumbnail} alt="" />
          <h1>{data.title}</h1>
        </div>
      )}
    </>
  );
}

export default Product;
