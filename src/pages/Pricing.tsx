import NormalBlurText from "../animations/NormalBlurText";
import type { PRICE_CARD } from "../utils/interface";
import svg from "../utils/svg";

export default function Pricing() {
  const priceCard: PRICE_CARD[] = [
    {
      title: "Starter Pack",
      price: 99,
      value: "1 Credit",
      benefit: [
        "Request 1 song with paid priority",
        "Skip the regular voting queue",
        "Instantly place your song next",
        "Smooth, ad-free guest experience",
      ],
    },
    {
      title: "Premium Pack",
      price: 399,
      value: "5 Credits",
      benefit: [
        "Request up to 5 songs with paid priority",
        "Outrank all standard votes",
        "Get up to 2 immediate song plays per visit",
        "Faster track approval at busy venues",
      ],
    },
    {
      title: "VIP Pack",
      price: 699,
      value: "10 Credits",
      benefit: [
        "Request up to 10 songs with top priority",
        "Guaranteed next song placement at any time",
        "Enjoy the highest level of voting power",
        "Exclusive perks like shoutouts and recognition",
      ],
    },
  ];

  const frequently = [
    {
      title: "How do credits work?",
      description:
        "Each credit lets you request one song with paid priority at any participating venue. Credits never expire and jump you to the top of the queue.",
    },
    {
      title: "Do credits expire?",
      description:
        "No — your credits never expire. You can use them anytime at any PlayMyBeat venue without worrying about losing them.",
    },
    {
      title: "Can I upgrade my plan or buy more credits?",
      description:
        "Yes! You can add new credits at any time. They simply add to your balance and remain available forever.",
    },
    {
      title: "What payment methods do you support?",
      description:
        "We accept all major credit and debit cards, UPI, Paytm, Apple Pay, and Google Pay. Payments are secure and instant.",
    },
    {
      title: "How do song votes work?",
      description:
        "Anyone can vote for a song for free. Paid requests with credits jump to top priority so they play next.",
    },
    {
      title: "Is PlayMyBeat available at my favorite venue?",
      description:
        "PlayMyBeat is available at a growing number of cafés, bars, restaurants, lounges, and coworking spaces.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0A0A0B] flex flex-col items-center px-4 py-10">
      {/* Heading */}
      <div className="text-center flex items-center flex-col mb-15 mt-10">
        <NormalBlurText
          text="Choose Your Beat Plan"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => console.log("Animation Complete")}
          className="text-white text-3xl md:text-4xl font-bold mb-2"
        />
        {/* <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Choose Your Beat Plan
        </h1> */}
        <p className="text-[#9CA3AF] text-base md:text-lg">
          Get unlimited access to premium music with our flexible credit packs
        </p>
      </div>

      {/* Credits Status */}
      <div
        className="bg-[#151518] w-full max-w-md p-6 rounded-2xl flex flex-col items-center gap-4 mb-12 border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer"
        style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0 0 8px 0" }}
      >
        <div
          className="w-32 h-32 rounded-full flex justify-center items-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
          }}
        >
          <div className="bg-[#151518] w-[126px] h-[126px] flex flex-col items-center justify-center rounded-full">
            <h3 className="text-4xl gradient_text">7/10</h3>
            <p className="text-sm text-[#9CA3AF]">Credits</p>
          </div>
        </div>
        <p className="text-sm text-[#9CA3AF]">Credits refresh monthly</p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap gap-6 w-full max-w-6xl justify-center my-16">
        {priceCard.map((item, index) => (
          <div
            key={index}
            className="bg-[#151518] w-full sm:w-[90%] md:w-[30%] p-6 flex flex-col gap-6 rounded-2xl border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer"
            style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0 0 8px 0" }}
          >
            <div>
              <h1 className="text-white mb-2 text-xl font-bold">
                {item.title}
              </h1>
              <p className="text-white mb-1 text-3xl font-extrabold">
                ₹{item.price}
              </p>
              <p className="text-[#9CA3AF] text-sm">{item.value}</p>
            </div>
            <div className="flex flex-col gap-3">
              {item.benefit.map((benefit, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <span dangerouslySetInnerHTML={{ __html: svg.tick }} />
                  <p className="text-sm text-[#D1D5DB]">{benefit}</p>
                </div>
              ))}
            </div>
            <button
              className="w-full px-4 py-2 rounded-2xl text-white font-medium"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div
        className="w-full flex flex-col items-center gap-6 bg-[#0A0A0C] py-10"
        id="FAQ"
      >
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-5">
          Frequently Asked Questions
        </h1>
        {frequently.map((faq, index) => (
          <div
            key={index}
            className="w-full sm:w-11/12 lg:w-3/5 bg-[#111114] p-4 rounded-lg border-l-4 border-[#E96348] cursor-pointer"
            style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0 0 8px 0" }}
          >
            <details className="text-white cursor-pointer">
              <summary className="font-semibold flex justify-between items-center">
                {faq.title}
                <svg
                  className="w-5 h-5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-[#A0A0A5] text-sm leading-6">
                {faq.description}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
