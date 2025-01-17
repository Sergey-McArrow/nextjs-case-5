export function getRandomValueBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomStatusOrTypeValue(key: "status" | "type"): string {
  const values = {
    status: ["Rented", "Vacant"],
    type: ["Indoor", "Outdoor", "Climate Controlled"],
  };

  const randomIndex = Math.floor(Math.random() * values[key].length);
  return values[key][randomIndex];
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const parseCurrencyString = (value: string) => {
  return Number(value.replace(/[$,\s]/g, "")) || 0;
};

export const onNonNumericValueChange = (
  value: string,
  onChange: (value: number) => void,
) => {
  const numericValue = parseCurrencyString(value);
  onChange(numericValue);
};
