export interface Video {
  createdAt?: string | Date;
  description: string;
  title: string;
  updatedAt?: string | Date;
  url: string;
  _id?: string;
}

export interface Params {
  [key: string]: string;
  id: string;
}
