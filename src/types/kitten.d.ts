export interface IGetAKittenRequest {
  width: number;
  height: number;
}

export type IKitten = {image: {uri: string} & IGetAKittenRequest; name: string};
