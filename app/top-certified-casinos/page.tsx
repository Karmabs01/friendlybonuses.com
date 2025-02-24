import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCasinos from "@/components/casinos//FilteredCasinos";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import TopCertifiedCasinos from "@/components/casinos/TopCertifiedCasinos";

export const metadata: Metadata = {
  title: "Top Certified Casinos | Friendlybonuses",
  description: "Explore the crème de la crème of the gaming industry with our list of Top Certified Casinos at Friendlybonuses. We've scrutinized countless platforms to bring you a curated list of casinos that are not only exciting but also 100% secure and certified. With rigorous standards for quality, fair play, and customer service, these casinos set the benchmark in the industry. Get ready for a trustworthy and exhilarating gaming experience with our handpicked selections!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <TopCertifiedCasinos />
      {/* <TopBrands /> */}
      <FilteredCasinos />
      <GuideSlotsPage />
    </div>
  );
}
