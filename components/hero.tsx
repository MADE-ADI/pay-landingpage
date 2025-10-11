"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Monitor, Smartphone } from "lucide-react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [showMobileDialog, setShowMobileDialog] = useState(false);

  const handleMobileInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMobileDialog(true);
  };

  return (
    <div className="relative flex flex-col h-svh">
      <GL hovering={hovering} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <Pill className="mb-4 sm:mb-6 bg-orange-gradient text-black font-semibold text-xs sm:text-sm">
          BETA RELEASE
        </Pill>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sentient leading-tight">
          <span className="text-orange-gradient">Pay</span>{" "}
          <i className="font-light underline text-orange-gradient">everything</i> with crypto
        </h1>
        <p className="font-mono text-xs sm:text-sm md:text-base text-foreground/60 mt-6 sm:mt-8 max-w-[90%] sm:max-w-[440px] mx-auto">
          The browser extension that makes cryptocurrency payments simple, fast, and secure for any online purchase
        </p>

        {/* Desktop Install Button */}
        <Link className="contents max-sm:hidden" href="/equity-pay.zip">
          <Button
            className="mt-10 sm:mt-14 bg-orange-gradient hover:shadow-orange border-0 text-black font-semibold"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)} 
          >
            [Install Now]  
          </Button>
        </Link>

        {/* Mobile Install Button */}
        <Button
          size="sm"
          className="mt-10 sm:hidden bg-orange-gradient hover:shadow-orange border-0 text-black font-semibold"
          onClick={handleMobileInstallClick}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          [Install Now]
        </Button>
      </div>

      {/* Mobile Installation Dialog */}
      <Dialog open={showMobileDialog} onOpenChange={setShowMobileDialog}>
        <DialogContent className="max-w-[90%] sm:max-w-md bg-gradient-to-br from-black to-orange-950/20 border-orange-gradient text-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl text-orange-gradient">
              <Monitor className="w-6 h-6" />
              Desktop Installation Required
            </DialogTitle>
            <DialogDescription className="text-foreground/80 text-left pt-4 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <Smartphone className="w-5 h-5 text-orange-gradient mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    Browser extensions can only be installed on desktop computers.
                  </p>
                  <p className="text-sm">
                    To install EquityPay, please visit this page from your desktop browser (Chrome, Firefox, or Edge).
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-foreground">How to install:</p>
                <ol className="list-decimal list-inside space-y-1 pl-2 text-foreground/70">
                  <li>Open this page on your desktop computer</li>
                  <li>Click the "Install Now" button</li>
                  <li>Follow the installation instructions</li>
                  <li>Start paying with crypto!</li>
                </ol>
              </div>

              <div className="pt-2 text-xs text-foreground/60 italic">
                Need help? Visit our{" "}
                <Link href="/tutorial" className="text-orange-gradient hover:underline font-semibold" onClick={() => setShowMobileDialog(false)}>
                  installation tutorial
                </Link>
                {" "}for detailed instructions.
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
