"use client";

const History = () => {
  return (
    <div
      className="relative p-6 md:p-8 bg-cover flex justify-end lg:bg-center lg:h-auto"
      style={{ backgroundImage: "url('/banner-2.png')" }} 
    >
      <div className="relative z-10 text-white flex flex-col items-start gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          We Design Your <span className='text-secondary'>Homey</span> <br/> 
          <span className='text-secondary'>Space</span> for Happy Living
        </h2>
        <img src='/model1.png' alt='Model' className='w-full lg:w-3/4' />
      </div>
    </div>
  );
};

export default History;
