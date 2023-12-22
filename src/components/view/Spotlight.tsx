import Image from 'next/image';

const Spotlight = () => {
  return (
    <>
      <Image
        width={400}
        height={420}
        src={'/images/unsplash-f-56-y-7-dgr-akc.png'}
        alt=""
      />
      <div className="md:gap:0 flex w-full max-w-[400px] items-center justify-between gap-7 pt-4 md:justify-between">
        {' '}
        <div>
          <h1 className="text-xl font-bold">The Futr Abstr</h1>
          <div className="flex items-center gap-3">
            <div className="bg-lightgray relative h-8 w-8 rounded-full bg-avatar bg-cover bg-center"></div>

            <p className="text-sm font-bold text-dim">10 in the stock</p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs">Current Bid</p>
          <h4 className="flex items-center justify-center gap-2 font-bold">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={22}
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#3A3A3A"
                    d="M12.671 11.456 6.5 15.323.325 11.456 6.5.59l6.171 10.866ZM6.5 16.565.325 12.698 6.5 21.923l6.175-9.225L6.5 16.565Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 .59h13v21.333H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            0.25 ETH
          </h4>
        </div>
      </div>
    </>
  );
};

export default Spotlight;
