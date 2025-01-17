import { OwnershipStructureForm } from "@/components/ownership-structure-form";

const OwnershipStructurePage = () => {
  return (
    <div className="container max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">
        Ownership Structure and returns
      </h1>
      <OwnershipStructureForm />
    </div>
  );
};
export default OwnershipStructurePage;
