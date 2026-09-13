import Banner from "../../assets/banner-stack.png";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <div className="relative z-0 container mx-auto mt-6 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-[20px] bg-white px-5 py-8 sm:px-8 md:mt-30 md:h-[400px] md:flex-row md:gap-4 md:px-6 md:py-10">
      <div className="flex h-full w-full flex-col items-center justify-between gap-4 text-center md:w-auto md:items-start md:gap-0 md:text-start">
        <p className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-6xl md:leading-[0.9]">
          Build Your Ideal
          <span className="mt-0 block bg-[linear-gradient(to_right,#FF5722,#D81B7E_50%,#7C3AED)] bg-clip-text text-transparent">
            Development Stack
          </span>
        </p>

        <p className="max-w-md text-sm text-slate-600 sm:text-base font-Plus Jakarta Sans">
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that
          fits your next project.
        </p>

       
        <div className="flex w-full flex-row gap-3 sm:w-auto">
          <Button className="flex-1 rounded-[12px] bg-[linear-gradient(to_right,#FF5722,#D81B7E_50%,#7C3AED)] px-4 py-5 text-sm font-medium sm:flex-none sm:px-10 sm:py-5 sm:text-base">
            Explore Technologies
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-[12px] px-4 py-5 text-sm font-medium sm:flex-none sm:px-16 sm:py-5 sm:text-base"
          >
            Learn More
          </Button>
        </div>
      </div>

    
      <div className="mt-1 w-full max-w-[280px] sm:max-w-[340px] md:mt-0 md:w-auto md:max-w-none">
        <img src={Banner} alt="Banner" className="h-auto w-full md:h-auto md:w-auto" />
      </div>
    </div>
  );
};

export default Hero;