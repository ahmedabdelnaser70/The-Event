export interface IClinic {
  location: any
  _id: number,
  __v: number,
  locaion: {
    city: string,
    street: string,
    building: number,
    [key: string]: any;
  }
  mobilePhone: string,
  doctors: [
    {
      firstName: string,
      lastName: string,
      specailty: {
        specailty: string
      }
    }
  ],
  availability: boolean
}
