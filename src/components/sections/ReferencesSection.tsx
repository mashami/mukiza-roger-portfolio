"use client";

import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Phone, User } from "lucide-react";

interface Reference {
  name: string;
  phone: string;
  title: string;
  organization?: string;
}

const references: Reference[] = [
  {
    name: "Pascal Mugisha",
    phone: "0788329700",
    title: "Founder",
    organization: "Le Bien Aime"
  },
  {
    name: "Duke Ifufa",
    phone: "+18323357262",
    title: "Founder",
    organization: "Inspire Generation"
  },
  {
    name: "Rukirande Tuyishime Jean Claude",
    phone: "+250 788 328 312",
    title: "Professional Reference"
  },
  {
    name: "Ingabire Delice",
    phone: "+250 787 122 555",
    title: "Professional Reference"
  },
  {
    name: "Muheto Hodal",
    phone: "+250 782439775",
    title: "Manager",
    organization: "ISIINE Company"
  }
];

export function ReferencesSection(): React.JSX.Element {
  return (
    <section>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Users className="w-6 h-6" />
            Professional References
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((reference, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">
                      {reference.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="bg-blue-100 text-blue-800 border-blue-200"
                  >
                    {reference.title}
                  </Badge>

                  {reference.organization && (
                    <p className="text-sm text-gray-600 font-medium">
                      {reference.organization}
                    </p>
                  )}

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a
                      href={`tel:${reference.phone}`}
                      className="text-sm text-gray-700 hover:text-black transition-colors"
                    >
                      {reference.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-600 text-center">
              All references are available upon request for verification
              purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
