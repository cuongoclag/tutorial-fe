export interface User {
  address?: string;
  created_at?: string;
  dateOfBirth?: string;
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  password?: string;
  phone1?: number;
  phone2?: number;
  refreshToken: string;
  role?: {
    id?: string;
    roleName?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
  };
  updated_at?: string;
}
