"use client";

import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, User } from "lucide-react";

export function PersonalInfo(): React.JSX.Element {
  return (
    <section>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <User className="w-6 h-6" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-black">Nationality</p>
                  <p className="text-gray-700">Rwandese</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-black">Phone</p>
                  <a
                    href="tel:+250787122948"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    (+250) 787 122 948
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a
                    href="mailto:mukizaroger8@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    mukizaroger8@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
