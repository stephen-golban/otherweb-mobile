export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
