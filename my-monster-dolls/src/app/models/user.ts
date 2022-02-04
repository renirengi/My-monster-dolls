export interface IUser {
  id: number;
  email: string;
  name: string;
  avatar?: string;
  personalData: IUserPersonalData;
  password: string;
  rights: UserRights;
  collection?: IUserCollection;
}

export interface IUserPersonalData {
  country?: string;
  birthday: Date;
  phone?: string;
  realName?: string;
  about?: string;
}

export interface IUserCollection {
  wanted?: number[];
  own?: number[];
  sell?: IUserLotData[];
}

export interface IUserLotData {
  itemId: number;
  price?: number;
  description: string;
  photos: string[];
}

export enum UserRights {
  admin,
  moderator,
  collector,
  сhild,
  nobody
}
