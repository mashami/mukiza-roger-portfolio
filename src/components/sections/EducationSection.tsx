"use client";

import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  level: "bachelors" | "diploma" | "certificate";
}

const educationData: EducationItem[] = [
  {
    institution: "University of Kigali (UOK)",
    degree: "Bachelor's degree in Information Technology",
    period: "2023-2025",
    level: "bachelors"
  },
  {
    institution: "Integrated Polytechnic Regional College Kigali (IPRC Kigali)",
    degree: "Advanced diploma in Information Technology",
    period: "2019-2022",
    level: "diploma"
  },
  {
    institution: "Integrated Polytechnic Regional College Ngoma",
    degree: "High school degree in Computer Science",
    period: "2016-2018",
    level: "certificate"
  }
];

const getLevelColor = (level: string): string => {
  switch (level) {
    case "bachelors":
      return "bg-green-100 text-green-800 border-green-200";
    case "diploma":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "certificate":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getLevelText = (level: string): string => {
  switch (level) {
    case "bachelors":
      return "Bachelor's Degree";
    case "diploma":
      return "Advanced Diploma";
    case "certificate":
      return "Certificate";
    default:
      return "Qualification";
  }
};

export function EducationSection(): React.JSX.Element {
  return (
    <section>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <GraduationCap className="w-6 h-6" />
            Academic Record
          </CardTitle>
          <CardDescription>
            Educational qualifications and academic achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                {index !== educationData.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-16 bg-gray-200" />
                )}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="font-semibold text-black text-lg">
                        {item.degree}
                      </h3>
                      <Badge
                        variant="outline"
                        className={getLevelColor(item.level)}
                      >
                        {getLevelText(item.level)}
                      </Badge>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
