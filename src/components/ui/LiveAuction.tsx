import BidCard from '../view/BidCard';
import Spotlight from '../view/Spotlight';
import TopCollector from './TopCollector';

const LiveAuction = () => {
  return (
    <div className="mx-auto  max-w-[1440px] items-center px-1 py-[130px]">
      <div className="flex flex-col gap-12 xl:flex-row xl:gap-0">
        <div className="flex w-full grid-cols-5 grid-rows-5 flex-col gap-4 px-5 sm:grid lg:grid-rows-3 xl:row-auto xl:px-0">
          <div className="col-span-full row-span-2 w-full sm:row-span-2 md:w-[400px] lg:row-span-full xl:col-auto  ">
            <Spotlight />
          </div>

          <div className="col-span-full col-start-1 row-start-3 mb-5 sm:mb-0 md:col-span-3 md:ml-5 lg:col-start-3 lg:row-start-1 xl:col-span-2 xl:col-start-3 xl:row-span-1  ">
            <BidCard />
          </div>
          <div className="col-span-full col-start-1 row-start-4 mb-5  sm:mb-0 md:col-span-3 md:ml-5 lg:col-start-3 lg:row-start-2 xl:col-span-2  xl:col-start-3 xl:row-span-1 ">
            <BidCard />
          </div>
          <div className="col-span-full  col-start-1 row-start-5 mb-5  sm:mb-0 md:col-span-3 md:ml-5 lg:col-start-3 lg:row-start-3 xl:col-span-2  xl:col-start-3 xl:row-span-1 ">
            <BidCard />
          </div>

          {/* <div className="col-span-full  row-span-2 border-l border-[#ECECEC] xl:col-span-3 xl:col-start-8 xl:row-span-full ">
           <TopCollector />
         </div> */}
        </div>
        <div className="col-span-full  row-span-2 border-l border-[#ECECEC] xl:col-span-3 xl:col-start-8 xl:row-span-full ">
          <TopCollector />
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
