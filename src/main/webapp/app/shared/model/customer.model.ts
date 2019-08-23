export interface ICustomer {
  id?: number;
  name?: string;
  addr?: string;
  contactNumber?: number;
}

export class Customer implements ICustomer {
  constructor(public id?: number, public name?: string, public addr?: string, public contactNumber?: number) {}
}
