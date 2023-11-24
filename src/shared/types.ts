export enum SelectedPage { // note: enums doesnt exist in build time but only in compile time
    Home = "home",
    Benefits = "benefits",
    Classes = "classes",
    ContactUs = "contactus",
  }

  export type BenefitType = {
    icon: JSX.Element;
    title: string;
    description: string;
  };

  export type ClassType = {
    name: string;
    description?: string;
    image: string;
  };