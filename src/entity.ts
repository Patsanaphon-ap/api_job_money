import { DataSource } from "typeorm";
import {CountryExchangeRate} from "./entity/CountryDailyExchange"

export const entities = [
    CountryExchangeRate
  ];


export function setupRepositories(orm: DataSource) {
    return {
        countryExchangeRate: orm.getRepository(CountryExchangeRate),
    };
  }