export interface CompanyInterface {
  name: string;
  logos: string[];
  description: string;
  branches: Branch[];
  location: string;
  addres: string;
  email: string;
  phone: string[];
  web: null | string;
  bgColor: string;
}

export interface Branch {
  name: string;
  addres: string;
  location: string;
}
