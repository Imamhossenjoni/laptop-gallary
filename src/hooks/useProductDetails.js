import { useEffect, useState } from "react"

const useProductDetails = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://sheltered-thicket-84216.herokuapp.com/laptops/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [productId]);
    return [product,setProduct]
}
export default useProductDetails;

