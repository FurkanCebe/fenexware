import PrimaryButton from "./PrimaryButton";

export default function PricingCard({
  title,
  price,
  features,
  isPopular,
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) {
  const PricingCardRow = ({ feature }: { feature: string }) => (
    <div className="flex items-center gap-2 text-gray-800">
      <div
        className="text-[#082020]"
        data-icon="Check"
        data-size="20px"
        data-weight="regular"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10px"
          height="10px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
      <span>{feature}</span>
    </div>
  );

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#c2efef] bg-[#effbfb] p-6 min-w-96">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-[#082020] text-base font-bold leading-tight">
            {title}
          </h1>
          {isPopular && (
            <p className="text-[#effbfb] text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-[#02b0b0] px-3 py-[3px] text-center">
              Popular
            </p>
          )}
        </div>
        <p className="flex items-baseline gap-1">
          <span className="text-[#082020] text-4xl font-black leading-tight tracking-[-0.033em]">
            {price}
          </span>
          <span className="text-[#3d5454] text-base font-bold leading-tight">
            /month
          </span>
        </p>
      </div>
      <PrimaryButton>
        {isPopular ? "Get Started" : "Try for Free"}
      </PrimaryButton>

      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <PricingCardRow key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}
