export interface IFeedback {
  id: number;
  userId: number;
  dollId: number;
  starRating?: number;
  hair?: {[key: string]: boolean}[];
  body?: {[key: string]: boolean}[];
  accessories?: {[key: string]: boolean}[];
  text?: string;
}
