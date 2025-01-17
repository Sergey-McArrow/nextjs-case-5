import {
  getRandomStatusOrTypeValue,
  getRandomValueBetween,
} from "./lib/helpers";

export const navItems = [
  "property-details",
  "rent-roll",
  "income-expenses",
  "financing",
  "ownership-structure",
] as const;

export const defaultPropertyFormData = {
  propertyName: "Storage A",
  addressLine: "3549 102nd Avenue Cranbrook, BC V1C 2R9",
  country: "Canada",
  city: "Cranbrook",
  zipCode: "V1C 2R9",
  closeDate: new Date().toISOString(),
} as const;

export const rentRollData = Array.from({ length: 50 }, (_, index) => ({
  id: `E${index + 1}`,
  type: getRandomStatusOrTypeValue("type"),
  rent: getRandomValueBetween(100, 200),
  width: getRandomValueBetween(10, 20),
  length: getRandomValueBetween(20, 30),
  marketRent: getRandomValueBetween(50, 100),
  status: getRandomStatusOrTypeValue("status"),
  sqftSqm: getRandomValueBetween(50, 100),
}));

export const ITEMS_PER_PAGE = 10;
