import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#FBEBB5] w-full h-[100vh] mt-3">
        <div className="mx-auto 2xl:w-[1500px] flex items-center justify-center">
          <div>
            <h1 className="text-[64px] font-poppins">Rocket single</h1>
            <h1 className="text-[64px] font-poppins">Seater</h1>
            <h1 className=" text-[16px] underline">
                Shop now
            </h1>
          </div>
          {/* Image */}
          <div className="w-[600px] h-[600px]">
            <Image
              src="/assets/Rocket single seater 1.png"
              alt="Rocket single seater"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="w-full h-auto bg-[#FAF4F4] ">
        <div className="mx-auto flex items-center justify-center 2xl:w-[1500px]">
          <div className = " flex flex-col">
            <div>
            <h1 className="font-poppins font-bold text-[20px]">Side table</h1>
            <h1 className=" text-[16px] underline">
                Shop now
            </h1>
            </div>
            <div>
            <Image
              src="/assets/Granite square side table 1.png"
              alt="Granite square side table"
              width={500}
              height={500}
            />
            </div>
          </div>
          <div className = " flex flex-col" >
            <div>
          <h1 className="font-poppins font-bold text-[20px]">Cloud Sofa</h1>
          <h1 className=" text-[16px] underline">
                Shop now
            </h1>
            </div>
            <div>
            <Image
              src="/assets/Cloud sofa three seater + ottoman_3 1.png"
              alt="Cloud sofa three seater"
              width={500}
              height={500}
            />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className=" w-full h-auto px-5 py-5">
        <div className="mx-auto items-center 2xl:w-[1500px]">
          <h1 className="text-[36px] font-poppins text-center">Top Picks For You</h1>
          <p className="text-[16px] font-poppins text-center">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor table and lights
          </p>
          <div className = "flex items-center justify-between">
          <div className = "items-center">
            <Image
              className="w-[240px] h-[174px]"
              src="/assets/Trenton modular sofa_3 1.png"
              alt="Trenton modular sofa"
              width={240}
              height={174}
            />
            <p className="font-poppins text-[16px]">Trenton modular sofa_3</p>
            <p className="text-[18px]">Rs.25000.00</p>
          </div>
          <div>
            <Image
              className="w-[255px] h-[185px]"
              src="/assets/Granite dining table with dining chair 1.png"
              alt="Granite dining table"
              width={255}
              height={185}
            />
            <p className="font-poppins text-[16px]">
              Granite dining table with dining chair
            </p>
            <p className="text-[18px]">Rs.25000.00</p>
          </div>
          <div>
            <Image
              className="w-[250px] h-[185px]"
              src="/assets/Outdoor bar table and stool 1.png"
              alt="Outdoor bar table and stool"
              width={250}
              height={185}
            />
            <p className="font-poppins text-[16px]">
              Outdoor bar table and stool
            </p>
            <p className="text-[18px]">Rs.25000.00</p>
          </div>
          <div>
            <Image
              className="w-[240px] h-[174px]"
              src="/assets/Plain console with teak mirror 1.png"
              alt="Plain console with teak mirror"
              width={240}
              height={174}
            />
            <p className="font-poppins text-[16px]">
              Plain console with teak mirror
            </p>
            <p className="text-[18px]">Rs.25000.00</p>
          </div>
          </div>
          <h1>
            <a href="#" className="font-poppins text-[16px] text-underline text-center font-bold">
              Shop now
            </a>
          </h1>
        </div>
      </div>

      {/* New Section */}
      <div className="w-full h-[1200px] bg-[#FFF9E5]">
        <div className="mx-auto flex items-center justify-center" >
          <div>
          <Image
            className="w-[983px] h-[799px]"
            src="/assets/Asgaard sofa 1.png"
            alt="Asgaard sofa"
            width={983}
            height={799}
          />
          </div>
          <div>
          <h1 className="font-bold text-[48px]">New Arrivals</h1>
          <h1 className="font-bold text-[48px]">Asgaard sofa</h1>
          <button className="text-[16px] w-[106px] h-[30px] bg-[#FFF9E5] text-white border-1 border-black">
            Order Now
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
