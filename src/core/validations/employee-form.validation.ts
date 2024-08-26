import * as yup from "yup";

const employeeFormValidation = yup.object().shape({
  gmail: yup
    .string()
    .email("  ایمیل را به درستی وارد کنید")
    .required("Mail is required")
    .typeError("ایمیل را به درستی وارد کنید")
    .required("این فیلد الزامیست!"),

  phoneNumber: yup
    .number()
    .min(9000000000, "شماره موبایل باید 11 رقم باشد")
    .max(9999999999, "شماره موبایل نباید بیشتر از 11 رقم باشد")
    .required("این فیلد الزامیست!"),
  name: yup.string().required("این فیلد الزامیست!"),
  Address: yup.string().required("این فیلد الزامیست!"),
  caption: yup.string().required("این فیلد الزامیست!"),
  birthDay: yup.date().required("این فیلد الزامیست!"),
  gender: yup.boolean().required("لطفا نوع جنسیت را انتخاب کنید"),
});
export default employeeFormValidation;
