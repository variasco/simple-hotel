import { HotelsRequest } from "features/SearcHotels";

export interface Hotel {
  stars: number;
  locationId?: number;
  hotelId?: number;
  pricePercentile?: PricePercentile;
  priceAvg: number;
  hotelName?: string;
  priceFrom?: number;
  location?: Location;
}

export interface HotelSchema {
  search: HotelsRequest;
  hotels: Hotel[];
  isLoading?: boolean;
  error?: any;
}

export interface HotelExtended extends Omit<Hotel, "location">, HotelsRequest {}

export interface PricePercentile {
  "3"?: number;
  "10"?: number;
  "35"?: number;
  "50"?: number;
  "75"?: number;
  "99"?: number;
}

export interface Location {
  state?: any;
  country?: string;
  name?: string;
  geo?: Geo;
}

export interface Geo {
  lat?: number;
  lon?: number;
}
