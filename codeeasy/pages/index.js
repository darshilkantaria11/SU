import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>CodeSquareX</title>
        <meta name="description" content="This is my page description." />

      </Head>
      <div className="bg-gray-100  h-screen">
        <div className="container mx-auto  flex justify-center items-center py-14 ">
          <div className="lg:flex mt-12 lg:justify-between lg:items-center w-full">
            <div className="lg:w-1/2">
              <h1 className="text-6xl font-bold text-gray-900 xl:font-open xl:font-semibold xl:p-6 mb-4 ">
                Website Solutions, Simplified.
              </h1>
              <p className="text-lg text-gray-700 xl:p-6">
                Ready to take your online presence to the next level? Browse our selection of web
                solutions and templates today and get started on your website journey!
              </p>
              <div className="flex flex-col items-center lg:flex-row lg:items-start xl:p-6">
                <Link className="xl:pr-12 xl:pl-3 xl:text-2xl bg-blue-600 hover:bg-blue-700 text-white xl:font-light py-2 px- rounded-full mt-4 flex items-center" href="/loginpage">
                  Get Started
                  <div className="animate-arrow xl:ml-2">&rarr;</div>
                </Link>
                <style jsx>{`
    .animate-arrow {
      animation: arrow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes arrow {
      0% {
        transform: translateX(10px);
      }
      50% {
        transform: translateX(20%);
      }
      100% {
        transform: translateX(10px);
      }
    }

    .flex {
      max-width: 100%;
      overflow: hidden;
    }

    @media screen and (min-width: 1024px) {
      .animate-arrow {
        margin-left: 1rem;
      }
    }
    @media screen and (max-width: 768px) {
      .animate-arrow {
        animation: none;
      }
    }
  `}</style>
              </div>


            </div>
            <div className="lg:w-1/2">
              <img src="home1.png" alt="Photo" className="rounded-lg mt-6 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
