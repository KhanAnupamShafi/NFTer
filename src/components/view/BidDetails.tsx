const BidDetails = () => {
  return (
    <div className="">
      <div className="w-full pb-1">
        <h1 className="w-full text-lg font-bold">The Futr Abstr</h1>
        <div className="flex items-center gap-3 py-2">
          <div className="bg-lightgray relative h-8 w-8 rounded-full bg-avatar bg-cover bg-center"></div>

          <div className="rounded-md border border-[#00AC4F] p-2 text-xs font-bold text-[#00AC4F]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9}
                height={14}
                fill="none"
                className="mr-1 inline"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#00AC4F"
                    d="M8.315 7.131 4.265 9.67.214 7.13 4.266 0l4.05 7.131Zm-4.05 3.353L.214 7.946 4.266 14l4.052-6.054-4.052 2.538Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h8.531v14H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>{' '}
            0.25 ETH
          </div>
          <span className="ml-2 text-sm text-dim">1 of 8</span>
        </div>
      </div>
      <button className='hover:text-gray-900" flex items-center  justify-center whitespace-nowrap rounded-full border border-transparent bg-indigo-600 bg-primary px-5 py-3   text-sm font-medium   text-white  shadow-sm hover:bg-indigo-700'>
        Place A Bid
      </button>
    </div>
  );
};

export default BidDetails;
