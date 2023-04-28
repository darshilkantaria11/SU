import React from 'react'


const Home = () => {
  return (
    <>
    <div className="bg-gray-100 h-screen">
     <div className="container mx-auto  flex justify-center items-center py-8 ">
      <div className="lg:flex mt-12 lg:justify-between lg:items-center w-full">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold text-gray-900 xl:font-open xl:font-semibold xl:p-6 mb-4 ">Website Solutions, Simplified.</h1>
          <p className="text-lg text-gray-700 xl:p-6">Ready to take your online presence to the next level? Browse our selection of web solutions and templates today and get started on your website journey!</p>
        </div>
        <div className="lg:w-1/2">
          <img src="home1.png" alt="Photo" className="rounded-lg mt-6 "/>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home;