import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {/* <Radio.Group
        options={options}
        onChange={(e) => setIsYearly(e.target.value === "yearly")}
        value={isYearly ? "yearly" : "monthly"}
        optionType="button"
      /> */}
      <PricingCard
        title="Essential"
        price="$19.99"
        features={["SFX Algo", "Price Action Toolkit"]}
      />
      <PricingCard
        title="Premium"
        price="$29.99"
        isPopular
        features={["SFX Algo", "24/7 Support"]}
      />
      <PricingCard
        title="Pro"
        price="$39.99"
        isPopular
        features={["MTF Zones", "Price Action Toolkit", "24/7 Support"]}
      />
    </div>
  );
}
