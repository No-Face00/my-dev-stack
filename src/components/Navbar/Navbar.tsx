import { Bars, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Logo from "../../assets/logo-text.png";
import type { ComponentType, SVGProps } from "react";

const navItems: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string }[] = [
  { icon: House, label: "Home" },
  { icon: Magnifier, label: "Technologies" },
  { icon: Gear, label: "Projects" },
  { icon: Person, label: "About" },
  { icon: Envelope, label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="relative z-50 border border-base-300 bg-base-100/90 px-5 py-3 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="md:hidden">
          <Drawer>
            <Button
              variant="secondary"
              isIconOnly
              aria-label="Open menu"
              className="rounded-[12px] border-0 bg-[linear-gradient(to_right,#FF5722,#D81B7E_50%,#7C3AED)] text-white shadow-none"
            >
              <Bars className="text-white" />
            </Button>
            <Drawer.Backdrop>
              <Drawer.Content placement="left">
                <Drawer.Dialog className="w-[78%] max-w-[320px]">
                  <Drawer.CloseTrigger />
                  <Drawer.Header>
                    <Drawer.Heading>
                      <img src={Logo} alt="Logo" className="w-28" />
                    </Drawer.Heading>
                  </Drawer.Header>
                  <Drawer.Body>
                    <nav className="flex flex-col gap-1">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href="#"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#D81B7E]"
                          >
                            <Icon className="size-5 text-black" />
                            {item.label}
                          </a>
                        );
                      })}
                    </nav>

                    
                  </Drawer.Body>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>

        <div>
          <img src={Logo} alt="Logo" className="w-28 sm:w-36 md:w-auto" />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map(({ label }) => (
              <li key={label}>
                <a href="#" className="nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="md:text-base">
            Sign In
          </Button>
          <Button size="sm" className="bg-[#D91B7E] text-white md:text-base">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;