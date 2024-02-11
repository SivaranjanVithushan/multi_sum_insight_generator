import StatisticsCard from "./statistics.card";

const Statistics = () => {
  return (
    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col items-stretch max-md:max-w-full">
        <div className="bg-blue-950 z-10 px-20 py-11 border-[3px] border-solid border-zinc-200 max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-lg font-medium whitespace-nowrap text-center tracking-wide mt-1.5 max-md:max-w-full max-md:mt-10">
                <div className="flex items-stretch my-2 justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <StatisticsCard title="Total Orders" value="45000" />
                  <StatisticsCard title="Total Orders" value="45000" />
                </div>
                <div className="flex items-stretch my-2 justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <StatisticsCard title="Total Orders" value="45000" />
                  <StatisticsCard title="Total Orders" value="45000" />
                </div>
                <div className="flex items-stretch my-2 justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <StatisticsCard title="Total Orders" value="45000" />
                  <StatisticsCard title="Total Orders" value="45000" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-lg font-medium whitespace-nowrap text-center tracking-wide mt-1.5 max-md:mt-10">
                <StatisticsCard title="total categories" value="6756" />
                <div className="bg-yellow-400 flex flex-col items-stretch h-[199px] mt-6 px-10 py-12 rounded-xl max-md:px-5">
                  <div className="text-black self-center mt-9">#####</div>
                  <div className="text-slate-800 mt-3 mb-7">Lorem Ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-7 pb-12 px-16 border-[3px] border-solid border-zinc-200 max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex flex-col justify-center items-center aspect-square w-full max-md:mt-10">
                <div className="text-fuchsia-800 text-center text-xl font-bold leading-7 tracking-normal bg-zinc-200 items-center aspect-square pt-40 pb-7 px-11 max-md:pt-10 max-md:px-5">
                  EASILY MANAGE YOUR CAREGIVERS <br />
                  ON <br />
                  ELDERPA{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex flex-col justify-center items-center aspect-square w-full max-md:mt-10">
                <div className="text-fuchsia-800 text-center text-xl font-bold leading-7 tracking-normal bg-zinc-200 items-center aspect-square pt-40 pb-7 px-11 max-md:pt-10 max-md:px-5">
                  EASILY MANAGE YOUR CAREGIVERS <br />
                  ON <br />
                  ELDERPA{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
