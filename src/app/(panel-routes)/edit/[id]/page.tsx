import Edit from "@/components/pages/edit";
import { TFCParamsId } from "@/core/types";

const page: TFCParamsId = ({ params: { id } }) => {
  return <Edit id={id} />;
};

export default page;
