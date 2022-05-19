import { Post } from './Post'

export interface Data {
  status: string,
  totalResults: number,
  articles: Post[],
}