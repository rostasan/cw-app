export interface Roles {
  reader: boolean;
  author?: boolean;
  admin?: boolean;
}

export class User {
  email: string;
  uid: string;
  authenticated: boolean;
}
