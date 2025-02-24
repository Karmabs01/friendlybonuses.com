import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Muchbetter from "@/components/payments/Muchbetter";

export const metadata: Metadata = {
  title: "Muchbetter payments | Friendlybonuses",
  description: "Discover the innovative world of MuchBetter payments through our comprehensive guide at Friendlybonuses. Designed for the mobile age, MuchBetter offers fast, secure, and user-friendly transactions tailored for the modern casino player. Our detailed guide walks you through setting up your MuchBetter account, managing transactions, and understanding fees. We also feature a handpicked list of top casinos that accept MuchBetter, ensuring that your gaming experience is as fluid as it is secure. Elevate your gaming by making the most of MuchBetter payments with our expert guidance!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Muchbetter />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
