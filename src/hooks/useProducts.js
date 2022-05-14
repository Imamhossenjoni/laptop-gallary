import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://sheltered-thicket-84216.herokuapp.com/laptops')
        // fetch("laptops.json")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    return [products,setProducts];
}
export default useProducts;