import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductItem from "./ProductItem";
import "../style/ProductList.css"

function ProductList() {
    const dispatch = useDispatch();// Using dispatch hook to dispatch actions
    // Extracting products, loading, and error state from Redux store using useSelector
    const { items: products, loading, error } = useSelector(state => state.products);

    // useEffect hook to fetch products when the component mounts
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className="loading">Hang tight, we're loading your products...</div>;
    if (error) return <div className="error">Whoops! There was an issue: {error}</div>;

     // Render the list of products once they are loaded successfully
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ProductList;