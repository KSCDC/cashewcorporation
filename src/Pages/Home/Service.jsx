import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const RightPanel = () => {
  return (
    <div className="max-w-md">
      <h3 className="text-center lg:text-left text-3xl font-bold mb-2 lg:mb-4">
        Most trusted in our field
      </h3>
      <p className="text-center lg:text-left text-sm font-normal text-gray-600 mt-2 mb-6">
        Most calendars are designed for teams. State is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
      <div className="mt-8 flex flex-col gap-10 items-center lg:items-start">
        {/* first section */}
        <div className="flex items-center space-x-5">
          <FaArrowsDownToPeople className="text-4xl text-red-500" />
          <div className="flex flex-col items-start">
            <span className="font-bold">The quick for jump over the lazy dog</span>
            <span className="text-sm text-gray-600">
              Thing on a very small scale...
            </span>
          </div>
        </div>
        {/* second section */}
        <div className="flex items-center space-x-5">
          <MdAccessTimeFilled className="text-4xl text-red-500" />
          <div className="flex flex-col items-start">
            <span className="font-bold">The quick for jump over the lazy dog</span>
            <span className="text-sm text-gray-600">
              Thing on a very small scale...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const YoutubeVideo = () => {
  return (
    <div className="w-full">
      <iframe
        className="w-full h-[315px]"
        src="https://www.youtube.com/embed/R83BlU5nnbs?si=lKK8SdccgUqY9vwY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-wRTIe; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

function Service() {
  return (
    <div className="p-4 md:p-8 lg:p-12 ">
      <h3 className="text-4xl font-bold mb-6 text-center">
        We are providing the best business service.
      </h3>
      <p className="text-center max-w-3xl mx-auto text-gray-500 font-bold mb-10">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics Newtonian mechanics.
      </p>
      <div className="grid gap-10 lg:gap-20 grid-cols-1 lg:grid-cols-2">
        <YoutubeVideo />
        <RightPanel />
      </div>
    </div>
  );
}

export default Service;
