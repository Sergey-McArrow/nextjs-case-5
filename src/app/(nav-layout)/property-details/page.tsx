import { PropertyForm } from "@/components/property-form";

export default function PropertyDetailsPage() {
  return (
    <div className="container max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Property Details</h1>
      <PropertyForm />
    </div>
  );
}
