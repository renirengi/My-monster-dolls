export interface IDoll {
  value(value: any): void;
  character?: string[];
  description: string[];
  galleryImagesFileNames: string[];
  galleryImagesLinks: string[];
  gender?: string;
  id: number;
  modelNumber: string;
  series?: string;
  type?: string;
  year: number;
  exclusive?: string;
  reissue?: boolean;
  video?: string;
  promo?: string;
  feedback?: IFeedback;
  textComment?: ITextComment;
}

export interface IFeedback {
  starRating?: {[userId: string]: number};
  hair?: {[userId: string]: number};
  body?: {[userId: string]: number};
  accessories?: {[userId: string]: number};
}

export interface ITextComment {
  textFeedback?: string[];
}
