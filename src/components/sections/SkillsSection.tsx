"use client";

import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Wrench, Cloud } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Development",
    icon: Code,
    color: "bg-blue-100 text-blue-800 border-blue-200",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "ReactJS",
      "VueJS",
      "PHP",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Database & Cloud",
    icon: Cloud,
    color: "bg-green-100 text-green-800 border-green-200",
    skills: [
      "MySQL",
      "MongoDB",
      "AWS",
      "Azure",
      "Database Management Systems",
      "SQL"
    ]
  },
  {
    title: "Systems & Networks",
    icon: Wrench,
    color: "bg-purple-100 text-purple-800 border-purple-200",
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Cisco Router Configuration",
      "Cisco Switch Configuration",
      "Network Infrastructure",
      "Hardware Maintenance"
    ]
  },
  {
    title: "Microsoft Office Suite",
    icon: Users,
    color: "bg-orange-100 text-orange-800 border-orange-200",
    skills: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "SharePoint",
      "OneDrive",
      "Dynamics 365",
      "Microsoft Teams",
      "Skype"
    ]
  }
];

const softSkills: string[] = [
  "Strong analytical and problem-solving skills",
  "Excellent written and verbal communication",
  "Strong interpersonal skills and team collaboration",
  "Ability to work independently and manage multiple projects",
  "High attention to detail and accuracy",
  "Creativity and innovation in problem-solving",
  "Adaptability and flexibility to changing requirements",
  "Technical concept explanation to non-technical audiences"
];

const methodologies: string[] = [
  "Agile Development",
  "Waterfall Methodology",
  "Software Development Life Cycle (SDLC)",
  "Project Management"
];

export function SkillsSection(): React.JSX.Element {
  return (
    <section className="space-y-6">
      {/* Technical Skills */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Code className="w-6 h-6" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-black">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={category.color}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Development Methodologies */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Wrench className="w-6 h-6" />
            Development Methodologies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {methodologies.map((methodology, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-indigo-100 text-indigo-800 border-indigo-200"
              >
                {methodology}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Soft Skills */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Users className="w-6 h-6" />
            Professional Competencies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Skills */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Wrench className="w-6 h-6" />
            Additional Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-yellow-100 text-yellow-800 border-yellow-200"
            >
              Domestic Electricity
            </Badge>
            <Badge
              variant="outline"
              className="bg-red-100 text-red-800 border-red-200"
            >
              Computer Hardware Maintenance
            </Badge>
            <Badge
              variant="outline"
              className="bg-teal-100 text-teal-800 border-teal-200"
            >
              Network Device Configuration
            </Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
