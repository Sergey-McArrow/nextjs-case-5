import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

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
      {/* Portfolio content will go here */}
      <pre>{JSON.stringify(properties, null, 2)}</pre>
    </div>
  );
};

export default PortfolioPage;
