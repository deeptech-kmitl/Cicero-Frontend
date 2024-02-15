export interface IFormattedErrorResponse {
  message?: string;
  infoMessage?: string;
  status?: number;
  statusText?: string;
}



export interface User {
  id: string;
  email: string;
  fname: string;
  lname: string;
  phone: string;
  role_id: number;
}

interface Token {
  id: string;
  access_token: string;
}

export interface SignInResponse {
  user: User;
  token: Token;
}

