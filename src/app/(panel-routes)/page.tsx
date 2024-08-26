import Hydrate from "@/components/common/hydrate";
import Employees from "@/components/pages/employees";
import { EMPLOYEE } from "@/core/constants/api.constants";
import { getEmployees } from "@/core/services/api/employee.api";
import { QueryClient, dehydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EMPLOYEE, "list"],
    queryFn: getEmployees,
  });
  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Employees />
    </Hydrate>
  );
};
export default Home;
