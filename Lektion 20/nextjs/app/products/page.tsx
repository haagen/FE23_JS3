
import Link from 'next/link';
import { SearchResult } from "../types";

const Products = async () => {

    const data = await fetch('https://dummyjson.com/products', 
        {
            cache: 'force-cache'
        }
    );
    const response:SearchResult = await data.json();

    return(
        <div>
            <h1>Mina Produkter</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Namn</th>
                        <th>Pris</th>
                    </tr>
                </thead>
                <tbody>
                {
                    response.products.map((prod) => {
                        return (
                            <tr key={ prod.id }>
                                <td>{ prod.id }</td>
                                <td><Link href={ `/products/${prod.id}` }>{ prod.title }</Link></td>
                                <td>{ prod.price }</td>
                            </tr>                            
                        )
                    })
                }
                </tbody>
            </table>

        </div>

    );
}

export default Products;