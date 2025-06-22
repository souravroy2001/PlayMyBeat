export default function HelpCenter() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] text-white">
      <div className="w-full h-100 flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="text-4xl leading-[40px] font-bold">
            How can we help you?
          </h1>
        </div>
        <div className="w-150 rounded-full bg-[#2A2A2A] flex flex-row justify-center items-center py-2 px-3">
          <div className="py-3 flex flex-row justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="clipPath5404158677">
                  <path
                    d="M0 0L24 0L24 24L0 24L0 0Z"
                    fill-rule="nonzero"
                    transform="matrix(1 0 0 1 0 0)"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clipPath5404158677)">
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
            className="w-full p-4 outline-0 text-lg"
            type="search"
            name="search"
            id="search"
            placeholder="Search FAQs..."
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <span className="w-30 h-10 text-center flex flex-row justify-center items-center rounded-full bg-[#2A2A2A]">Account</span>
          <span className="w-30 h-10 text-center flex flex-row justify-center items-center rounded-full bg-[#2A2A2A]">Playback</span>
          <span className="w-30 h-10 text-center flex flex-row justify-center items-center rounded-full bg-[#2A2A2A]">Subscription</span>
          <span className="w-30 h-10 text-center flex flex-row justify-center items-center rounded-full bg-[#2A2A2A]">Mobile App</span>
        </div>
      </div>
    </div>
  );
}
