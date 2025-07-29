
import { MarqueeDemo } from "@/components/magicui/marquee";
import { NavbarDemo } from "@/components/ui/resizable-navbar";
import { HeroParallaxDemo } from "@/components/ui/hero-parallax";

import React, { useRef, useState } from "react";

export default function HomePage() {
  return (
    <div>
      <NavbarDemo/>
      <HeroParallaxDemo/>
      <MarqueeDemo />
    </div>
  );
}