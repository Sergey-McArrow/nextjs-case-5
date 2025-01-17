import { FinancingForm } from "@/components/financing-form";

export default function FinancingPage() {
  return (
    <div className="container mx-auto space-y-8 p-8">
      <h1 className="pb-4 text-2xl font-bold">Financing</h1>
      <FinancingForm />
    </div>
  );
}
