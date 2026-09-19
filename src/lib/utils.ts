import { Property } from "@/types/property";

export function formatPrice(property: Property): string {
  if (property.price === null) return "Price on Request";
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);
  return `${formatted} / ${property.priceUnit.replace("per ", "")}`;
}

export function formatSpec(value: number | null, unit: string): string {
  if (value === null) return "TBD";
  return `${value.toLocaleString()} ${unit}`;
}
