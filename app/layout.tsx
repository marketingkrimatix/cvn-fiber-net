import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CVN Fiber Net | High-Speed Internet in Tadban, Hyderabad",
  description: "Get fast, stable and affordable CVN Fiber Net service in Tadban, Hyderabad. Explore unlimited internet, OTT and superfast fiber plans starting at ₹399.",
  openGraph: { title: "CVN Fiber Net Service", description: "Fast, stable and affordable fiber internet in Tadban, Hyderabad.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const business = {"@context":"https://schema.org","@type":["LocalBusiness","InternetServiceProvider"],name:"CVN Fiber Net Service",slogan:"Apne Area Ka Apna Wi-Fi",telephone:["+91 8886448989","+91 8096448989"],address:{"@type":"PostalAddress",streetAddress:"Ali Bagh New Road",addressLocality:"Hyderabad",addressRegion:"Telangana",addressCountry:"IN"},areaServed:["Ali Bagh","Kalapathar","New Road","Jahanuma","Modern Town Colony","Sattar Bagh","Phool Bagh","Chune Ki Bhatti","Misri Gunj","Chandulal Baradari","Tadbun","Zoo Park","Mochi Colony","Khaja Pahadi","Eidgah Tadbun","B.N.K. Colony","Nizam Colony","Makkah Colony","Ranjan Colony","Tekri"]};
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem('cvn-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}`}} /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business)}} /></head><body>{children}</body></html>;
}
