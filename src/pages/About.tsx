import heroImage from "../assets/images/about_hero.png";
import aboutImage from "../assets/images/about_image.png";
import svg from "../utils/svg";
import TeamImage1 from "../assets/images/Team_Image_1.jpg";
import TeamImage2 from "../assets/images/Team_Image_2.jpg";
import TeamImage3 from "../assets/images/Team_Image_3.jpg";
import { Link } from "react-router";

export default function About() {
  const timelineData = [
    {
      year: "2024",
      title: "Founded",
      description: "Started with a vision to revolutionize music interaction",
    },
    {
      year: "2025",
      title: "Beta Launch",
      description: "Testing our platform with select venues",
    },
    {
      year: "2025",
      title: "Global Launch",
      description: "Expanding to major cities worldwide",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 sm:h-[460px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center px-6 sm:px-10 md:items-start md:px-20 lg:px-32">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About PlayMyBeat
            </h1>
            <p className="text-lg md:text-xl mt-4 text-white mb-5 gradient_text">
              Bringing Control of the Music Back to the Crowd
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="4"
              viewBox="0 0 96 4"
            >
              <defs>
                <linearGradient
                  id="gradientFill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(246, 148, 43, 1)" />
                  <stop offset="50%" stopColor="rgba(224, 64, 94, 1)" />
                  <stop offset="100%" stopColor="rgba(152, 29, 160, 1)" />
                </linearGradient>
              </defs>
              <rect width="96" height="4" fill="url(#gradientFill)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="w-full bg-[#0A0A15] py-10 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Our Mission
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="4"
              viewBox="0 0 96 4"
            >
              <defs>
                <linearGradient
                  id="gradientFill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(246, 148, 43, 1)" />
                  <stop offset="50%" stopColor="rgba(224, 64, 94, 1)" />
                  <stop offset="100%" stopColor="rgba(152, 29, 160, 1)" />
                </linearGradient>
              </defs>
              <rect width="96" height="4" fill="url(#gradientFill)" />
            </svg>
            <p className="text-[#A0A0A5] text-base md:text-lg leading-6 text-justify">
              At PlayMyBeat, we're revolutionizing the way people interact with
              music in venues. Our platform empowers attendees to shape the
              musical experience through real-time voting and suggestions. We
              believe that music should be democratic, and every voice should be
              heard in creating the perfect atmosphere.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl object-cover"
              src={aboutImage}
              alt="About"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
              }}
            />
          </div>
        </div>
      </div>

      {/* What We Believe */}
      <div className="bg-[#151933] py-16 px-4 flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-5xl mb-8">
          What We Believe
        </h1>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: svg.music,
              title: "Music is Democratic",
              description:
                "Every voice should have a say in the musical experience",
            },
            {
              icon: svg.community,
              title: "Community First",
              description:
                "Building connections through shared musical moments",
            },
            {
              icon: svg.Innovation,
              title: "Innovation in Music",
              description: "Creating new ways to interact with live music",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#21253D] p-6 rounded-2xl"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <h3 className="text-white text-xl font-semibold mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-[#A0A0A5] text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-[#0A0A15] py-16 px-4 flex flex-col items-center">
        <h3 className="text-white text-3xl md:text-5xl mb-8">Meet Our Team</h3>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[TeamImage1, TeamImage2, TeamImage3].map((img, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg flex flex-col items-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-white text-lg">
                {["Sarah Chen", "David Kim", "Maria Rodriguez"][idx]}
              </h3>
              <p className="text-[#A0A0A5] text-sm mt-2">
                {["Founder & CEO", "CTO", "Head of Design"][idx]}
              </p>
              <div className="flex gap-4 mt-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="url(#linkedinGradient)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="linkedinGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F6942B" />
                      <stop offset="50%" stopColor="#E0405E" />
                      <stop offset="100%" stopColor="#981DA0" />
                    </linearGradient>
                  </defs>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                  <rect width="4" height="12" x="2" y="9" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="url(#twitterGradient)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="twitterGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F6942B" />
                      <stop offset="50%" stopColor="#E0405E" />
                      <stop offset="100%" stopColor="#981DA0" />
                    </linearGradient>
                  </defs>
                  <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.07 9.07 0 01-2.88 1.1A4.52 4.52 0 0016.33 0c-2.5 0-4.51 2-4.51 4.5 0 .35.04.7.1 1.03A12.84 12.84 0 013 1.2a4.47 4.47 0 00-.61 2.26c0 1.56.8 2.94 2 3.75A4.52 4.52 0 012 6.82v.04c0 2.18 1.54 3.99 3.58 4.4-.38.1-.78.16-1.2.16-.29 0-.57-.03-.84-.08.57 1.78 2.22 3.07 4.18 3.1A9.07 9.07 0 010 19.54a12.8 12.8 0 006.93 2.03c8.33 0 12.89-6.89 12.89-12.89 0-.2-.01-.41-.02-.61A9.22 9.22 0 0023 3z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-[#151933] py-16 px-4 w-full mx-auto flex flex-row justify-center items-center text-center">
        <div className="w-[1200px]">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-10">
            Our Journey
          </h2>

          {/* Timeline Line */}
          <div className="relative mb-12 hidden md:flex justify-between items-center px-2">
            <div
              className="absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
              }}
            ></div>
            {timelineData.map((_, index) => (
              <div
                key={index}
                className="relative z-10 w-5 h-5 bg-white rounded-full border-4 border-[#0F0F1F]"
              />
            ))}
          </div>

          {/* Timeline Cards */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="bg-[#21253D] w-full md:w-1/3 h-[200px] flex flex-col justify-center items-center p-6 rounded-xl shadow-md transition hover:shadow-lg"
                style={{
                  boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
                }}
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.year}
                </h3>
                <p className="gradient_text font-medium mt-1">{item.title}</p>
                <p className="text-sm text-[#A0A0A5] mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Revolution */}
      <div className="bg-[#0B0B13] text-center py-20 px-6">
        <h2 className="text-3xl text-white md:text-5xl font-extrabold mb-4">
          Join Our Revolution
        </h2>
        <p className="gradient_text mb-8 text-base md:text-lg">
          Be part of the future of music
        </p>
        <Link
          to="/get-started"
          className="inline-block px-6 py-3 text-white rounded-full text-base font-medium"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
          }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
