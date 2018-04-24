export interface Car {
  title: string;
  problems: Problem[];
  benefits: Benefits[];
  loading: boolean;
  compareTo: string;
}

export interface Problem {
  [key: string]: {
    description: string;
    img: string;
    cost: string;
  };
}

export interface Benefits {
  [key: string]: {
    description: string;
    img: string;
    price: string;
  };
}
