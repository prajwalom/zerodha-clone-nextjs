
import { MarqueeDemo } from "@/components/magicui/marquee";
import { NavbarDemo } from "@/components/ui/resizable-navbar";
import { HeroParallaxDemo } from "@/components/ui/hero-parallax";
import FeaturesSectionDemo from "@/components/features-section-demo-3";

import React, { useRef, useState } from "react";

export default function HomePage() {
  return (
    <div>
      <NavbarDemo/>
      <HeroParallaxDemo/>
      <FeaturesSectionDemo/>
      <MarqueeDemo />
    </div>
  );
}