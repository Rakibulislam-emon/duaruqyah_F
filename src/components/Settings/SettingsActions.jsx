import React from "react";
import { IoLanguage } from "react-icons/io5";
import { PiCardsThreeBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import ToggleButton from "./ToggleButton";

const settings = [
  { icon: <PiCardsThreeBold size={24} />, label: "General Settings" },
  { icon: <TbCategory size={24} />, label: "Font Settings" },
  {
    icon: <TbCategory size={24} />,
    label: "Appearance Settings",
    hoverColor: "text-green-800",
  },
];

const language = {
  icon: <IoLanguage size={24} />,
  label: "Language Settings",
};

export default function SettingsActions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full   max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Settings
      </h1>
      <div>
        <div className="flex items-center border-l-8  rounded-lg border-green-500 bg-[#f7f8fa] p-1.5">
          <span className="text-green-500 border p-2 rounded-full mr-4">
            {language.icon}
          </span>
          <span className="text-md font-medium text-green-500 ">
            {language.label}
          </span>
        </div>
        <div className="flex justify-center gap-x-4    mt-4">
          <button className="bg-green-500  text-white px-4 py-2 rounded hover:bg-green-600">
            English
          </button>
          <button className=" border px-4 py-2 rounded ">
          বাংলা
          </button>
        </div>
      </div>
      {/* general settings */}
      <ul className="divide-y mt-2 divide-gray-200">
        {settings.map((setting, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 p-4 hover:${
              setting.hoverColor || "text-green-600"
            } transition-colors duration-200 cursor-pointer`}
            role="button"
            aria-label={`Navigate to ${setting.label}`}
          >
            <span className="text-gray-600">{setting.icon}</span>
            <span className="text-sm font-medium text-gray-800">
              {setting.label}
            </span>
          </li>
        ))}
        <li className="flex items-center justify-between pt-4">
          <h2 className="font-medium">Night mode</h2>
          <ToggleButton />
        </li>
      </ul>
    </div>
  );
}
