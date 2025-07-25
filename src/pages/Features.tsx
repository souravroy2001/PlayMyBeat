import type { FEATURES } from "../utils/interface";
import svg from "../utils/svg";

export default function Features() {
  const features: FEATURES[] = [
    {
      icon: svg.arrowUp,
      title: "Democratic Music Selection",
      description:
        "Vote on upcoming tracks and shape the playlist. The crowd's favorites rise to the top.",
    },
    {
      icon: svg.lightning,
      title: "Instant Song Requests",
      description:
        "Skip the queue with premium requests. Your song plays next when you want it most.",
    },
    {
      icon: svg.threeBar,
      title: "Live Queue Management",
      description:
        "Watch the playlist evolve in real-time. See what's playing now and what's coming up next.",
    },
  ];

  const insights: FEATURES[] = [
    {
      icon: svg.whiteHeadPhone,
      title: "Paid Song Priority",
      description:
        "Guests can pay to instantly move their favorite song to the top of the queue — no waiting, no hassle.",
    },
    {
      icon: svg.analytics,
      title: "Real-Time Queue Analytics",
      description:
        "Track which songs are trending, how many votes each track has, and manage the queue with live insights.",
    },
    {
      icon: svg.phone,
      title: "Guest-Friendly Access",
      description:
        "No downloads needed — guests can vote or request songs using any browser on their phone.",
    },
    {
      icon: svg.calender,
      title: "Venue & Event Ready",
      description:
        "Perfect for cafés, clubs, and private events — switch between normal and event modes with custom rules and settings.",
    },
  ];

  return (
    <div className="w-full bg-[#0F0F1F]">
      {/* Header Section */}
      <div
        className="w-full flex flex-col justify-center items-center gap-6 px-4 py-20 text-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(246, 148, 43, 0.08) 0%, rgba(224, 64, 94, 0.08) 50%, rgba(152, 29, 160, 0.08) 100%)",
        }}
      >
        <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight">
          What Makes PlayMyBeat Special?
        </h1>
        <p className="text-lg md:text-xl text-[#9CA3AF] max-w-xl">
          Experience the future of interactive music requests with our
          innovative platform
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full flex flex-wrap justify-center items-start gap-6 px-4 py-20">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#151518] w-full sm:w-[80%] md:w-[45%] lg:w-[30%] p-6 min-h-[280px] flex flex-col gap-4 rounded-2xl shadow-[0_0_8px_rgba(255,255,255,0.15)] border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer"
          >
            <div dangerouslySetInnerHTML={{ __html: svg.arrowUp }} />
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-[#9CA3AF]">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Insights Section */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 px-4 py-20">
        {insights.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[70%] lg:w-[45%] xl:w-[40%] bg-[#1A1A2E] p-6 min-h-[180px] rounded-2xl flex items-center gap-5 border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer"
          >
            <div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-baseline gap-3">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-[#9CA3AF]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full flex flex-col justify-center items-center gap-10 px-4 py-24 text-center">
        <div className="max-w-2xl">
          <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug">
            Ready to Transform Your Music Experience?
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg mt-4">
            Join thousands of music enthusiasts who are already enjoying the
            future of music requests
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            className="text-white px-6 py-3 rounded-2xl"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
            }}
          >
            Get Started Free
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-2xl">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
