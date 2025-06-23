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

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="clipPath0669954506">
                  <path
                    d="M0 0L24 0L24 24L0 24L0 0Z"
                    fill-rule="nonzero"
                    transform="matrix(1 0 0 1 0 0)"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clipPath0669954506)">
                <path
                  d="M7.36359 0.75Q4.62415 0.75 2.68708 2.68708Q0.75 4.62415 0.75 7.36359Q0.75 10.103 2.68708 12.0401Q4.62416 13.9772 7.36359 13.9772Q10.103 13.9772 12.0401 12.0401Q13.9772 10.103 13.9772 7.36359Q13.977 4.62425 12.04 2.68721Q10.1029 0.750174 7.36354 0.75L7.36359 0.75ZM7.36364 -0.75Q10.7243 -0.749786 13.1006 1.62655Q15.477 4.0029 15.4772 7.36359Q15.4772 10.7244 13.1008 13.1008Q10.7243 15.4772 7.36359 15.4772Q4.00283 15.4772 1.62642 13.1008Q-0.75 10.7244 -0.75 7.36359Q-0.75 4.00283 1.62642 1.62642Q4.00283 -0.75 7.36359 -0.75L7.36364 -0.75Z"
                  fill-rule="nonzero"
                  transform="matrix(1 0 0 1 3 3)"
                  fill="rgb(156, 163, 175)"
                />
                <path
                  d="M-0.53033 0.53033C-0.823221 0.237439 -0.823221 -0.237439 -0.53033 -0.53033C-0.237439 -0.823221 0.237439 -0.823221 0.53033 -0.53033L5.67299 4.61233C5.96588 4.90522 5.96588 5.3801 5.67299 5.67299C5.3801 5.96588 4.90522 5.96588 4.61233 5.67299L-0.53033 0.53033Z"
                  fill-rule="evenodd"
                  transform="matrix(1 0 0 1 15.8573 15.8573)"
                  fill="rgb(156, 163, 175)"
                />
              </g>
            </svg>
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
              className="px-4 py-2 text-sm bg-[#2A2A2A] rounded-full text-white text-center cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#0A0A0D] px-9 py-10 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 h-fit lg:h-[calc(100vh-100px)] sticky top-[100px] flex flex-col gap-5 overflow-auto">
          {helpCenter.map((item, index) => (
            <HashLink
              to={`#${item.heading.split(" ")[0]}`}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              onClick={() => setSelectedTag("")}
            >
              <div
                key={index}
                className="flex items-center gap-3 py-1 px-3 justify-baseline"
              >
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
                  className="mb-4 bg-[#111114] p-4 rounded-lg"
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
            helpCenter
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
              .filter(Boolean)
              .map((section, index) => (
                <div key={index}>
                  <h3
                    id={section!.heading.split(" ")[0]}
                    className="text-xl sm:text-2xl font-bold mb-4 scroll-mt-20"
                  >
                    {section!.heading}
                  </h3>
                  {section!.question.map((q, i) => (
                    <details
                      key={i}
                      className="mb-4 bg-[#111114] p-4 rounded-lg"
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
                    className="mb-4 bg-[#111114] p-4 rounded-lg"
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
    </div>
  );
}
