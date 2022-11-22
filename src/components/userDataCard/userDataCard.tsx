import { ReactNode } from "react";

import placeholder from "../../assets/profile-img-placeholder.png";
import { ReactComponent as LocationSvg } from "../../assets/icons/location.svg";
import { ReactComponent as TweeterSvg } from "../../assets/icons/twitter.svg";
import { ReactComponent as UrlSvg } from "../../assets/icons/url.svg";
import { ReactComponent as BuildingSvg } from "../../assets/icons/office-building.svg";

import { IUser } from "../types/models";
import format from "date-fns/format";

type UserDataCardProps = {
  user: IUser;
};

const noBio = "This profile has no bio";

const UserDataCard = ({ user }: UserDataCardProps) => {
  return (
    <div className="mt-6 rounded-[15px] bg-white p-10 dark:bg-blue-800 md:px-12 md:pt-11">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 gap-x-10">
          <img
            src={user.avatar_url || placeholder}
            className="h-[117px] w-[117px] rounded-full"
            alt=""
          />
          <div className="w-full">
            <div className="mb-5 flex flex-col justify-between md:flex-row">
              <div>
                <h3 className="text-[26px] font-bold text-black-800 dark:text-white">
                  {user.name || "No Name"}
                </h3>
                <span className="text-base text-blue-500">@{user.login}</span>
              </div>
              <p className="text-[15px] text-gray-500 dark:text-white">
                Joined
                {format(new Date(user.created_at), " d MMM Y")}
              </p>
            </div>
            <p className="hidden text-[15px] leading-[25px] text-blue-600 dark:text-white md:block">
              {user.bio || noBio}
            </p>
          </div>
        </div>

        <p className="mt-6 block text-[15px] leading-[25px] text-blue-600 dark:text-white md:hidden">
          {user.bio || noBio}
        </p>
      </div>

      <div className="md:ml-[154px]">
        <div className=" mt-8 flex justify-between rounded-[10px] bg-gray-100 py-[15px] px-8 dark:bg-black-900">
          <Stat label="repos" stat={user.public_repos} />
          <Stat label="followers" stat={user.followers} />
          <Stat label="following" stat={user.following} />
        </div>
        <div className="mt-9 grid grid-cols-2 gap-[15px]">
          <About icon={<LocationSvg />} text={user.location} />
          <About icon={<TweeterSvg />} text={user.twitter_username} />
          <About icon={<UrlSvg />} isLink text={user.blog} />
          <About icon={<BuildingSvg />} text={user.company} />
        </div>
      </div>
    </div>
  );
};

export default UserDataCard;

type StatProp = {
  label: string;
  stat: number;
};

const Stat = ({ label, stat }: StatProp) => (
  <div>
    <p className="text-[13px] capitalize text-blue-600 dark:text-white">
      {label}
    </p>
    <span className="text-[22px] font-bold leading-8 text-black-800 dark:text-white">
      {stat}
    </span>
  </div>
);

type AboutProps = {
  icon: ReactNode;
  isLink?: boolean;
  text: string;
};

const About = ({ icon, text, isLink }: AboutProps) => (
  <div
    className={`about flex items-center gap-5 overflow-hidden ${
      !text ? "opacity-50" : ""
    }`}
  >
    <div className="min-w-min">{icon}</div>
    {isLink ? (
      <a href={text} className="text-blue-600 hover:underline dark:text-white">
        {text}
      </a>
    ) : (
      <p className="text-blue-600 dark:text-white">{text || "Not Available"}</p>
    )}
  </div>
);
