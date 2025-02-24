import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCasinos from "@/components/casinos//FilteredCasinos";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import NewestCasinos from "@/components/casinos/NewestCasinos";

export const metadata: Metadata = {
  title: "Newest Casinos | Friendlybonuses",
  description: "Stay ahead of the curve with our constantly updated list of the newest casinos in the industry at Friendlybonuses. Our guide provides you with a first look at fresh platforms, innovative features, and generous bonuses that new casinos have to offer. We rigorously evaluate and review each entry to ensure they meet high standards for gameplay, security, and customer service. Don't miss out on the opportunity to experience the latest in online gaming—explore our list of the newest casinos and start your next thrilling gaming adventure!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <NewestCasinos />
      {/* <TopBrands /> */}
      <FilteredCasinos />
      <GuideSlotsPage />
    </div>
  );
}
