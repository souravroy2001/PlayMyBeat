import svg from "../utils/svg";
import contact_hero from "../assets/images/contact_hero.svg";

export default function ContactUs() {
  const contactMethods = [
    {
      icon: svg.contactChat,
      title: "Live Chat",
      description: "24/7 Support Available",
      buttonText: "Start Chat",
    },
    {
      icon: svg.contactEmail,
      title: "Email Support",
      description: "support@playmybeat.com",
      buttonText: "Send Email",
    },
    {
      icon: svg.callIcon,
      title: "Phone Support",
      description: "+91 7076449427",
      buttonText: "Call Now",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-5 p-4 items-center justify-center min-h-screen">
      {/* Left: Image & Contact Methods */}
      <div className="w-full lg:w-1/2 mx-auto shadow-lg rounded-lg flex flex-col justify-center items-center gap-6">
        {/* Hero Image */}
        <div className="flex flex-col items-center justify-center w-full rounded-2xl overflow-hidden">
          <img
            className="w-full object-cover sm:h-[300px] md:h-[500px]"
            src={contact_hero}
            alt="Contact Hero"
          />
        </div>

        {/* Contact Methods */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="text-2xl font-bold bg-[#080810] text-black px-4 py-5 flex flex-col items-start justify-around gap-4 w-full sm:w-1/3 rounded-lg border border-transparent hover:border-[#E96348] transition-colors duration-200 cursor-pointer"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: method.icon }} />
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="text-[18px] leading-[28px] font-bold text-white">
                  {method.title}
                </h2>
                <p className="text-[16px] leading-[24px] text-[#A0A0A5]">
                  {method.description}
                </p>
              </div>
              <div className="flex items-center justify-center w-full rounded-full p-2 cursor-pointer">
                <button className="text-[16px] leading-[24px] gradient_text cursor-pointer">
                  {method.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Contact Form */}
      <div
        className="w-full lg:w-1/2 flex flex-row items-center justify-center rounded-lg bg-[#080810] p-6"
        style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px" }}
      >
        <div className="flex flex-col justify-center w-full lg:w-2/3 px-1 sm:px-1">
          <div className="flex flex-col items-start justify-start gap-2 mb-6">
            <h1 className="text-white text-3xl font-bold leading-[36px]">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-[16px] leading-[24px]">
              We'd love to hear from you
            </p>
          </div>

          <form className="flex flex-col gap-2">
            {/* Name */}
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <div className="flex items-center gap-2 bg-[#353539] rounded-2xl p-2">
              <span dangerouslySetInnerHTML={{ __html: svg.inputUser }} />
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded text-white w-full outline-none"
              />
            </div>

            {/* Email */}
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <div className="flex items-center gap-2 bg-[#353539] rounded-2xl p-2">
              <span dangerouslySetInnerHTML={{ __html: svg.inputEmail }} />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded text-white w-full outline-none"
              />
            </div>

            {/* Subject */}
            <label htmlFor="subject" className="text-white">
              Subject
            </label>
            <div className="flex items-center gap-2 bg-[#353539] rounded-2xl p-2 relative">
              <span dangerouslySetInnerHTML={{ __html: svg.inputSubject }} />
              <select
                name="subject"
                id="subject"
                className="p-2 rounded text-white w-full outline-none"
              >
                <option defaultValue="" disabled aria-selected="true" selected>
                  Select a subject
                </option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
              </select>
            </div>

            {/* Message */}
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              className="bg-[#353539] text-white h-32 resize-none p-2 rounded-2xl w-full outline-none"
            ></textarea>

            {/* Submit */}
            <div
              className="flex items-center justify-center w-full mt-6 bg-[#353539] rounded-lg p-4 gap-3 cursor-pointer"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 8px 0px",
                backgroundImage:
                  "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
              }}
              onClick={(e) => {
                e.preventDefault();
                console.log("Form submitted");
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: svg.sendIcon }} />
              <button
                type="submit"
                className="text-white text-[16px] leading-[24px] font-bold cursor-pointer"
              >
                Send Message
              </button>
            </div>

            <p className="text-gray-400 text-center mt-4">
              Our support team typically replies within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
