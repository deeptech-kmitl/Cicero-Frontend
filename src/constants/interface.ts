export interface IFormattedErrorResponse {
  message?: string;
  infoMessage?: string;
  status?: number;
  statusText?: string;
}

export interface IUser {
  id: string;
  email: string;
  fname: string;
  lname: string;
  phone: string;
  avatar: string;
  dob:string;
  role_id: number;
}

export interface IImage {
  id: string;
  url: string;
  filename: string;
}
export interface IProduct {
  id: string;
  product_title: string;
  product_desc: string;
  product_color: string;
  product_price: number;
  product_sex: string;
  product_size: string[];
  product_stock: number;
  product_category: string;
  images: IImage[];
}

export interface IProductCard {
  id: string;
  product_title: string;
  product_desc: string;
  product_color: string;
  product_price: number;
  product_sex: string;
  product_size: string[];
  product_stock: number;
  product_category: string;
  images: string;
}

interface Token {
  id: string;
  access_token: string;
}

export interface SignInResponse {
  user: IUser;
  token: Token;
}
