import { auth } from "@clerk/nextjs/server";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import { getDashboard } from "../_data/get-dashboard";
import SummaryCards from "./components/summary-cards";
import TimeSelect from "./components/time-select";
import { TransactionPieChart } from "./components/transaction-pie-chart";

interface HomeProps {
  searchParams: { month: string };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) {
    redirect("?month=01");
  }

  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <div className="grid grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6">
            <SummaryCards month={month} {...dashboard} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionPieChart
                typesPercentage={dashboard.typePercentage}
                {...dashboard}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
