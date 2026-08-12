import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CVN Fiber Net | High-Speed Internet in Tadban, Hyderabad",
  description: "Get fast, stable and affordable CVN Fiber Net service in Tadban, Hyderabad. Explore unlimited internet, OTT and superfast fiber plans starting at ₹399.",
  openGraph: { title: "CVN Fiber Net Service", description: "Fast, stable and affordable fiber internet in Tadban, Hyderabad.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
