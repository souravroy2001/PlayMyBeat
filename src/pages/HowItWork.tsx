import svg from "../utils/svg";

export default function HowItWork() {
  const frequently = [
    {
      title: "How many songs can I request?",
      description:
        "You're welcome to request multiple songs, and to ensure a fair experience for everyone, we’ve set some gentle limits: Free users can have up to 3 active song requests at a time. Once one of your songs is played, you'll be able to request another. Premium users enjoy more flexibility, with the option to request additional songs and prioritize them in the queue.",
    },
    {
      title: "What payment methods do you accept?",
      description:
        "We currently accept major Indian payment options — including UPI, credit/debit cards, and popular payment apps like PhonePe, Google Pay, and Paytm. International options like PayPal are not supported at this time.",
    },
    {
      title: "How long until my song plays?",
      description:
        "The time depends on your position in the queue. Free requests are prioritized by the number of votes, while paid requests get pushed to the top of the queue for faster play.",
    },
    {
      title: "Can I request any song?",
      description:
        "Yes, you can request any song that is available in our playlist. We support a wide range of tracks across genres. If it's not listed, you can search or suggest it — and if available through our source, we'll queue it!",
    },
    {
      title: "What happens if my song isn't available?",
      description:
        "If your song isn’t available in the current music library, you’ll receive a notification. We’re constantly updating our collection, so feel free to suggest it — we’ll try to add it as soon as possible!",
    },
    {
      title: "Is there a limit to how many songs I can queue?",
      description:
        "Yes, there is a fair usage limit to keep the experience balanced for everyone. Free users can queue up to a limited number of songs per session. However, you can increase your queue limit or skip the line by choosing a premium option, which gives your request priority in the playlist.",
    },
    {
      title: "How does the voting system work?",
      description:
        "The voting system allows guests to influence the music by voting for their favorite songs. Each user can browse the song list and cast a vote on any track they like. The more votes a song receives, the higher it climbs in the queue. This ensures the most popular songs play first, creating a playlist the crowd truly wants to hear.",
    },
  ];

  return (
    <div className="bg-[#0A0A0C] w-full max-h-full">
      {/* Main section */}
      <div className="flex flex-col justify-center items-center w-full min-h-[306px] gap-3 px-4 text-center">
        <div dangerouslySetInnerHTML={{ __html: svg.music }} />
        <h1 className="text-white text-3xl md:text-4xl font-extrabold">
          How It Works
        </h1>
        <p className="text-[#A0A0A5] text-sm md:text-base max-w-md">
          Discover how to get your favorite music played in just three simple
          steps
        </p>
      </div>

      {/* Second section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 px-6 md:px-12 py-10">
        {[
          {
            icon: svg.search,
            title: "Search a Song",
            desc: "Browse through millions of tracks or search for your favorite artist, song, or album",
          },
          {
            icon: svg.card,
            title: "Vote or Pay",
            desc: "Use your votes to support your song or skip the queue with instant play",
          },
          {
            icon: svg.headPhone,
            title: "Enjoy Your Beat",
            desc: "Your selected track plays next, creating the perfect atmosphere",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-[#111114] rounded-lg flex flex-col justify-around items-center p-6 text-center"
            style={{
              boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
            }}
          >
            <div className="bg-[#a5b4fc1c] rounded-full w-20 h-20 flex justify-center items-center">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
              <h2 className="text-white text-lg font-extrabold">
                {item.title}
              </h2>
              <p className="text-sm text-[#A0A0A5]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div
        className="w-full p-5 flex flex-col justify-center items-center gap-6 bg-[#0A0A0C] pb-12"
        id="FAQ"
      >
        {frequently.map((faq, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] lg:w-[60%] bg-[#111114] p-5 rounded-lg"
            style={{
              boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
            }}
          >
            <details className="text-white">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
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
              <p className="mt-5 text-[#A0A0A5] text-sm leading-6">
                {faq.description}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
