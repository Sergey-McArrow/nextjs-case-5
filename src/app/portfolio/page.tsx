import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { PropertyItem } from "@/components/property-item";

export default async function PortfolioPage() {
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
      <p className="mb-4 flex items-center gap-2 text-muted-foreground">
        List of properties
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dark text-white">
          {properties?.length}
        </span>
      </p>

      {properties?.map((property) => (
        <PropertyItem key={property.id} prop={property} />
      ))}
    </div>
  );
}
