import { TUser } from "@/components/pages/employees/table";
import SocialItem from "@/components/pages/profile/social-item";
import IconDatePicker from "@/core/icons/icon-date-picker";
import IconDribble from "@/core/icons/icon-dribble";
import IconEdit from "@/core/icons/icon-edit";
import IconEmail from "@/core/icons/icon-email";
import IconGithub from "@/core/icons/icon-github";
import IconLocation from "@/core/icons/icon-location";
import IconPhone from "@/core/icons/icon-phone";
import IconRole from "@/core/icons/icon-role";
import IconTwitter from "@/core/icons/icon-twitter";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ListItem from "./list-item";

const ProfileCard: FC<{ data?: TUser }> = ({ data }) => {
  return (
    <div className="relative box-border w-full rounded-md bg-white p-5 text-sm leading-5 text-gray-900 dark:bg-black-light/5 dark:text-gray-200 md:w-72">
      <div className="mb-5 flex h-10 w-full items-center justify-between">
        <h5 className="h-7 w-14 text-lg font-semibold leading-7 ">Profile</h5>
        <Link
          className="relative ml-auto flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-blue-600 bg-blue-600 p-2 font-semibold text-white"
          href={`/edit/${data?.id}`}
          style={{
            outlineOffset: "2px",
            outlineStyle: "solid",
            outlineWidth: "2px",
          }}>
          <IconEdit className="size-5 overflow-hidden" />
        </Link>
      </div>
      <div className="mb-5 w-full">
        <div className="flex h-36 w-full flex-col items-center justify-center">
          <Image
            width={96}
            height={96}
            className="mb-5 size-24 max-w-full text-clip rounded-full object-cover"
            src={data?.avatar ?? ""}
            alt={data?.name ?? ""}
            style={{
              overflowClipMargin: "content-box",
            }}
          />
          <p className="h-7 w-32 text-xl font-semibold leading-7 text-blue-600">
            {data?.name}
          </p>
        </div>
        <ul className="mx-auto mb-auto mt-5 flex w-full list-none flex-col items-start px-3 font-semibold text-slate-400">
          <ListItem title={data?.role ?? ""}>
            <IconRole className="size-5 overflow-hidden" />
          </ListItem>
          <ListItem title={data?.age ?? ""}>
            <IconDatePicker className="size-5 overflow-hidden" />
          </ListItem>
          <ListItem title={data?.email ?? ""}>
            <IconLocation className="size-5 overflow-hidden" />
          </ListItem>
          <ListItem
            title={data?.email ?? ""}
            className="cursor-pointer overflow-hidden text-ellipsis text-blue-600">
            <button
              className="flex h-5 items-center gap-2 text-center"
              style={{
                appearance: "button",
              }}>
              <IconEmail className="size-5 overflow-hidden" />
            </button>
          </ListItem>
          <ListItem title={data?.email ?? ""}>
            <IconPhone className="size-5 overflow-hidden" />
          </ListItem>
        </ul>
        <ul className="mt-7 flex w-full list-none items-center justify-center gap-4">
          <SocialItem borderAndBg="border-sky-500 bg-sky-500">
            <IconTwitter className="size-5 overflow-hidden" />
          </SocialItem>
          <SocialItem borderAndBg="border-rose-500 bg-rose-500">
            <IconDribble className="size-5 overflow-hidden" />
          </SocialItem>
          <SocialItem borderAndBg="border-slate-700 bg-slate-700">
            <IconGithub className="size-5 overflow-hidden" />
          </SocialItem>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
