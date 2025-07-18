// export interface product{
//     id:number;
//     title:string;
//     description:string;
//     price:number;
//     category:string;
//     thumbnail:string;
//     images:string;

// }
export interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand?: string;
  category: string;
  images: string[];
  discountPercentage: number;
  rating: number;
    stock: number;
}
