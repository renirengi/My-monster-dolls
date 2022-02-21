import { IFeedback } from "./feedback";

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
  feedback?: IFeedback[];
}

export interface ITextComment {
  textFeedback?: {[userId: string]: string};
}

