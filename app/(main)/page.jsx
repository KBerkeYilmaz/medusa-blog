import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

export const blogPosts = [
  { number: 1, title: "test", article: "article article article article" },
  { number: 2, title: "test1", article: "article article article article" },
  { number: 3, title: "test2", article: "article article article article" },
  { number: 4, title: "test3", article: "article article article article" },
];

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative text-white bg-black -z-50">
      <section className="h-screen w-screen relative px-[67px]">
        <div className="absolute w-[218px] h-[218px] top-[129px] left-[44px] flex justify-center items-center">
          <Image
            className="z-20 absolute bg-transparent rounded-full shadow-3xl shadow-[#F9D866]"
            src={"/Ellipse 171.svg"}
            width={172.22}
            height={172.22}
            alt="güneş"
          />
        </div>

        <Image
          className="w-[801px] h-[796px] absolute right-[67px] z-0 -top-[60px]"
          src={"/splash.svg"}
          width={801}
          height={796}
          alt="galaksi"
        />

        <div className="h-full w-full flex justify-start items-center z-40 text-white">
          <div>
            <h1 className="text-[4rem]">Geleceğe Bizimle Ulaş!</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed idt.
            </p>
            <button>Şimdi Başla</button>
          </div>
        </div>
      </section>

      {/* BLOG POSTS */}

      <section className="h-[50vh] w-screen overflow-hidden">
        <div className="flex flex-col items-center w-full h-full px-[67px]">
          <div className="w-full flex items-center">
            <h1 className="text-4xl w-1/2">Blog Yazılarını Görüntüle</h1>
          </div>
          <div className="grid grid-cols-4 gap-10 w-full h-full m-10">
            {blogPosts.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-red-300 rounded-[10px] max-h-fit"
                >
                  <h1>{item.number}</h1>
                  <h2>{item.title}</h2>
                  <p>{item.article}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="h-screen w-screen">
        <div className="flex flex-col items-center w-full h-full px-[67px]">
          <div className="w-full flex items-center">
            <h1 className="text-4xl w-1/2">Galeriyi Görüntüle</h1>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-10 w-full h-full m-10">
            <div className="bg-purple-400"></div>
            <div className="bg-orange-400"></div>
            <div className="bg-violet-400"></div>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen">
        <div className="flex flex-col items-center justify-center w-full h-[50vh] px-[67px]">
          <div className="lg:w-[1312px] h-[225px] flex items-center justify-evenly border-white border-[1px] lg:gap-[92px] rounded-[27px] lg:px-[56px] lg:py-[24px]">
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start">Ücretsiz Kargo</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start text-[24px]">
                İade Garantisi
              </h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start">Sınırsız Destek</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start">Taksitli Ödeme</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="h-[50vh] w-screen bg-blue-400">
        <h1>İletişim</h1>
      </section>
    </div>
  );
};

export default Home;
