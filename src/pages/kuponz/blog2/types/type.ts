export interface Item {
  id: number;
  title: string;
  date: string;
  image: string; // 确保 image 是字符串（URL）
}

export interface Article2 {
  id: number;
  title: string;
  date: string;
  image: string; // 确保 image 是字符串（URL）
  content: Item[]; // content 必须是 Item 类型的数组
}
export interface content {
  image: string;
  excerpt: Array<string>;
}
export interface Article {
  id: number;
  title: string;
  date: string;
  image: string; // 确保 image 是字符串（URL）
  excerpt: string; // content 必须是 Item 类型的数组
  content: content[];
}
