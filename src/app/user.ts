export class User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class UserData {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
