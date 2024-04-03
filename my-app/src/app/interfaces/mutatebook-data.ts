export default interface BookData {
    id?: string;
    resumo: string;
    name: string;
    image_url: string;
    author: string;
    price: number;
    categories: string[];
}

export interface PartialBookData {
    id: string;
    resumo?: string;
    name?: string;
    image_url?: string;
    author?: string;
    price?: number;
    categories?: string[];
}