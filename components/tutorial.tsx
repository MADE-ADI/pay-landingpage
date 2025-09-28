"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowLeft, Download, Chrome, Settings, FileX } from "lucide-react";

export function Tutorial() {
  const [hovering, setHovering] = useState(false);
  
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Download Extension",
      description: "Download the PayCrypto extension zip file from our official website"
    },
    {
      icon: <Chrome className="w-6 h-6" />,
      title: "Open Chrome Extensions",
      description: "Type chrome://extensions/ in your address bar or go to Chrome Menu > Extensions > Manage Extensions"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Enable Developer Mode",
      description: "Toggle on 'Developer mode' in the top right corner of the extensions page"
    },
    {
      icon: <FileX className="w-6 h-6" />,
      title: "Load Unpacked Extension",
      description: "Click 'Load unpacked' and select the extracted PayCrypto folder"
    }
  ];

  return (
    <div className="relative flex flex-col min-h-svh">
      <GL hovering={hovering} />

      <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 px-4 overflow-y-auto">
        {/* Back Button */}
        <div className="w-full max-w-4xl mb-8">
          <Link href="/">
            <Button 
              size="sm"
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Pill className="mb-6 bg-orange-gradient text-black font-semibold">INSTALLATION GUIDE</Pill>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-8">
            Install{" "}
            <i className="font-light underline text-orange-gradient">EquityPay</i> Extension
          </h1>
          <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance max-w-[540px] mx-auto">
            Follow these simple steps to install the EquityPay browser extension from a zip file
          </p>
        </div>

        {/* Steps */}
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-orange-gradient rounded-2xl p-8 hover:bg-white/10 hover:shadow-orange transition-all duration-300"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-gradient flex items-center justify-center text-black">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-sm font-mono text-foreground/60">
                      STEP {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-sentient mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="w-full max-w-4xl mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-sentient mb-4 text-white">
              Important Notes
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>Make sure to extract the zip file before loading the extension</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>Developer mode must be enabled to install unpacked extensions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>The extension will appear in your Chrome toolbar after successful installation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>You may need to pin the extension for easy access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <Link href="/#contact">
            <Button
              className="mb-4 bg-orange-gradient hover:shadow-orange border-0 text-black font-semibold"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Need Help? Contact Support
            </Button>
          </Link>
          <p className="font-mono text-sm text-foreground/60">
            Having trouble? We're here to help you get started
          </p>
        </div>
      </div>
    </div>
  );
}