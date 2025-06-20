import { Link } from "react-router";
import heroImage from "../assets/images/hero_image.jpg";
import svg from "../utils/svg";
import image_1 from "../assets/images/Image_1.png";
import image_2 from "../assets/images/Image_2.png";
import image_3 from "../assets/images/Image_3.png";
import image_4 from "../assets/images/Image_4.png";
import image_5 from "../assets/images/Image_5.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F1F] text-white flex flex-col items-center justify-start">
      {/* Hero Section */}
      <div
        className="relative w-full h-[460px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          style={{ backgroundColor: "rgba(15, 15, 31, 0.4)" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient_text">
            Drop the Beat. Own the Night.
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Request Songs. Control the Vibe. Rule the Night.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to={"/venue-mode"}
              className="px-5 py-3 rounded-full font-bold text-white shadow_box text-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
              }}
            >
              Launch Venue Mode
            </Link>
            <Link
              to={"request-song"}
              className="px-5 py-3 rounded-full border border-white shadow_box text-center"
            >
              Request a Song
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full bg-[#0F0F1F] p-6 md:p-10">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6">
          {[
            {
              icon: svg.hand,
              title: "Vote Songs",
              desc: "Vote for your favorite tracks and influence the playlist",
            },
            {
              icon: svg.play,
              title: "Skip the Queue",
              desc: "Premium users can jump the line with priority requests",
            },
            {
              icon: svg.box,
              title: "Control the Vibe",
              desc: "Shape the atmosphere with your music choices",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E] rounded-lg p-6 w-full sm:w-[300px] flex flex-col gap-4"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-[#9CA3AF]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Section */}
      <div className="w-full bg-[#0A0A15] px-4 py-10 flex justify-center">
        <div className="max-w-screen-xl w-full flex flex-col items-center gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Trusted by Venues & Music Lovers
          </h2>

          {/* Stats */}
          <div className="flex flex-wrap justify-around w-full gap-6 text-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold gradient_text">
                10K+
              </h3>
              <p className="text-sm">Active Users</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold gradient_text">
                500+
              </h3>
              <p className="text-sm">Venues</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold gradient_text">
                1M+
              </h3>
              <p className="text-sm">Songs Played</p>
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[image_1, image_2, image_3, image_4, image_5].map((img, idx) => (
              <img
                key={idx}
                className="w-[100px] h-[50px] object-cover rounded-lg shadow_box"
                src={img}
                alt={`Trusted ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
