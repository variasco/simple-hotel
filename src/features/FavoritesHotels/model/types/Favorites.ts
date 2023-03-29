import { Hotel } from "entities/HotelsList";
import { HotelsRequest } from "features/SearcHotels";

export interface Favorite
  extends Omit<Hotel, "pricePercentile" | "priceFrom" | "locationId" | "location">,
    HotelsRequest {}

export interface FavoriteSchema {
  hotelName: string;
  date: string;
  days: string;
  stars: number;
  priceAvg: number;
  hotelId: number;
}
