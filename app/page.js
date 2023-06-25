"use client";
import {
  BsThreeDots,
  BsFillSuitHeartFill,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { GoShare } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { AiOutlineRight } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaLink, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Image from "next/image";
import img from "./assets/31.jpeg";
import img2 from "./assets/16.jpeg";
import { data } from "./config/data";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import { useState } from "react";

const styles = {
  head: "flex justify-between items-center hover:bg-slate-200 duration-200 px-4 py-3 rounded-lg",
  body: "lg:text-lg text-sm font-semibold flex gap-4 items-center",
};

const shareUrl = "https://linktree-clone-adol.vercel.app/";

export default function Home() {
  const [copy, setCopy] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const clickModal = () => {
    setShowModal(!showModal);
  };

  const onCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(shareUrl);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
      <main className="bg-black">
        <div className="lg:w-[60%] mx-auto lg:p-7 p-3">
          <div className="flex justify-end items-center">
            <button
              onClick={clickModal}
              data-tip="Share"
              className="bg-white px-3 py-3 text-gray-700 rounded-full flex justify-center items-center lg:tooltip lg:tooltip-right"
            >
              <BsThreeDots />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={img}
              alt="image"
              className="object-cover object-center w-[120px] h-[120px] rounded-full"
            />
          </div>
          <p className="text-center my-5 text-2xl font-bold text-white">
            @abdulmajidabdalah_
          </p>
          <div className="grid grid-cols-1 gap-y-3">
            {data.map((item) => (
              <div className="bg-[#222222] w-full items-center px-4 py-4 rounded-xl text-white font-semibold text-lg hover:scale-105 duration-200">
                <a
                  href={item.url}
                  key={item.id}
                  target="_blank"
                  rel="no_referrer"
                >
                  <p className="text-center">{item.name}</p>
                </a>
                <div
                  onClick={clickModal}
                  className="float-right hover:bg-[#444] duration-300 px-1 py-1 rounded-full -mt-7 cursor-pointer"
                >
                  <p>
                    <GoShare />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white text-center my-14 flex justify-center items-center gap-2">
            Made with <BsFillSuitHeartFill /> by Abdul Majid Abdalah
          </p>
        </div>
        {/* MODAL */}
        {showModal ? (
          <div className="bg-white/10 backdrop-brightness-50 lg:h-screen fixed lg:top-0 bottom-0 overflow-y-auto z-40 flex justify-center items-center px-2 py-1 lg:py-5 w-full">
            <div className="bg-white rounded-lg py-4 px-2">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold lg:ml-32">
                  Share This Linktree Clone
                </h1>
                <div onClick={clickModal} className="mr-5 cursor-pointer">
                  <GrClose />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-1 lg:gap-2 mt-3 lg:mt-8">
                <FacebookShareButton
                  url={shareUrl}
                  quote="Never regret a day in your life. Good days bring you happiness and bad days give you experience"
                  hashtag="#liktree-clone #nextjs #tailwindcss #front-end-developer"
                >
                  <div className={styles.head}>
                    <div className={styles.body}>
                      <div className="text-blue-600 text-xl">
                        <ImFacebook2 />
                      </div>
                      <p>Share On Facebook</p>
                    </div>
                    <div className="text-xl">
                      <AiOutlineRight />
                    </div>
                  </div>
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <div className={styles.head}>
                    <div className={styles.body}>
                      <div className="text-blue-600 text-xl">
                        <BsLinkedin />
                      </div>
                      <p>Share On LinkedIn</p>
                    </div>
                    <div className="text-xl">
                      <AiOutlineRight />
                    </div>
                  </div>
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl}>
                  <div className={styles.head}>
                    <div className={styles.body}>
                      <div className="text-blue-600 text-2xl">
                        <FaTwitterSquare />
                      </div>
                      <p>Share On Twitter</p>
                    </div>
                    <div className="text-xl">
                      <AiOutlineRight />
                    </div>
                  </div>
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <div className={styles.head}>
                    <div className={styles.body}>
                      <div className="text-green-500 text-2xl">
                        <FaWhatsappSquare />
                      </div>
                      <p>Share On Whatsapp</p>
                    </div>
                    <div className="text-xl">
                      <AiOutlineRight />
                    </div>
                  </div>
                </WhatsappShareButton>
                <TelegramShareButton url={shareUrl}>
                  <div className={styles.head}>
                    <div className={styles.body}>
                      <div className="text-blue-600 text-2xl">
                        <BsTelegram />
                      </div>
                      <p>Share On Telegram</p>
                    </div>
                    <div className="text-xl">
                      <AiOutlineRight />
                    </div>
                  </div>
                </TelegramShareButton>
                <EmailShareButton url={shareUrl}>
                  <div className={styles.head}>
                    <div className={styles.body}>
                      <div className="text-purple-600 text-2xl">
                        <ImMail />
                      </div>
                      <p>Share On Email</p>
                    </div>
                    <div className="text-xl">
                      <AiOutlineRight />
                    </div>
                  </div>
                </EmailShareButton>
              </div>
              <div
                onClick={onCopy}
                className="flex justify-between items-center lg:px-3 px-2 rounded-md mt-3 py-1 lg:py-4 border border-slate-400 cursor-pointer"
              >
                <div className="flex items-center gap-3 lg:text-xl font-semibold">
                  <FaLink />
                  <p className="lg:text-base text-sm">{shareUrl}</p>
                </div>
                {copy ? <p className="text-success text-sm py-1">Copied!</p> : <p>Copy</p>}
              </div>
              <div className="chat chat-start mt-3 lg:mt-10">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image src={img2} />
                  </div>
                </div>
                <div className="chat-bubble text-xs">
                  “Success is going from failure to failure without losing your
                  enthusiasm” <br />
                  True or True ?
                </div>
              </div>
            </div>
          </div>
        ) : undefined}
      </main>
  );
}
