import { GitHubUser } from "@lib/types";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

interface SidebarProps {
  user: GitHubUser;
}

export function Sidebar({ user }: SidebarProps) {
  const { t } = useTranslation("common");

  return (
    <div className="w-full md:w-[256px] lg:w-[296px]">
      <div className="flex md:flex-col items-center">
        <div className="w-1/3 md:w-full">
          <Image
            src={user.avatarUrl}
            className="rounded-full"
            width="296"
            height="296"
            alt="GitHub Profile Picture"
          />
        </div>
        <div className="py-4 pl-4 md:pl-0 w-2/3 md:w-full">
          <h1 className="text-[32px] leading-[1] font-semibold">
            <span className="block text-[26px] leading-[1.25] text-white">
              {user.name}
            </span>
            <span className="block text-[20px] leading-[24px] font-light text-[#768390]">
              {user.login}
            </span>
          </h1>
          <div className="mt-4">
            <p className="text-white">{t("description")}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 flex items-center">
          <Link
            href={`https://github.com/${user.login}?tab=followers`}
            passHref
          >
            <a className="text-[#768390] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                ></path>
              </svg>
              <span className="px-1 text-[#adbac7] font-semibold">
                {user.followers}
              </span>
              followers
            </a>
          </Link>
          <Link
            href={`https://github.com/${user.login}?tab=repositories`}
            passHref
          >
            <a className="ml-1 text-[#768390] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                ></path>
              </svg>
              <span className="px-1 text-[#adbac7] font-semibold">
                {user.stars}
              </span>
              stars
            </a>
          </Link>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}
