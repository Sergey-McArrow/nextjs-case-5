import { RentRollTable } from "@/components/rent-roll-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RentRollPage = () => {
  return (
    <section className="container mx-auto p-8">
      <h1 className="pb-6 text-2xl font-bold">Rent Roll</h1>
      <RentRollTable />
      <div className="flex justify-end gap-4">
        <Link href="/property-details">
          <Button variant="outline">Back</Button>
        </Link>

        <Link href="/income-expenses">
          <Button>Continue</Button>
        </Link>
      </div>
    </section>
  );
};

export default RentRollPage;
