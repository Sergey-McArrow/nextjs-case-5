import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">
            Tree Solutions Property Management
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your properties with our easy-to-use platform
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/property-details">
            <Button size="lg">Add New Property</Button>
          </Link>

          <Link href="/portfolio">
            <Button size="lg">View Portfolio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
