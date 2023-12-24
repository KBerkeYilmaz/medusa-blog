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
            alt=" "
          />
        </div>

        <Image
          className="w-[801px] h-[796px] absolute right-[67px] -top-[60px] z-10 bg-transparent"
          src={"/splash.svg"}
          width={801}
          height={796}
          alt=" "
        />

        <div className="h-full w-full flex justify-start items-center z-40 text-white">
          <div>
            <h1>Geleceğe Bizimle Ulaş!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed idt.
            </p>
            <button>Şimdi Başla</button>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen overflow-hidden">
        <div className="flex flex-col items-center w-full h-full">
          <div className="w-full flex items-center">
            <h1 className="text-4xl w-1/2">Blog Yazılarını Görüntüle</h1>
          </div>
          <div className="grid grid-cols-2 gap-10 w-full h-full m-10">
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
      <div className="flex flex-col items-center w-full h-full">
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
      <section className="h-screen w-screen bg-yellow-400">
        <h1>Akış</h1>
      </section>
      <section className="h-screen w-screen bg-blue-400">
        <h1>İletişim</h1>
      </section>
    </div>
  );
};

export default Home;
