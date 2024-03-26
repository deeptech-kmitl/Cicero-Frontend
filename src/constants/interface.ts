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
  dob: string;
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
  product_size: string;
  product_stock: number;
  product_category: string;
  images: IImage[];
}

export interface ICreateProduct {
  product_title: string;
  product_desc: string;
  product_color: string;
  product_price: string;
  product_sex: string;
  product_size: string;
  product_stock: string;
  product_category: string;
  images?: any;
  tokenId: string;
}


export interface IDeleteProduct {
  id: string;
  tokenId: string;
}

export interface Token {
  id: string;
  access_token: string;
}

export interface SignInResponse {
  user: IUser;
  token: Token;
}

export interface IPaymentAddress {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  street: string;
  zip: string;
  country: string;
}

export interface IPaymentDetail {
  card_holder: string;
  card_number: string;
  expired: string;
  cvv: string;
}

export interface IOrder {
  address: IPaymentAddress;
  payment_detail: IPaymentDetail;
  total: number;
}
