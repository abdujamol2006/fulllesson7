import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    title,
    id,
    brand,
    availabilityStatus,
    description,
    category,
    price,
    thumbnail,
  } = product;
  return (
    <Link to={`/product/${id}`}>
      <img src={thumbnail} alt="" />
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{brand}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{availabilityStatus}</p>
    </Link>
  );
}

export default ProductCard;
