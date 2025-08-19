import Image from "next/image";
import Logo from "../public/Progrize.svg"

export default function Home() {
  return (
     <div className="flex min-h-screen font-sans items-center justify-center bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-200 bg-[size:40px_40px] opacity-30" />

      <div className="relative text-center px-6">
        {/* Badge */}
        <div className="inline-block rounded-full font-sans bg-lime-300 px-4 py-2 text-sm font-light text-gray-800 mb-6">
          We are rising soon
        </div>

        {/* Logo */}
        <div className="mx-auto w-50 block md:w-100 ">
       <Image  alt="progrize" src={Logo}/>
       </div>

        {/* Subtitle */}
        <p className="mt-6 text-5xl font-light font-sans text-gray-600">
          Let us unlock your true potential
        </p>

        {/* Small description */}
        <p className="mt-4 max-w-2xl mx-auto text-l text-gray-500 font-sans leading-relaxed">
          Struggling to find the right job? Get access to top job listings, expert
          guidance, and career resources tailored to your skills and aspirations.
        </p>
      </div>
    </div>
  );
}
