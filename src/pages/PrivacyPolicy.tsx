import type { PrivacyData } from "../utils/interface";
import svg from "../utils/svg";

const privacyData: PrivacyData[] = [
  {
    icon: svg.database,
    title: "What We Collect",
    sections: [
      {
        heading: "Account Information",
        text: "Your name, email, and payment details when you create an account or make a transaction.",
      },
      {
        heading: "Usage Data",
        text: "Details about song requests, voting, playlists created, time spent on app, and venue interactions.",
      },
      {
        heading: "Device & Technical Data",
        text: "Device type, operating system, browser, IP address, and log files to troubleshoot and secure our platform.",
      },
      {
        heading: "Location Data",
        text: "We may collect approximate location to help find nearby venues or tailor local music trends.",
      },
      {
        heading: "User-Generated Content",
        text: "Any playlists, comments, or song suggestions you share within our platform.",
      },
    ],
  },
  {
    icon: svg.dataUse,
    title: "How We Use Your Data",
    list: [
      "To process your song requests, payments, and manage priority queues.",
      "To personalize recommendations based on your previous activity.",
      "To improve and optimize PlayMyBeat’s platform, features, and UI.",
      "To send important service announcements, invoices, or promotional offers.",
      "To prevent fraud, misuse, or violations of our Terms of Service.",
      "For legal compliance and security audits."
    ],
  },
  {
    icon: svg.privacy,
    title: "Your Privacy Rights",
    text: "Depending on your location, you may have the right to:",
    list: [
      "Access a copy of your personal data.",
      "Correct or update inaccurate information.",
      "Request deletion of your account or data.",
      "Restrict or object to how we process certain data.",
      "Export your data in a machine-readable format.",
      "Withdraw consent for marketing at any time.",
    ],
  },
  {
    icon: svg.cookies,
    title: "Cookies & Tracking",
    text: "We and our analytics partners use cookies and similar technologies to recognize you and analyze trends.",
    sections: [
      {
        heading: "Types of Cookies We Use",
        list: [
          "Essential: Required to authenticate you and ensure service continuity.",
          "Performance: Measure how you interact with our app to improve user experience.",
          "Marketing: Deliver relevant ads or offers if you opt in.",
        ],
      },
    ],
  },
  {
    icon: svg.dataSecurity,
    title: "Data Security",
    text: "We use multiple layers of safeguards to protect your personal data.",
    sections: [
      {
        heading: "Security Practices",
        list: [
          "SSL encryption for data in transit and encryption at rest.",
          "Access controls ensuring only authorized staff handle sensitive data.",
          "Routine penetration testing and vulnerability assessments.",
          "Incident response plans for suspected data breaches.",
        ],
      },
    ],
  },
  {
    icon: svg?.integrations,
    title: "Third-Party Services",
    text: "We may share data with payment processors (like Razorpay or Stripe), analytics tools (like Google Analytics), or marketing providers under strict agreements.",
    sections: [
      {
        heading: "Your Choices",
        list: [
          "You can disable non-essential cookies in your settings.",
          "You can revoke marketing consent at any time via email preferences.",
        ],
      },
    ],
  },
  {
    icon: svg?.clock,
    title: "Data Retention",
    text: "We keep your data only as long as needed for the purposes described in this policy.",
    sections: [
      {
        heading: "Retention Periods",
        list: [
          "Account data is kept while your account remains active.",
          "Transaction records retained to meet tax and regulatory requirements.",
          "Backups and logs retained temporarily for security and troubleshooting.",
        ],
      },
    ],
  },
  {
    icon: svg?.shieldLock,
    title: "Children’s Privacy",
    text: "PlayMyBeat is not intended for users under 13. We do not knowingly collect personal data from children. If we become aware of such data, we delete it promptly.",
  },
];

export default function PrivacyPolicy() {
  const lastUpdated = new Date("2025-06-28").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-[#0A0B12] w-full flex flex-col items-center gap-8 p-4 md:p-8">
      <div className="flex flex-col w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col border-b border-[#535252] items-center w-full gap-3 pb-6 text-center">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">
            Privacy Policy
          </h1>
          <p className="text-[#A0A0A5] text-sm md:text-base">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Intro */}
        <div className="text-[#B3B3B3] text-sm md:text-base text-justify mt-6">
          Welcome to PlayMyBeat. We value your trust and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard data when you use our interactive song
          request service.
        </div>

        {/* Dynamic Sections */}
        {privacyData.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 mt-10">
            <div className="flex items-start gap-3 text-white">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>

            {item.text && (
              <p className="text-[#B3B3B3] text-sm md:text-base ml-10 text-justify">
                {item.text}
              </p>
            )}

            {item.sections && (
              <div className="flex flex-col gap-3 ml-10">
                {item.sections.map((sec, i) => (
                  <div key={i}>
                    <h4 className="text-white font-semibold">{sec.heading}</h4>
                    {sec.text && (
                      <p className="text-[#B3B3B3] text-sm md:text-base text-justify">
                        {sec.text}
                      </p>
                    )}
                    {sec.list && (
                      <ul className="list-none text-[#B3B3B3] text-sm md:text-base pl-4 *:mb-2">
                        {sec.list.map((li, j) => (
                          <li key={j}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {item.list && (
              <ul className="list-none text-[#B3B3B3] text-sm md:text-base ml-10 *:mb-2">
                {item.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact Section */}
        <div className="flex flex-col gap-4 mt-12 w-full">
          <div className="flex items-start gap-3 text-white">
            <div dangerouslySetInnerHTML={{ __html: svg.gradientEmail }} />
            <h3 className="text-xl font-bold">Contact Us</h3>
          </div>
          <p className="text-[#B3B3B3] text-sm md:text-base ml-10">
            Have questions or need help regarding your data? Contact us:
          </p>
          <div className="flex flex-col gap-2 bg-[#1A1A1A] rounded-lg p-4 w-full">
            <h4 className="text-white">Email:</h4>
            <p className="text-[#B3B3B3]">support@playmybeat.com</p>
            <h4 className="text-white mt-2">Address:</h4>
            <p className="text-[#B3B3B3]">
              06, 33rd Main Rd, Someshwara Colony, Stage 2, BTM Layout,
              Bengaluru, Karnataka 560068
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
