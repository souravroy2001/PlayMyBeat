import { Link } from "react-router";
import logo from "../assets/images/PlayMyBeat_light_Logo.png";
import { HashLink } from "react-router-hash-link"
import svg from "../utils/svg";

function Footer() {
  const data:Date = new Date();

  return (
    <div className="bg-[#080810] w-full flex flex-col items-center px-6 py-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo & About */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <Link to={"/"}>
            <img className="w-50" src={logo} alt="PlayMyBeat Logo" />
          </Link>
          <p className="text-[#9CA3AF] text-sm">
            Making every night unforgettable with your favorite beats.
          </p>
          <div className="flex gap-4 mt-2">
            <div dangerouslySetInnerHTML={{__html:svg.twitter}}/>
            <div dangerouslySetInnerHTML={{__html:svg.instagram}}/>
            <div dangerouslySetInnerHTML={{__html:svg.facebook}}/>
            <div dangerouslySetInnerHTML={{__html:svg.linkedin}}/>
          </div>
        </div>

        {/* Quick Links + Support grouped side by side in mobile */}
        <div className="w-full md:w-1/2 flex flex-row justify-around sm:flex-row px-4 gap-6">
          {/* Quick Links */}
          <div className="w-[45%] sm:w-1/2 flex flex-col gap-4">
            <h2 className="text-white text-xl font-semibold">Quick Links</h2>
            <div className="flex flex-col gap-2">
              <Link className="text-[#9CA3AF] text-sm" to="/how-it-work">
                How It Works
              </Link>
              <Link className="text-[#9CA3AF] text-sm" to="/pricing">
                Pricing
              </Link>
              <Link className="text-[#9CA3AF] text-sm" to="features">
                Features
              </Link>
              <HashLink
                smooth
                to="/how-it-work#FAQ"
                className="text-[#9CA3AF] text-sm"
              >
                FAQ
              </HashLink>
            </div>
          </div>

          {/* Support */}
          <div className="w-[45%] sm:w-1/2 flex flex-col gap-4">
            <h2 className="text-white text-xl font-semibold">Support</h2>
            <div className="flex flex-col gap-2">
              <Link className="text-[#9CA3AF] text-sm" to="/help-center">
                Help Center
              </Link>
              <Link className="text-[#9CA3AF] text-sm" to="contact-us">
                Contact Us
              </Link>
              <Link className="text-[#9CA3AF] text-sm" to="privacy-policy">
                Privacy Policy
              </Link>
              <Link className="text-[#9CA3AF] text-sm" to="terms-of-Service">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <h2 className="text-white text-xl font-semibold">Newsletter</h2>
          <p className="text-[#9CA3AF] text-sm">
            Stay updated with the latest features and releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-[#9CA3AF] px-4 py-2 rounded-lg text-white bg-transparent outline-none w-full"
            />
            <button
              className="text-white px-4 py-2 rounded-lg"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(246, 148, 43, 1), rgba(224, 64, 94, 1), rgba(152, 29, 160, 1))",
              }}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full border-t border-[#9CA3AF] mt-10 pt-6 text-center">
        <p className="text-[#9CA3AF] text-sm">
          © {data.getFullYear()} PlayMyBeat. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
