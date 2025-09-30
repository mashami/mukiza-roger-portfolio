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
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  type: "current" | "past" | "internship";
  responsibilities: string[];
  description?: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "Bank of Kigali",
    position: "Service Desk and Support Administrator",
    period: "Current",
    type: "current",
    description:
      "Responsible for providing essential IT support for banking systems, ensuring seamless operations of day-to-day banking services.",
    responsibilities: [
      "Provided first-line technical support for banking staff, addressing issues related to core banking systems, ATMs, payment gateways, online banking, and other banking software",
      "Diagnosed and troubleshot hardware, software, and network issues, escalating complex problems to higher-level support teams when necessary",
      "Managing Microsoft 365 user accounts, settings, and licensing through the Microsoft 365 admin center",
      "Troubleshooting and resolving email delivery issues, including message trace and mail flow diagnostics",
      "Setting up and configuring Outlook for end users across desktop and web platforms"
    ]
  },
  {
    company: "Inspired Generation BBC",
    position: "Team Manager",
    period: "Ongoing",
    type: "current",
    description:
      "Responsible for overseeing team operations, logistics, and administrative functions.",
    responsibilities: [
      "Served as the key liaison between players, coaches, league officials, and sponsors",
      "Maintained a strong focus on team efficiency, player welfare, and operational excellence",
      "Managed team operations both on and off the court"
    ]
  },
  {
    company: "Cher Le Bien Aime",
    position: "Computer Lab Technician",
    period: "2022-2023",
    type: "past",
    description:
      "Managed the daily operations of the computer lab, ensuring that all hardware and software were functioning properly.",
    responsibilities: [
      "Set up and maintained computers, printers, and peripheral devices in the computer lab",
      "Installed, configured, and updated software applications and operating systems",
      "Troubleshot hardware and software issues, providing timely resolution for technical problems",
      "Monitored lab usage and ensured a secure, safe, and orderly environment for students and staff",
      "Provided technical support to students, helping them navigate software and address technical issues during lab sessions"
    ]
  },
  {
    company: "ISIINE Training Center",
    position: "Professional Internship",
    period: "May - October 2022",
    type: "internship",
    description:
      "Successfully completed a 4-month intensive training program, covering essential aspects of programming, database management, and entrepreneurship.",
    responsibilities: [
      "Programming: Gained hands-on experience with Python, Java, JavaScript, developing projects that enhanced problem-solving abilities, debugging, and code optimization",
      "Database Management: Developed expertise in database design, querying, and management using SQL, MySQL, MongoDB",
      "Entrepreneurship: Acquired foundational knowledge in business planning, market research, financial forecasting, and operational strategies"
    ]
  },
  {
    company: "Pearson VUE (WEC OPS)",
    position: "Level One Proctor Support Agent",
    period: "June 2021 - April 2022",
    type: "past",
    description:
      "Worked as Proctor at Pearson VUE, supporting inbound calls from customers during LIVE proctoring sessions.",
    responsibilities: [
      "Provided first-line support for candidates during live exam sessions, ensuring smooth operation and troubleshooting of any technical or procedural issues",
      "Assisted in managing and resolving candidate queries, guiding them through the testing process",
      "Responded promptly to technical issues, such as system errors or connectivity problems",
      "Monitored test center environments remotely to ensure compliance with Pearson VUE's security protocols and testing standards"
    ]
  }
];

const getTypeColor = (type: string): string => {
  switch (type) {
    case "current":
      return "bg-green-100 text-green-800 border-green-200";
    case "past":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "internship":
      return "bg-blue-100 text-blue-800 border-blue-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getTypeText = (type: string): string => {
  switch (type) {
    case "current":
      return "Current Position";
    case "past":
      return "Previous Role";
    case "internship":
      return "Internship";
    default:
      return "Experience";
  }
};

export function ExperienceSection(): React.JSX.Element {
  return (
    <section>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Briefcase className="w-6 h-6" />
            Professional Experience
          </CardTitle>
          <CardDescription>
            Work history and professional achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">
                {index !== experienceData.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-full bg-gray-200" />
                )}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="font-semibold text-black text-lg">
                        {item.position}
                      </h3>
                      <Badge
                        variant="outline"
                        className={getTypeColor(item.type)}
                      >
                        {getTypeText(item.type)}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <p className="text-gray-700 font-medium">
                        {item.company}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    <div className="space-y-2">
                      <h4 className="font-medium text-black">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
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
