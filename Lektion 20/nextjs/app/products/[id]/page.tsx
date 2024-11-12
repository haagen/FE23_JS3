import { Product as APIProduct, SearchResult } from "@/app/types";
import { notFound } from "next/navigation";

async function getProd(id: string) {
    const data = await fetch(
        `https://dummyjson.com/products/${id}`,
        {
            cache: 'force-cache'
        }
    );
    const prod:APIProduct = await data.json();

    if(!prod) notFound();
    return prod;
}

export async function generateStaticParams(){
    const data = await fetch('https://dummyjson.com/products', 
        {
            cache: 'force-cache'
        }
    );
    const response:SearchResult = await data.json();

    return response.products.map( (prod: APIProduct) => {
        const obj: ProductParams = {
            id: prod.id.toString()
        };
        return obj;
    });
}

export async function generateMetadata(props: ProductProps) {
    const { id } = await props.params;
    const product = await getProd(id);

    return {
        title: product.title,
        description: product.description
    }
}


interface ProductParams {
    id: string
}

interface ProductProps {
    params: ProductParams
}

const Product = async (props: ProductProps) => {

    const { id } = await props.params;
    const product = await getProd(id);

    return(
        <div>
            <h1>{ product.title } </h1>
            <p>
                { product.description}
            </p>
            <p>
                Pris: { product.price }
            </p>
            {
                product.images ? product.images.map((imgSrc, index ) => {
                    return(
                    <p key={ index }>
                        <img src={ imgSrc } alt={ 'Bild på ' + product.title } style={ { 'width': '100%'  } }/>
                    </p>
                    )
                })
                : 'Bild saknas!'
            }

        </div>
    );  
}

export default Product;
