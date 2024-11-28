import { cn } from "@/lib/utils";
import { Card, CardContent } from "@components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

export default async function Page() {
  return (
    <ContentContainer>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col gap-2 p-6">
            <Link href="./docs/tester/about-pep-10">
              <h3 className="text-xl font-bold">Tester</h3>
            </Link>
          </CardContent>
        </Card>
      </div>
    </ContentContainer>
  );
}

const ContentContainer = ({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gradient";
}) => {
  const variantMapping = {
    primary: "",
    secondary: "",
    gradient: "bg-gradient-to-br from-purple-900 via-purple-800 to-amber-700 opacity-90",
  };

  return (
    <div className={cn("w-full flex flex-col justify-center items-center p-8", variantMapping[variant])}>
      <div className="container ">{children}</div>
    </div>
  );
};
