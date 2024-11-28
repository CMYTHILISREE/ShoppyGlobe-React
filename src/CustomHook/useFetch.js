import {useState,useEffect} from "react";


function useFetch(url){
    const[products,setProducts] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,seterror] = useState(null);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const response =await fetch("https://dummyjson.com/products");
                if(!response.ok){
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                const result = await response.json();
                setProducts(result.products);
            }catch(err){
                seterror(err.message);
            }finally{
                setLoading(false);
            }
        }

        fetchProducts();

    },[url]);

    return { products,loading,error };
}

export default useFetch;