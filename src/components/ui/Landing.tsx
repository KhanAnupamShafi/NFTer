'use client';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
      <div className="flex h-[calc(100vh-120px)] items-center justify-between gap-[90px]">
        <div className="relative w-full max-w-[600px]">
          <h1 className="pb-5 font-serif text-4xl font-bold ">
            Discover, and collect Digital Art NFTs{' '}
          </h1>
          <p className="max-w-[470px] pb-10 text-xl text-[#565656]">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-10 py-5  text-base font-medium text-white shadow-sm hover:bg-indigo-700 lg:text-xl">
            Explore Now
          </button>
          <div className="flex items-center gap-10 pt-12">
            <div>
              <h2 className="pb-1 font-serif text-4xl font-bold tracking-wide">
                98K+
              </h2>
              <p className="text-xl text-[#565656]">Artwork</p>
            </div>
            <div>
              <h2 className="pb-1 font-serif text-4xl font-bold tracking-wide">
                28K+
              </h2>
              <p className="text-xl text-[#565656]">Auction</p>
            </div>
            <div>
              <h2 className="pb-1 font-serif text-4xl font-bold tracking-wide">
                18K+
              </h2>
              <p className="text-xl text-[#565656]">Artist</p>
            </div>
          </div>
        </div>
        <div className="relative h-[440px] w-full max-w-[400px] text-white">
          <div className="absolute left-0 z-40 -translate-x-1/2 translate-y-1/2"></div>
          <Image fill alt="" src={'/images/unsplash-1.png'} />
          <div className="absolute left-1/2 top-5 flex w-full max-w-[340px] -translate-x-1/2 transform flex-col items-start justify-between gap-2 rounded-lg  p-4 backdrop-blur-md">
            <h1 className="text-2xl font-bold">Abstr Gradient NFT</h1>
            <div className="flex items-center gap-3">
              <div className="bg-lightgray relative h-8 w-8 rounded-full bg-avatar bg-cover bg-center"></div>

              <p className="text-xl font-bold">Arkhan17</p>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 flex w-full max-w-[340px] -translate-x-1/2 transform items-center justify-between rounded-lg bg-white bg-opacity-20 p-4 backdrop-blur-md">
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
                        fill="#fff"
                        d="m12.671 11.38-6.17 3.866L.324 11.38 6.5.513l6.171 10.867Zm-6.17 5.108L.324 12.62 6.5 21.846l6.175-9.225L6.5 16.488Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 .513h13v21.333H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                0.25 ETH
              </h4>
            </div>
            <div>
              <p className="mb-2 text-xs">Ends in</p>
              <h4 className="font-bold">12h 43m 42s</h4>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-x-1/2 ">
            <div className="absolute top-[30%] z-50 translate-x-[125%] rounded-full bg-[#FFE0D4]">
              <Image
                width={25}
                height={25}
                src={'/images/ethereum-2.svg'}
                alt=""
              />
            </div>
            <div className="rounded-text rotating rounded-full bg-[#FFE0D4]">
              <svg viewBox="0 0 200 200">
                <path
                  id="textPath"
                  d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                  transform="translate(100,100)"
                  fill="none"
                  stroke-width="0"
                ></path>
                <g font-size="13.1px">
                  <text text-anchor="start">
                    <textPath
                      className="coloring text-xl tracking-wider"
                      xlinkHref="#textPath"
                      startOffset="0%"
                    >
                      &nbsp;&nbsp;&nbsp;Live &nbsp;&nbsp; Auction &nbsp;
                      &nbsp;&nbsp;&nbsp;. &nbsp; &nbsp; &nbsp; &nbsp;Live
                      &nbsp;&nbsp; Auction &nbsp;&nbsp;&nbsp;.
                    </textPath>
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
