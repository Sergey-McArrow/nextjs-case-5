import { RentRollTable } from "@/components/rent-roll-table";

const RentRollPage = () => {
  return (
    <section className="container mx-auto p-8">
      <h1 className="pb-6 text-2xl font-bold">Rent Roll</h1>
      <RentRollTable />
    </section>
  );
};

export default RentRollPage;
