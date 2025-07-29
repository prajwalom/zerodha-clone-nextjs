import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { MarqueeDemo } from "@/components/magicui/marquee";

export default function HomePage() {
  return (
    <div>
      {/* Other content of your HomePage can go here */}
      <h1>Welcome to My Homepage</h1>
      <p>This is some content above the marquee.</p>

      {/* Add the MarqueeDemo component */}
      <MarqueeDemo />

      <p>This is some content below the marquee.</p>
    </div>
  );
}