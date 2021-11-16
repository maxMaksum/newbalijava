import ReactPlayer from "react-player/lazy";
import { PlusIcon, XIcon } from "@heroicons/react/solid";

function Video({ playVideo, url }) {
  return (
    <section>
      <div className="flex flex-col w-100">
        <div className="">
          <ReactPlayer
            url={`${url}`}
            width="100%"
            height="100%"
            style={{ position: "", top: "0", left: "0" }}
            controls={true}
            playing={playVideo}
          />
        </div>
        <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5 ">
          <span className="font-semibold">Playing</span>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
            onClick={playVideo}
          >
            <XIcon className="h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
