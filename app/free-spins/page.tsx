import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredHome from "@/components/FilteredHome";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";

export const metadata: Metadata = {
  title: "Free spins | Friendlybonuses",
  description: "Unlock the true potential of your gaming experience with our ultimate guide to Free Spins at Friendlybonuses. From no-deposit free spins to loyalty program rewards, our comprehensive guide covers the variety of ways you can enjoy this exciting casino feature. We break down the terms and conditions, wagering requirements, and the best games to maximize your free spins. Additionally, explore our curated list of reputable casinos offering generous free spin bonuses. Whether you're a beginner or a seasoned player, our guide is your key to understanding and leveraging free spins for greater winnings.",
};

export default async function FreeSpins() {
  return (
    <>
      <div className="page-bonuses">
        <PreviewBonuses />
        <TopBrands />
        <FilteredHome />
        <GuideSlotsPage />
      </div>
    </>
  );
}
