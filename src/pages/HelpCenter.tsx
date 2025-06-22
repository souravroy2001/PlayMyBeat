import svg from "../utils/svg";
import management from "../assets/images/Management.svg";

export default function HelpCenter() {
  const helpCenter = [
    {
      heading: "Getting Started",
      icon: svg.userIcon,
      question: [
        {
          title: "What is PlayMyBeat?",
          description:
            "PlayMyBeat is a song request platform designed for public venues like cafes, clubs, and lounges. It allows guests to vote or pay to prioritize their favorite tracks in the live playlist.",
        },
        {
          title: "How do I submit a song request?",
          description:
            "Visit the venue’s PlayMyBeat web interface, search for a song, and either vote for it (free) or pay credits to push it to the top of the queue.",
        },
        {
          title: "Do I need to install anything?",
          description:
            "No app is needed. PlayMyBeat runs directly in your browser, accessible via a QR code or link provided by the venue.",
        },
        {
          title: "Can I see what songs are coming up next?",
          description:
            "Yes! The queue is visible to all users and updates in real time based on votes and paid requests.",
        },
      ],
    },
    {
      heading: "Payments & Credits",
      icon: svg.payments,
      question: [
        {
          title: "What are credits?",
          description:
            "Credits are used to prioritize your song requests. While voting is free, paying with credits ensures your song is played next, bypassing the normal vote queue.",
        },
        {
          title: "Do credits expire?",
          description:
            "No. Your credits do not expire and can be used at any PlayMyBeat-powered venue whenever you like.",
        },
        {
          title: "How do I buy credits?",
          description:
            "Credits can be purchased directly through the web interface using UPI, cards, or digital wallets like Google Pay and Apple Pay.",
        },
        {
          title: "Can I use one credit across different venues?",
          description:
            "Credits are generally tied to individual venues unless they are part of a shared network. Check the venue details in the app.",
        },
      ],
    },
    {
      heading: "Voting & Queue Management",
      icon: svg.voting,
      question: [
        {
          title: "How does the voting system work?",
          description:
            "Each visitor can vote for available songs. The more votes a track receives, the higher it moves in the queue — unless a paid request overrides it.",
        },
        {
          title: "What happens when a song is paid for?",
          description:
            "Paid requests take top priority and are played next, regardless of vote counts. This ensures fast playback for premium users.",
        },
        {
          title: "Can I cancel or change my vote?",
          description:
            "Votes cannot be changed once submitted, but you can vote for another song to shift your influence in the queue.",
        },
        {
          title: "Is there a limit to how many times I can vote?",
          description:
            "Yes, each user gets a limited number of free votes per session to ensure fairness. You can increase influence by purchasing credits.",
        },
      ],
    },
    {
      heading: "Venue Setup & Management",
      icon: management,
      question: [
        {
          title: "I'm a venue owner. How do I set up PlayMyBeat?",
          description:
            "Sign up as a venue on our partner portal. From there, you can customize your playlist, manage song queues, and receive credit payouts.",
        },
        {
          title: "Can I customize the look of my venue's player?",
          description:
            "Yes. PlayMyBeat lets you upload branding elements like logos and colors to match your venue’s vibe.",
        },
        {
          title: "Can I block certain songs?",
          description:
            "Absolutely. You can blacklist specific tracks, genres, or artists to maintain the right atmosphere.",
        },
        {
          title: "How do I manage payouts from credits?",
          description:
            "Venue owners receive payouts for song credit usage monthly via bank transfer or UPI. You can track everything in the dashboard.",
        },
      ],
    },
    {
      heading: "Technical Support",
      icon: svg.setting,
      question: [
        {
          title: "The player isn't responding — what do I do?",
          description:
            "Refresh the browser and ensure the device is connected to the internet. If issues persist, contact support via the Help section.",
        },
        {
          title: "Guests can’t access the song request page",
          description:
            "Ensure your venue's QR code or link is properly displayed and the network is stable. Try reconnecting to Wi-Fi or using a different device.",
        },
        {
          title: "How secure are transactions?",
          description:
            "All payment processing is encrypted and handled by trusted third-party providers. Your financial data is never stored on our servers.",
        },
        {
          title: "Can I integrate with my existing DJ software?",
          description:
            "We support integrations with popular DJ tools via our upcoming API and webhook features. Contact support for early access.",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] text-white">
      <div className="w-full flex flex-col justify-center items-center gap-10 px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center leading-tight">
          How can we help you?
        </h1>

        <div className="w-full max-w-xl bg-[#2A2A2A] rounded-full flex items-center px-4 py-2">
          <div className="flex items-center pr-2">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgb(156, 163, 175)"
                d="M21.71 20.29l-3.388-3.388A8.94 8.94 0 0018 10a9 9 0 10-9 9 8.94 8.94 0 006.902-3.678l3.388 3.388a1 1 0 001.42-1.42zM10 17a7 7 0 117-7 7 7 0 01-7 7z"
              />
            </svg>
          </div>
          <input
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 px-2 py-2 text-base"
            type="search"
            name="search"
            id="search"
            placeholder="Search FAQs..."
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {["Account", "Playback", "Subscription", "Mobile App"].map(
            (item, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm bg-[#2A2A2A] rounded-full text-white text-center"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="w-full bg-[#121212] px-9 py-10 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          {helpCenter.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index === 3 ? (
                <img src={item.icon} className="w-7 h-7" alt="" />
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                  className="w-6 h-6"
                />
              )}
              <span className="text-sm">{item.heading}</span>
            </div>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="w-full lg:w-3/4">
          {helpCenter.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {section.heading}
              </h3>
              {section.question.map((q, i) => (
                <details key={i} className="mb-4 bg-[#1E1E1E] p-4 rounded-lg">
                  <summary className="cursor-pointer flex items-center justify-between font-medium text-sm sm:text-base">
                    {q.title}
                    <svg
                      className="w-5 h-5 transition-transform"
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
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {q.description}
                  </p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
