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
