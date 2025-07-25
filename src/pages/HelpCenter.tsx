import svg from "../utils/svg";
import management from "../assets/images/Management.svg";
import { HashLink } from "react-router-hash-link";
import { useState, type ChangeEvent } from "react";
import type { HELP_CENTER, TAG_FAQ_MAP } from "../utils/interface";

export default function HelpCenter() {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");

  const helpCenter: HELP_CENTER[] = [
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

  const tags: string[] = [
    "Account",
    "Playlists",
    "Voting",
    "Performance",
    "Billing",
  ];

  const tagFaqMap: TAG_FAQ_MAP = {
    Account: [
      {
        title: "How do I create an account?",
        description:
          "Click 'Sign Up', enter your email and password, then verify your email to start using PlayMyBeat.",
      },
      {
        title: "Can I change my email or password?",
        description:
          "Yes, go to Account Settings to update your email or password anytime.",
      },
    ],

    Playlists: [
      {
        title: "How to create a playlist?",
        description:
          "Go to 'My Playlists', tap '+', name your playlist, and start adding songs from the queue.",
      },
      {
        title: "Can I reorder songs in a playlist?",
        description:
          "Yes, long-press and drag songs to reorder them within your custom playlists.",
      },
    ],

    Voting: [
      {
        title: "How does voting work?",
        description:
          "You can vote on any active song in the list. Songs with more votes are prioritized in the queue.",
      },
      {
        title: "Can I pay to boost my vote?",
        description:
          "Yes, premium users can pay to prioritize their song requests instantly.",
      },
    ],

    Performance: [
      {
        title: "Why is my request delayed?",
        description:
          "Delays may occur if a DJ overrides the queue or due to venue connection issues.",
      },
      {
        title: "Is there a DJ override option?",
        description:
          "Yes, DJs or managers can control the queue using the admin dashboard.",
      },
    ],

    Billing: [
      {
        title: "What payment methods are supported?",
        description:
          "We support UPI, credit/debit cards, PayPal, and other local options.",
      },
      {
        title: "Do credits expire?",
        description:
          "No, credits do not expire. They remain in your account until you use them.",
      },
    ],
  };

  let timeOutID: number | null = null;

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    const value = event.target.value;
    if (timeOutID !== null) clearTimeout(timeOutID);
    timeOutID = window.setTimeout(() => {
      setSearchValue(value.trim().toLowerCase());
    }, 300);
  }

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white">
      <div className="w-full flex flex-col justify-center items-center gap-10 px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center leading-tight">
          How can we help you?
        </h1>

        <div className="w-full max-w-xl bg-[#2A2A2A] rounded-full flex items-center px-4 py-2">
          <div className="flex items-center pr-2">
            {/* Search Icon */}

            <div dangerouslySetInnerHTML={{ __html: svg.searchIcon }} />
          </div>
          <input
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 px-2 py-2 text-base"
            type="search"
            name="search"
            id="search"
            placeholder="Search FAQs..."
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {tags.map((item, index) => (
            <span
              onClick={() =>
                setSelectedTag((prev) => (prev === item ? "" : item))
              }
              key={index}
              className="px-4 py-2 text-sm bg-[#2A2A2A] rounded-full text-white text-center border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#0A0A0D] lg:px-9 lg:py-10 sm:px-5 sm:py-4 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 h-fit lg:h-[calc(100vh-100px)] lg:sticky lg:top-[100px] flex flex-col gap-5 overflow-auto">
          {helpCenter.map((item, index) => (
            <HashLink
              key={index}
              to={`#${item.heading.split(" ")[0]}`}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              onClick={() => setSelectedTag("")}
              className="border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer rounded-md text-white"
            >
              <div className="flex items-center gap-3 py-1 px-3 justify-baseline">
                {index === 3 ? (
                  <img src={item.icon} className="w-7 h-7" alt="" />
                ) : (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                    className="w-8 h-8 flex flex-row justify-center items-center"
                  />
                )}
                <span className="text-sm">{item.heading}</span>
              </div>
            </HashLink>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="w-full lg:w-3/4">
          {selectedTag ? (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 scroll-mt-20">
                {selectedTag}
              </h3>
              {tagFaqMap[selectedTag]?.map((q, i) => (
                <details
                  key={i}
                  className="mb-4 bg-[#111114] p-4 rounded-lg border-l-4 border-[#E96348] cursor-pointer"
                  style={{
                    boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
                  }}
                >
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
          ) : searchValue ? (
            (() => {
              const filteredSections = helpCenter
                .map((section) => {
                  const sectionMatches = section.heading
                    .toLowerCase()
                    .includes(searchValue);
                  const filteredQuestions = section.question.filter(
                    (q) =>
                      q.title.toLowerCase().includes(searchValue) ||
                      q.description.toLowerCase().includes(searchValue)
                  );
                  if (sectionMatches && filteredQuestions.length === 0) {
                  // Include all questions if only heading matches
                    return section;
                  } else if (filteredQuestions.length > 0) {
                  // Include matched questions if any match
                    return { ...section, question: filteredQuestions };
                  } else {
                    return null;
                  }
                })
                .filter(Boolean);

              if (filteredSections.length === 0) {
                return (
                  <div className="text-center text-gray-400 text-lg mt-10">
                    No results found for "
                    <span className="text-white">{searchValue}</span>"
                  </div>
                );
              }

              return filteredSections?.map((section, index) => (
                <div key={index}>
                  <h3
                    id={section?.heading.split(" ")[0]}
                    className="text-xl sm:text-2xl font-bold mb-4 scroll-mt-20"
                  >
                    {section?.heading}
                  </h3>
                  {section?.question.map((q, i) => (
                    <details
                      key={i}
                      className="mb-4 bg-[#111114] p-4 rounded-lg border-l-4 border-[#E96348] cursor-pointer"
                      style={{
                        boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
                      }}
                    >
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
              ));
            })()
          ) : (
            helpCenter.map((section, index) => (
              <div key={index}>
                <h3
                  id={section.heading.split(" ")[0]}
                  className="text-xl sm:text-2xl font-bold mb-4 scroll-mt-20"
                >
                  {section.heading}
                </h3>
                {section.question.map((q, i) => (
                  <details
                    key={i}
                    className="mb-4 bg-[#111114] p-4 rounded-lg border-l-4 border-[#E96348] cursor-pointer"
                    style={{
                      boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
                    }}
                  >
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
            ))
          )}
        </div>
      </div>

      <div className="h-[350px] w-full flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="text-4xl leading-[38px] font-bold">
            Still need help?
          </h3>
          <p className="text-xl leading-[24px] text-center">
            Our support team is here for you 24/7
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <button className="flex flex-row justify-center items-center gap-2 py-3 px-5 bg-green-600 rounded-full">
            <div dangerouslySetInnerHTML={{ __html: svg.liveChat }} />
            Live Chat
          </button>
          <button className="flex flex-row justify-center items-center gap-2 py-3 px-5 border border-[#333] rounded-full">
            <div dangerouslySetInnerHTML={{ __html: svg.email }} />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
