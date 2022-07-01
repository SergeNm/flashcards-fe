export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface Operation {
  value?: string | number,
  operator?: '*' | '/' | '-' | '+' | '.' | 'del' | 'reset' | '=';
}
export interface Button {
  label: string;
}

export interface ButtonCalc extends Button {
  operation?: Operation;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
}

export interface InputCalc {
  value: number;
  // handleAdd: (e: React.FormEvent) => void;
}

export interface Theme {
  themeName: 'light' | 'dark'
}

export interface Country {
  name: string,
  image: string,
  capital: string,
  region: string,
  area: string | number
}

export interface Todo {
  title: string,
  id: number,
  userId: number,
  completed: boolean,
}

export interface User {
  login: string;
  avatar_url: string;
  type: string | undefined;
}

export interface UserDetail {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  followers: number;
  public_repos: number;
  following: number;
  bio: string;
  company?: string;
  hireable?: boolean;
  email?: string;
  blog?: string;
}

export interface UserName {
  login: string;
}
export interface SearchQuery {
  query: string;
}

export interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks: number;
  language: string;
  html_url: string;
}

export interface User2 {
  id?: number
  name?: string
  email?: string
  password?: string
}

export interface Category {
  id: number
  name: string
  flashCards?: [FlashCard]
}

 export interface FlashCard {
  id: number;
  title: string;
  question?: string;
  answer?: string;
  hardness?: string;
  createdAt?: Date;
  categoryId?: number;
  createdBy?: User2
  category?: Category
  readers?: [User2]
}
