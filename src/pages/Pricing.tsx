export default function Pricing() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[552px] flex flex-col justify-center items-center gap-15 bg-[#0A0A0B]">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-white text-[36px] font-bold">
            Choose Your Beat Plan
          </h1>
          <p className="text-[#9CA3AF] text-[18px]">
            Get unlimited access to premium music with our flexible credit packs
          </p>
        </div>

        <div
          className="h-[228px] w-[448px] bg-[#151518]"
          style={{
            boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
          }}
        ></div>
      </div>
    </div>
  );
}
