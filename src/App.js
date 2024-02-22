import React from "react";
import vedio from "./adidas.mp4";
import adidas from "./adidas.mp4";
import kasper from "./kasp.mp4";
import kasp from "./kasp (1).mp4";
import david from "./David.mp4";

import tshirt from "./t-removebg-preview.png";
import adi from "./download (2).png";
import download from "./download.jpg";
import d1 from "./download1.png";
import maths from "./masthead-v2.png";
import k from "./k.png";
import logo from "./logo (1).png";
import kas from "./img21.png";
import im13 from "./img13.png";
import Adidas from "./samsung.gif";
import circle from "./adidas-circle.png";
import im15 from "./img-15.jpg";
import im11 from "./img11.png";
import h from "./h.jpg";
import text from "./text.jpg";
import boys from "./boys.png";
import elifc from "./Ellipse 67.svg";
import architect from "./architects.png";
import man from "./aia-baner-2.png";
import AIA from "./aia-banner.jpg";
import gifhy from "./giphy.gif";
import AIAlogo from "./AIA_Group_logo.png";
import aiabanner from "./aia-baner-22.jpg";
import eastenders from "./eastenders.png";
import Albertsqaure from "./albertsqaure.png";
import blacklady from "./blacklady.png";
import family from "./family.jpg";
import sq from "./sq.jpg";
import messi from "./messi.jpg";
import messi1 from "./messi1.jpg";
import messi2 from "./messi2.jpg";
import pepsi from "./pepsi_2_1.gif";
import pepsi1 from "./pepsi1.png";
import pepsilogo from "./pepsilogo.jpg";
import pepsidrink from "./pepsi-drink.gif";
import T5 from "./T5.jpg";
import tGift from "./t-gift.gif";
import tennetslogo from "./tennents-logo.png";
import tennets1 from "./tennents1.png";
import football from "./football.gif";
import instagram from "./Instagram.svg"
function App() {
  const handleVideoClick = () => {
    const videoElement = document.getElementById("fullscreen-video");

    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      }
    }
  };
  const handleVideoClickk = () => {
    const videoElemen = document.getElementById("fullscreen-vide");

    if (videoElemen) {
      if (videoElemen.requestFullscreen) {
        videoElemen.requestFullscreen();
      } else if (videoElemen.mozRequestFullScreen) {
        videoElemen.mozRequestFullScreen();
      } else if (videoElemen.webkitRequestFullscreen) {
        videoElemen.webkitRequestFullscreen();
      }
    }
  };
  const handleVideoClic = () => {
    const videoEleme = document.getElementById("fullscreen-vid");

    if (videoEleme) {
      if (videoEleme.requestFullscreen) {
        videoEleme.requestFullscreen();
      } else if (videoEleme.mozRequestFullScreen) {
        videoEleme.mozRequestFullScreen();
      } else if (videoEleme.webkitRequestFullscreen) {
        videoEleme.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className="App relative">
      <div className="absolute  top-10 right-0 mt-4 mr-[230px] ">
        <img className="fixed" src={logo} alt="Logo" />
      </div>
      <video
        id="fullscreen-video"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={vedio} type="video/mp4" />
      </video>
      <div className="m-10 ">
        <h1 className="text-4xl font-extrabold text-pink-500">
          ADIDAS X MANCHESTER UNITED
        </h1>
        <div className="flex justify-center mb-[-100px]">
          <img src={tshirt} />{" "}
        </div>
        <div className="flex justify-center mt-4 ">
          <img className=" mr-[-100px] mt-[-80px]" src={tshirt} />

          <video
            id="fullscreen-video"
            onClick={handleVideoClick}
            className="fullscreen-video w-[50%] h-[350px] object-cover rounded-xl  border-gray-400 border-[4px]"
            autoPlay
            loop
            muted
          >
            <source src={adidas} type="video/mp4" />
          </video>
          <img className="-z-10 ml-[-100px] mt-[-80px]" src={d1} />
        </div>
        <div className="flex justify-between">
          <div className="w-[200px] ml-[230px] mt-[-70px]">
            <img className="animate-spin" src={adi} />
          </div>
          <div className=" flex justify-end w-[200px] h-[150px] mr-[220px]  mt-[-70px] ">
            <img className="-rotate-12 rounded-xl " src={download} />
          </div>
        </div>
        <p className="w-[500px] mt-[-70px] text-blue-900">
          Utilising the unique design of this special kit and teaming up with
          Aitch and Dutchavelli we created a slick and smooth mash up dashed
          with a tinge of comedy elements.
        </p>
      </div>
      <div className="m-10">
        <h className="text-4xl font-extrabold text-pink-500 ">
          SAMSUNG X STERLING X NINETEEN
          <br />
          SIXTY TWO
        </h>
        <div className="mt-[100px]">
          <div className="flex justify-center mt-4 ">
            <img
              className="w-[250px] h-[200px] mr-[-100px] mt-[-80px] z-10"
              src={download}
            />

            <video
              className="fullscreen-video w-[50%] h-[350px] object-cover rounded-xl
                border-gray-400 border-[4px]"
              autoPlay
              loop
              muted
            >
              <source src={adidas} type="video/mp4" />
            </video>
            <img className="-z-10 ml-[-100px] mt-[-80px] rounded-xl" src={d1} />
          </div>
          <div className="flex justify-between">
            <div className="w-[200px] ml-[230px] mt-[-70px]">
              <img className="animate-spin" src={adi} />
            </div>
            <div className=" flex justify-end w-[250px] mr-[200px]  mt-[-70px] ">
              <img className="rounded-xl" src={download} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[-100px] -z-10 text-blue-900">
          <p className="w-[500px]">
            Samsung called upon Raheem Sterling and his clothing range 1962 to
            collaborate and create a piece that was earthy and relatable
          </p>
        </div>
      </div>
      <div className="m-10 mt-[100px]">
        <h1 className="text-4xl font-extrabold text-pink-600 mt-11">
          KASPERSKY
        </h1>
        <div div className="mt-[150px]">
          <div className=" flex justify-center">
            <img className="w-[200px]" src={kas} />
          </div>
          <div className="flex justify-center mt-4 ">
            <video
              id="fullscreen-vid"
              onClick={handleVideoClic}
              className="fullscreen-video w-[200px] h-[400px] object-cover  mt-[-50px]  -z-10"
              autoPlay
              loop
              muted
            >
              <source src={kasper} type="video/mp4" />
            </video>

            <video
              id="fullscreen-vide"
              onClick={handleVideoClickk}
              className="fullscreen-video w-[45%] h-[300px] object-cover rounded-xl  border-red-600 border-[4px] -z-10"
              autoPlay
              loop
              muted
            >
              <source src={kasp} type="video/mp4" />
            </video>
            <div className="ml-[20px]">
              <img className="-z-10 w-[200px]  mt-[-20px] " src={im13} />
              <img className="-z-10 w-[200px] mt-3  " src={im13} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[150px] ml-[230px] mt-[-150px] -z-10">
              <img className="rounded-full  animate-spin" src={k} />
            </div>
            <div className=" flex justify-end w-[250px] mr-[300px]  mt-[-120px] ">
              <img src={maths} />
            </div>
          </div>
        </div>
        <div className="w-[500px] mt-[-100px] z-20 text-blue-900">
          <span>
            Here we see Officer Kaspersky challenging a hacker, we created a
            banana suit and styled multiple online presences to create this fun
            and engaging commercial show worldwide
          </span>
        </div>
      </div>

      <div className="m-10 mt-[100px]">
        <h1 className="text-4xl text-pink-600  font-extrabold">ADIDAS - 4D</h1>
        <div div className="mt-[150px]">
          <div className="w-[100px] mb-[-20px]  z-10 ml-[350px] animate-spin">
            <img className="" src={circle} />
          </div>
          <div className="flex justify-center mt-4 ">
            <video
              id="fullscreen-vid"
              onClick={handleVideoClic}
              className="fullscreen-video w-[200px] h-[380px] object-cover  mt-[-50px] mr-[-50px]  -z-30"
              autoPlay
              loop
              muted
            >
              <source src={kasper} type="video/mp4" />
            </video>

            <video
              id="fullscreen-vide"
              onClick={handleVideoClickk}
              className="fullscreen-video w-[40%] h-[280px] object-cover z-10 "
              autoPlay
              loop
              muted
            >
              <source src={kasp} type="video/mp4" />
            </video>
            <div>
              <img
                className="-z-10 w-[200px] mt-[-100px] ml-[-50px] rounded-xl  "
                src={im15}
              />
              <img className="-z-10 w-[200px] mt-[100px]  " src={Adidas} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[150px] ml-[230px] mt-[-150px] -z-10">
              {/* <img className="rounded-full  animate-spin" src={k} /> */}
            </div>
            <div className=" w-[250px] mr-[350px] mt-[-60px]">
              <img src={im11} />
            </div>
          </div>
        </div>

        <div className="w-[500px] mt-[-70px] z-20 text-blue-900">
          <span>
            Here we see Officer Kaspersky challenging a hacker, we created a
            banana suit and styled multiple online presences to create this fun
            and engaging commercial show worldwide
          </span>
        </div>
      </div>
      {/* section other  */}
      <div className="m-10 mt-[100px]">
        <h1 className=" md:order-1 text-4xl text-pink-600  font-extrabold">
          ARCHITECTS TEAR GAS
        </h1>
        <div className="flex justify-center md:ml-[60px] mt-[100px] ">
          <img className="mt-6 -z-20 mr-[-30px] w-[265px] h-[280px]" src={h} />

          <video
            id="fullscreen-vide"
            onClick={handleVideoClickk}
            className="fullscreen-video w-[40%] h-[320px] rounded-xl border border-gray-400 object-cover -z-10 "
            autoPlay
            loop
            muted
          >
            <source src={kasp} type="video/mp4" />
          </video>
          <div>
            <img
              className="z-10 w-[600px] mt-[-50px] ml-[-200px] rounded-xl  "
              src={text}
            />
            <img className=" w-[230px]" src={boys} />
            <img
              className=" -z-20 ml-[-100px] mt-[-80px] w-[200px]"
              src={elifc}
            />
          </div>
        </div>
        <div className="w-[250px] mt-[-120px] relative left-[300px]">
          {" "}
          <img src={architect} />
        </div>

        <div className="w-[500px] md:order-2  z-20 text-blue-900 ">
          {" "}
          <span>
            The architects showcase their talents and quality with this engaging
            mini film. Directed by the band themselves we created a great film
            that crosses between their musical styling and playful nature.
          </span>
        </div>
      </div>
      {/* section  */}
      <div className="m-10 mt-[100px]">
        <h1 className=" md:order-1 text-4xl text-pink-600  font-extrabold">
          DAVID BECKHAM AIA
        </h1>
        <div className="flex justify-center md:ml-[60px] mt-[100px] ">
          <img
            className="mt-[-20px] -z-20 mr-[-10px] w-[180px] h-[370px]"
            src={man}
          />

          <video
            id="fullscreen-vide"
            onClick={handleVideoClickk}
            className="fullscreen-video w-[45%] h-[320px] rounded-xl  border-green-300 border-[4px] object-cover -z-10 "
            autoPlay
            loop
            muted
          >
            <source src={david} type="video/mp4" />
          </video>
          <div className="mt-[-30px]">
            <img className="z-10 w-[230px]   rounded-xl  " src={gifhy} />

            <img className=" w-[230px]   " src={AIA} />
          </div>
        </div>
        <div className=" -z-20 w-[150px] ml-[270px] mt-[-70px]">
          <img className="animate-spin" src={AIAlogo} />
        </div>
        <div className="flex justify-center mt-[-480px]">
          <img
            className="mt-[-20px] -z-20 mr-[-10px] w-[230px] h-[460px]"
            src={aiabanner}
          />
        </div>

        <div className="w-[500px] md:order-2  z-20 text-blue-900 ">
          <span>
            David Beckham and his natural style was fin to style as he was
            looking to create a casual shoot for his own production company. It
            was part of three shoots we did on the day including one for
            Maserati.
          </span>
        </div>
      </div>
      {/* section  */}
      <div className="m-10 ">
        <h1 className=" md:order-1 text-4xl text-pink-600  font-extrabold">
          SUNNYSIDE IS
          <br />
          EASTENDERS
          <br />
          ‘ITS WHO WE ARE’
        </h1>
        <div className="flex justify-center mb-[-55px] -z-10">
          <img className="w-[300px]" src={Albertsqaure} />
        </div>
        <div className="flex justify-center md:ml-[60px] ">
          <div className="mt-10">
            <img
              className="mt-[-20px] -z-20 mr-[-10px] w-[220px] rounded-xl"
              src={eastenders}
            />
            <img className="w-[220px] mt-10 rounded-xl" src={Albertsqaure} />
          </div>
          <video
            id="fullscreen-vide"
            onClick={handleVideoClickk}
            className="fullscreen-video w-[50%] h-[320px] rounded-xl  border-green-300 border-[4px] object-cover z-10 "
            autoPlay
            loop
            muted
          >
            <source src={david} type="video/mp4" />
          </video>
          <div className="mt-[-30px] ml-[-70px] ">
            <img className="-z-10 w-[280px] mt-[-30px]    " src={blacklady} />

            <img className=" -z-10 w-[280px] mt-[120px]   " src={family} />
          </div>
        </div>
        <div className="z-10 flex ml-[280px] gap-11 mt-[-180px] ">
          <img className="w-[160px]" src={elifc} />
          <img className="mt-[60px] w-[300px]" src={sq} />
        </div>
        <div className="w-[500px] md:order-2  z-20 text-blue-900 mt-[-50px] ">
          <span>
            Eastenders launched there new campaign to showcase all of the new
            storylines at the time. We tried to capture the gritty nature and
            mixed in some amazing colourful moments to showcase the great tools
            we had at our disposal.
          </span>
        </div>
      </div>
      {/* section  */}

      <div className="m-10 mt-[100px]">
        <h1 className=" md:order-1 text-4xl text-pink-600  font-extrabold">
          PEPSI
        </h1>
        <div className="flex justify-center mb-[-125px] ">
          <img className="w-[350px]" src={pepsi1} />
          <img
            className="w-[100px] h-[100px] mr-[-300px] z-0 animate-spin "
            src={pepsilogo}
          />
        </div>
        <div className="flex justify-center  md:ml-[60px] ">
          <div className="mt-10">
            <img className="mt-[-20px] z-0 w-[220px]" src={messi1} />
            <img
              className="z-0 w-[220px]  mt-10 rounded-xl -rotate-12"
              src={messi}
            />
          </div>
          <video
            id="fullscreen-vide"
            onClick={handleVideoClickk}
            className="fullscreen-video w-[50%] h-[320px] rounded-xl  border-green-300 border-[4px] object-cover  "
            autoPlay
            loop
            muted
          >
            <source src={david} type="video/mp4" />
          </video>
          <div className=" ">
            <img className=" -z-10 w-[220px]   " src={messi2} />
          </div>
        </div>
        <div className="w-[300px] ml-[500px] mt-[-130px] flex">
          {" "}
          <img src={pepsi} />
          <img
            className="w-[250px] h-[250px] -z-10 mt-[-30px] ml-[70px]"
            src={pepsidrink}
          />
        </div>
        <div className="w-[500px] md:order-2  z-20 text-blue-900 mt-[-100px] ">
          <span>
            Working with Messi and Ronaldinho was a dream come true. Having been
            inspired by Pepsi adverts growing up this commercial was an
            incredible experience filmed in Paris.
          </span>
        </div>
      </div>
      {/* section  */}
      <div className="m-10 mt-[100px]">
        <h1 className=" md:order-1 text-4xl text-pink-600  font-extrabold">
          TENNENTS
        </h1>

        <div className="flex justify-center mb-[-70px] ">
          <img className="w-[300px]" src={tGift} />
        </div>
        <div className="flex justify-center  md:ml-[60px] ">
          <div className="">
            <img className="mt-[-20px] z-0 w-[230px] rounded" src={T5} />
          </div>
          <video
            id="fullscreen-vide"
            onClick={handleVideoClickk}
            className="fullscreen-video w-[50%] h-[320px] rounded-xl  border-green-300 border-[4px] object-cover  "
            autoPlay
            loop
            muted
          >
            <source src={david} type="video/mp4" />
          </video>
          <div className=" ">
            <img className=" -z-10 w-[220px]   " src={tennetslogo} />
            <img
              className="w-[250px] rotate-12 ml-[-30px] rounded"
              src={tennets1}
            />
          </div>
        </div>
        <div className="ml-[250px] mt-[-100px] ">
          <img src={football} />
        </div>
        <div className="w-[500px] md:order-2  z-20 text-blue-900 mt-[-50px] ">
          <span>
            In Scotland the people use Oooft for pretty much everything, so we
            thought we’d have some fun with it…This branded colour advert shows
            a fun twist on a Scotlands favourite beer.
          </span>
        </div>
      </div>
      {/* footer section  */}
      <div className="p-[30px] bg-black">
        <h1 className="text-3xl font-bold text-purple-500 my-[100px]">
          THANKS FOR LOOKING, WITH OVER 15 YEARS OF EXPERIENCE IN THE INDUSTRY
          THIS IS A TINY SNIPPET OF WORK I HAVE DONE RECENTLY. IF YOU HAVE
          ANYTHING MORE SPECIFIC OR WANT TO SEE MY FULL PORTFOLIO PLEASE GET IN
          TOUCH ON<br/><br/>
          LUKEINPRODUCTION@GMAIL.COM

        </h1>
        <div className="flex justify-between text-white ">
          <img className="w-[50px]" src={instagram}/>
        <ul className="flex gap-4 align-items-center ">
          <li>PRIVACY POLICY</li>
          <li>TERMS OF SERVICE</li>
        </ul>
        </div>
        
      </div>
    </div>
  );
}

export default App;
