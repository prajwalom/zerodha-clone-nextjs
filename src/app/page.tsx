
import { MarqueeDemo } from "@/components/magicui/marquee";
import { NavbarDemo } from "@/components/ui/resizable-navbar";

import React, { useRef, useState } from "react";

export default function HomePage() {
  return (
    <div>
      <NavbarDemo/>
      <MarqueeDemo />
    </div>
  );
}