import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredProviders from "@/components/providers/FilteredProviders";
import Providers from "@/components/providers/Providers";
import GuideSlotsPage from "@/components/GuideSlotsPage";


export const metadata: Metadata = {
  title: "Game Providers | Friendlybonuses",
  description: "Navigate the extensive world of casino game providers with our definitive guide at Friendlybonuses. We take you behind the scenes, exploring the leading names in the industry as well as emerging developers shaping the future of online gaming. Our comprehensive guide covers their specialties, most popular titles, unique features, and innovative gameplay mechanics. Also, discover a curated selection of trustworthy casinos where you can experience games from these top providers. Whether you're a newbie or a seasoned gamer, our guide equips you with the essential knowledge to choose the right provider for your gaming preferences.",
};

export default async function Casinos() {
  return (
    <div className="page-bonuses">
      <Providers />
      {/* <TopBrands /> */}
      <FilteredProviders />
      <GuideSlotsPage />
    </div>
  );
}
