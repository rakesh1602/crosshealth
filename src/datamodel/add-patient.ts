export class PersonModel{
    prefix? : string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    dob?:Date;
    gender?:string;
    // role? : string;
    account?:AccountModel[];
}

export class AccountModel{
        emailId?:string;
        password? :string;
}
    
export class Gender{
    gender?:string;
  // target: any;
}

export class Prefix{
  prefix?:string;
// target: any;
}