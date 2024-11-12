
export interface Product {
    id: number, 
    title: string, 
    description: string, 
    price: number,
    images: string[]
}


export interface SearchResult {
    products: Product[]
}
