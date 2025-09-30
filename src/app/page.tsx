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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  User,
  GraduationCap,
  Briefcase,
  Code,
  Users,
  Calendar,
  ExternalLink,
  Download
} from "lucide-react";
import { PersonalInfo } from "@/components/sections/PersonalInfo";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { downloadFile } from "@/utils/helper";

export default function Portfolio(): React.JSX.Element {
  const handleDownloadCv = async () => {
    const fileName = "mukiza rogerCv";
    const contentType = "application/pdf";

    try {
      const response = await fetch("/mukiza rogerCv.pdf");
      const pdfBlob = await response.blob();

      downloadFile(pdfBlob, fileName, contentType);
    } catch (error) {
      console.error("Error fetching or downloading the PDF file:", error);
    }
  };

  const handleContactEmail = (): void => {
    window.location.href = "mailto:mukizaroger8@gmail.com";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">MUKIZA ROGER</h1>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadCv}
                className="text-black border-black hover:bg-black hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                size="sm"
                onClick={handleContactEmail}
                className="bg-black text-white hover:bg-gray-800"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-8 pb-12">
          <div className="w-32 h-32 bg-black rounded-full mx-auto flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              MUKIZA ROGER
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Information Technology Professional
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Self-driven and detail-oriented IT professional with extensive
              experience in network infrastructure, programming, and system
              administration. Passionate about leveraging technology to solve
              complex problems and drive innovation.
            </p>
          </div>
        </section>

        {/* Personal Information */}
        <PersonalInfo />

        {/* Education Section */}
        <EducationSection />

        {/* Professional Experience */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* References */}
        <ReferencesSection />

        {/* Footer */}
        <footer className="text-center py-8 border-t">
          <p className="text-gray-600">
            © 2024 Mukiza Roger. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "I hereby declare that the information given above is true to the
            best of my knowledge."
          </p>
        </footer>
      </main>
    </div>
  );
}
