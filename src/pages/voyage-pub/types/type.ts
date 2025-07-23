export interface Item {
  id: number;
  title: string;
  date: string;
  image: string;
}

export interface Article2 {
  id: number;
  title: string;
  date: string;
  image: string;
  content: Item[];
}
export interface content {
  image: string;
  excerpt: Array<string>;
}
export interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: content[];
}
