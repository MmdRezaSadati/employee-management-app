"use client";
import CustomInput from "@/components/common/input";
import { IUser } from "@/components/pages/employees/table";
import IconEditForm from "@/core/icons/icon-edit-form";
import { Form, Formik } from "formik";
import { CldImage } from "next-cloudinary";
import { FC, useState } from "react";
import ImageUploader from "../image-uploader";
import AddCard from "./add-card";
import employeeFormValidation from "@/core/validations/employee-form.validation";

const EmployeeForm: FC<{ data?: IUser; onSubmit: (data: any) => void }> = ({
  data,
  onSubmit,
}) => {
  const [cards, setCards] = useState(data?.cards ?? []);
  const [publicId, setPublicId] = useState<undefined | string>();
  const initialValues = data ?? {
    id: "",
    name: "",
    role: "",
    team: "",
    status: "",
    age: "",
    avatar: "",
    email: "",
    caption: "",
    phoneNumber: "",
    birthDay: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={employeeFormValidation}
      onSubmit={(value) => onSubmit({ ...value, cards, avatar: publicId })}
      className="relative flex h-auto flex-col overflow-hidden rounded-2xl p-2 text-gray-200">
      <Form>
        <div className="flex w-full flex-col items-start justify-start rounded-t-2xl px-4 pt-4">
          <p className="text-lg">Account Details</p>
          <div className="flex gap-4 py-4">
            <div className="relative inline-flex text-white">
              <span className="flex size-14 items-center justify-center overflow-hidden rounded-full bg-zinc-700">
                <CldImage
                  className="flex size-full  object-cover"
                  width={56}
                  height={56}
                  src={publicId ?? data?.avatar ?? ""}
                  alt={data?.name ?? ""}
                />
              </span>
              <span className="absolute bottom-[10%] right-[10%] z-10 flex size-5 flex-wrap content-center items-center justify-center rounded-full bg-blue-600 px-1">
                <button
                  className="inline-flex size-8 min-w-[2.00rem] cursor-pointer items-center justify-center overflow-hidden rounded-full"
                  type="button">
                  <IconEditForm className="size-3" />
                </button>
                <ImageUploader setPublicId={setPublicId} />
              </span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="font-medium">
                {initialValues.name !== "" ? initialValues.name : "Name"}
              </p>
              <span className="text-sm text-zinc-400">
                {initialValues.role !== "" ? initialValues.role : "Role"}
              </span>
            </div>
          </div>
          <p className="text-sm text-zinc-500">
            The photo will be used for your profile, and will be visible to
            other users of the platform.
          </p>
        </div>
        <div className="relative my-3 flex h-auto w-full grow flex-row flex-wrap items-center justify-center gap-4 overflow-y-auto p-3 lg:justify-normal">
          <CustomInput label="Name" name="name" />
          <CustomInput label="Role" name="role" />
          <CustomInput label="Team" name="team" />
          <CustomInput label="Status" name="status" />
          <CustomInput label="Age" name="age" />
          <CustomInput label="Email" name="email" />
          <CustomInput label="Phone Number" name="phoneNumber" />
          <CustomInput label="BirthDay" name="birthDay" type="date" />
          <div className="w-72 md:hidden"></div>
          <CustomInput
            label="Caption"
            name="caption"
            as="textarea"
            width={"w-[592px]"}
          />
          <AddCard setCards={setCards} cards={cards} />
        </div>
        <div className="mt-4 flex h-auto w-full items-center justify-end gap-2 overflow-hidden whitespace-nowrap rounded-b-2xl p-3 text-sm">
          <button className="inline-flex h-10 w-20 min-w-[5.00rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-solid border-zinc-700 px-4 text-center">
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex h-10 w-32 min-w-[5.00rem] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-blue-600 px-4 text-center text-white">
            Save Changes
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EmployeeForm;
