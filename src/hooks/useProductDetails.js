import { useEffect, useState } from "react"

const useProductDetails = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:4001/laptops/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [productId]);
    return [product,setProduct]
}
export default useProductDetails;

