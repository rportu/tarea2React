import IPhotos from "./IPhotos";

export default interface IAmbuls {
    id: number;
  
    photo?: IPhotos[];
    title:string;
  }