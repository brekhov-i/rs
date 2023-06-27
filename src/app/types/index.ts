export interface IFilters {
  countries: string[];
  types: string[];
  rates: number[];
  colReviews: number;
  price: {
    min: number,
    max: number
  };
}