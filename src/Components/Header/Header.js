import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import Divided from "Elements/Divided";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Popover className="relative bg-blue-600">
      <Divided className="px-4 mx-auto max-w-7xl sm:px-6">
        <Divided className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <Divided className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-4xl font-bold">
              <h3 className="text-3xl font-bold text-slate-200">
                Question-Game
              </h3>
            </Link>
          </Divided>

          <Divided className="items-center justify-end hidden gap-5 md:flex md:flex-1 lg:w-0">
            <Link
              to="/"
              className="text-base font-medium text-slate-200 whitespace-nowrap hover:text-teal-900"
            >
              Home
            </Link>
            <Link
              to="/statisticsss"
              className="text-base font-medium text-slate-200 whitespace-nowrap hover:text-teal-900"
            >
              Statistics
            </Link>
            <Link
              to="/blogs"
              className="text-base font-medium text-slate-200 whitespace-nowrap hover:text-teal-900"
            >
              Blog
            </Link>
          </Divided>
        </Divided>
      </Divided>
    </Popover>
  );
};
export default Header;
