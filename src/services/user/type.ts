export interface User {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}

export interface UpdateUserRequest {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}
