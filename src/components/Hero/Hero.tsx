import Banner from "../../assets/banner-stack.png";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <div className="relative z-0 container mx-auto mt-6 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[20px] bg-white px-5 py-8 sm:px-8 md:mt-30 md:h-[400px] md:flex-row md:gap-4 md:px-6 md:py-10">
      <div className="flex h-full w-full flex-col items-center justify-between gap-6 text-center md:w-auto md:items-start md:gap-0 md:text-start">
        <p className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-6xl md:leading-[0.9]">
          Build Your Ideal
          <span className="mt-0 block bg-[linear-gradient(to_right,#FF5722,#D81B7E_50%,#7C3AED)] bg-clip-text text-transparent">
            Development Stack
          </span>
        </p>

        <p className="max-w-md text-sm text-slate-600 sm:text-base font-Plus Jakarta Sans">
          Explore frontend, backend, database, and tooling options,
          <br  /> compare them side by side, and put
          together the stack that fits your next project.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button className="w-full rounded-[12px] bg-[linear-gradient(to_right,#FF5722,#D81B7E_50%,#7C3AED)] px-10 py-5 text-base font-medium sm:w-auto">
            Explore Technologies
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-[12px] px-16 py-5 text-base font-medium sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="w-full max-w sm:max-w mt-0 md:w-auto mt-0 md:max-w-none ">
        <img src={Banner} alt="Banner" className="h-auto w-full md:h-auto md:w-auto" />
      </div>
    </div>
  );
};

export default Hero;