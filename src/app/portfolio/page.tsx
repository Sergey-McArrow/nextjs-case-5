import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { PropertyItem } from "@/components/property-item";

export const PortfolioPage = async () => {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="container max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Portfolio</h1>
        <Link href="/property-details">
          <Button>
            <Plus className="mr-2" />
            Add Property
          </Button>
        </Link>
      </div>
      {properties?.map((property) => (
        <PropertyItem key={property.id} prop={property} />
      ))}
    </div>
  );
};

export default PortfolioPage;
