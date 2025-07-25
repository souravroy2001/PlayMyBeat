import svg from "../utils/svg";
import { HashLink } from "react-router-hash-link";

export default function TermsService() {
  const termsServiceData = [
    {
      heading: "Agreement Overview",
      icon: svg.agreement,
      question: [
        {
          title: "What is this agreement?",
          description:
            "These Terms of Service establish a legal agreement between you (the user) and PlayMyBeat, governing your use of our platform. By accessing or using our service, you accept these terms in full.",
        },
        {
          title: "Who do these terms apply to?",
          description:
            "These terms apply to all users including guests, registered account holders, and venue partners who utilize PlayMyBeat for song requests and queue management.",
        },
        {
          title: "Changes to these terms",
          description:
            "We may update these terms to reflect legal or operational changes. Continued use after updates means you accept the new terms.",
        },
      ],
    },
    {
      heading: "User Responsibilities",
      icon: svg.clock,
      question: [
        {
          title: "Keep your credentials safe",
          description:
            "If you create an account, you’re responsible for maintaining the confidentiality of your login information and all activities under your account.",
        },
        {
          title: "Lawful & respectful use",
          description:
            "You agree not to misuse our platform or disrupt services. This includes avoiding offensive requests or attempts to hack or overload the system.",
        },
        {
          title: "Follow venue rules",
          description:
            "Each venue may impose additional rules (such as blocking explicit songs). You must respect the venue’s music policy.",
        },
      ],
    },
    {
      heading: "Payment Terms",
      icon: svg.payments,
      question: [
        {
          title: "Payments & credits",
          description:
            "Purchasing credits allows you to prioritize song requests. All transactions are processed via secure third-party gateways.",
        },
        {
          title: "No refunds",
          description:
            "Credits purchased on PlayMyBeat are non-refundable, but do not expire and can be used at participating venues.",
        },
        {
          title: "Venue payouts",
          description:
            "Venues receive payouts monthly based on credits spent by guests in their establishment.",
        },
      ],
    },
    {
      heading: "Content Ownership",
      icon: svg.ownership,
      question: [
        {
          title: "Your rights",
          description:
            "You own your personal data and preferences. However, submitting requests grants us the right to process and display them for queue operations.",
        },
        {
          title: "Our rights",
          description:
            "PlayMyBeat owns the software, design, and underlying data systems. You agree not to copy or resell our platform.",
        },
      ],
    },
    {
      heading: "Limitations",
      icon: svg.limitations,
      question: [
        {
          title: "Limitation of liability",
          description:
            "To the fullest extent permitted by law, PlayMyBeat is not liable for indirect, incidental, or consequential damages from using our platform.",
        },
        {
          title: "Service interruptions",
          description:
            "We do not guarantee uninterrupted access. There may be occasional maintenance or technical failures.",
        },
        {
          title: "Compliance with laws",
          description:
            "You’re responsible for ensuring that your use of PlayMyBeat complies with local laws and venue policies.",
        },
      ],
    },
  ];

  const lastUpdated = new Date("2025-06-28").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full min-h-screen bg-[#0A0A0D] text-white p-4">
      {/* Header */}
      <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto px-4 md:px-8 bg-[#0A0A0D]">
        <div className="flex flex-col border-b border-[#535252] items-center justify-center w-full gap-3 pb-6 text-center h-50">
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold">
            Terms of Service
          </h1>
          <p className="text-[#A0A0A5] text-sm sm:text-base">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-[#0A0A0D] lg:px-9 sm:px-5 flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 h-fit lg:h-[calc(100vh-100px)] lg:sticky lg:top-[100px] flex flex-col gap-5 overflow-auto lg:border-r border-[#535252] pr-4">
          <div className="mt-5 flex flex-col gap-2">
            {termsServiceData.map((item, index) => (
              <HashLink
                key={index}
                to={`#${item.heading.split(" ")[0]}`}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <div className="flex items-center gap-3 py-2 px-3 rounded-md border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                    className="w-8 h-8 flex justify-center items-center"
                  />
                  <span className="text-sm">{item.heading}</span>
                </div>
              </HashLink>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="w-full mt-5 lg:w-3/4">
          {termsServiceData.map((section, index) => (
            <div key={index}>
              <h3
                id={section.heading.split(" ")[0]}
                className="text-xl sm:text-2xl font-bold mb-4 scroll-mt-20"
              >
                {section.heading}
              </h3>
              {section.question.map((q, i) => (
                <div
                  key={i}
                  className="mb-4 bg-[#111114] p-4 rounded-lg border-l-4 border-[#E96348]"
                >
                  <h3 className="cursor-pointer flex items-center justify-between font-medium text-sm sm:text-base">
                    {q.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {q.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
