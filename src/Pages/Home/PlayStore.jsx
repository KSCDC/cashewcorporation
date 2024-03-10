function PlayStore() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/banner/app.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <div className="lg:flex items-center justify-between grid ">
        {/* app layout */}
        <div className="relative text-black text-4xl flex flex-col items-center justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-white shadow-xl"></div>
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            src="/images/phone.png"
            className="relative"
            alt="mobile app"
          />
        </div>
        {/* btns */}
        <div className="">
          <h2 data-aos="zoom-in" className="text-3xl lg:text-5xl text-black font-bold text-center">
            Try Our KSCDC Mobile Apps
          </h2>
          <p data-aos="zoom-in" className="font-bold max-w-2xl text-center mt-4 text-black capitalize">For buying the <span className="text-blue-500">CDC Brand</span>  Value  Added premium Cashew Products, KSCDC's Cashewcart App is now available on Playstore and App Store.</p>
          <div className="flex items-center justify-center">
            <img
              data-aos="zoom-out"
              src="/images/google-play.png"
              className="h-16"
              alt="Playstore image"
            />
            <img
              data-aos="zoom-out"
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg"
              className="h-11"
              alt="playstore image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayStore;
