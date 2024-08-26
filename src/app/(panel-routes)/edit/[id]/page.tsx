import Hydrate from "@/components/common/hydrate";
import Edit from "@/components/pages/edit";
import { EMPLOYEE } from "@/core/constants/api.constants";
import { getEmployeeById } from "@/core/services/api/employee.api";
import { TFCParamsId } from "@/core/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";

const page: TFCParamsId = async ({ params: { id } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EMPLOYEE, "edit"],
    queryFn: () => getEmployeeById({ data: { Id: id } }),
  });
  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Edit id={id} />
    </Hydrate>
  );
};

export default page;
