import Image from 'next/image';
import BidDetails from './BidDetails';

const BidCard = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-start xl:justify-around">
        <div className="relative h-[147px] w-[147px] ">
          <Image fill src={'/images/unsplash-8-uz-pyn-iu-rq.png'} alt="" />
        </div>
        <BidDetails />
      </div>
    </>
  );
};

export default BidCard;
