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

interface Token {
  id: string;
  access_token: string;
}

export interface SignInResponse {
  user: IUser;
  token: Token;
}

