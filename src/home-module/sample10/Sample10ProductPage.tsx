import {Link} from "react-router-dom";

export default function Sample10ProductPage() {

    const products = [
        {id: 'p1', name: 'Product 1'},
        {id: 'p2', name: 'Product 2'},
        {id: 'p3', name: 'Product 3'},
    ];
    return (
        <>
            <h3>Product Page</h3>
            {/*<ul>
                <li><Link to="/sample10/product-1">Product 1</Link></li>
                <li><Link to="/sample10/product-2">Product 2</Link></li>
                <li><Link to="/sample10/product-3">Product 3</Link></li>
            </ul>*/}

            {/*making it even more dynamic*/}
            <ul>
                {
                    //using backticks ` for string interpolation
                    products.map(product => (
                        //option 1: Because we are using relative path in App.tsx, we do not need to add /sample10/ in front of product.id
                        //<li key={product.id}><Link to={`sample10/${product.id}`}>{product.id}</Link></li>

                        //option 2: Relative path
                        <li key={product.id}><Link to={product.id}>{product.id}</Link></li>
                    ))
                }
            </ul>
        </>
    );
}
