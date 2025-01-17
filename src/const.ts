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
