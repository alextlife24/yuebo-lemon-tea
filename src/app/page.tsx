import { Hero } from "@/components/Hero";
import { SignatureDrink } from "@/components/SignatureDrink";
import { Features } from "@/components/Features";
import { WhyBomb } from "@/components/WhyBomb";
import { OtherProducts } from "@/components/Products";
import { Travel } from "@/components/Travel";
import { StoresSection } from "@/components/Stores";
import { GroupOrder } from "@/components/GroupOrder";
import { Buzz } from "@/components/Buzz";
import { SocialGrid } from "@/components/SocialGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureDrink />
      <Features />
      <WhyBomb />
      <OtherProducts />
      <Travel />
      <StoresSection />
      <GroupOrder />
      <Buzz />
      <SocialGrid />
    </>
  );
}
