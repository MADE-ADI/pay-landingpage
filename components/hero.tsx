"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="relative flex flex-col h-svh">
      <GL hovering={hovering} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <Pill className="mb-6 bg-orange-gradient text-black font-semibold">BETA RELEASE</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          <span className="text-orange-gradient">Pay</span>{" "}
          <i className="font-light underline text-orange-gradient">everything</i> with crypto
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 mt-8 max-w-[440px] mx-auto">
          The browser extension that makes cryptocurrency payments simple, fast, and secure for any online purchase
        </p>

        <Link className="contents max-sm:hidden" href="/equity-pay.zip">
          <Button
            className="mt-14 bg-orange-gradient hover:shadow-orange border-0 text-black font-semibold"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)} 
          >
            [Install Now]  
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#contact">
          <Button
            size="sm"
            className="mt-14 bg-orange-gradient hover:shadow-orange border-0 text-black font-semibold"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Install Now]
          </Button>
        </Link>
      </div>
    </div>
  );
}
