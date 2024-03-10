function Leaders() {
  return (
    <div className="p-3">
      <div className="grid lg:flex items-center justify-evenly">
        {/* Mission Card 1 */}
        <div className="p-4 bg-white w-full lg:max-w-sm h-96 flex flex-col items-start mb-6 lg:mb-0 lg:mr-4 rounded-lg">
          <h2 className="text-2xl font-bold mt-6">Vission</h2>
          <p className="text-balance mt-6 text-gray-600">
            Commodo consequat voluptate labore mollit exercitation pariatur
            irure excepteur. Dolor officia minim culpa veniam mollit proident
            culpa pariatur velit cupidatat. Quis ut officia tempor id ea ex
            laboris mollit.Laborum anim elit nostrud amet quis. Aute amet sint
            nulla dolore proident elit exercitation. Quis exercitation proident
            occaecat ut consectetur occaecat. Occaecat dolor irure mollit irure.
            Esse non nostrud consectetur commodo sunt excepteur irure laboris
            ex. Dolor exercitation ad consectetur Lorem incididunt ea nostrud
            mollit consequat.
          </p>
        </div>

        {/* Company Image */}
        <img
          src="/images/company.jpeg"
          alt="Company Image"
          className="object-cover h-96 rounded-lg lg:w-96 mb-6"
        />

        {/* Mission Card 2 */}
        <div className="p-4 bg-white w-full lg:max-w-sm h-96 flex flex-col items-start rounded-lg">
          <h2 className="text-2xl font-bold mt-6">Mission</h2>
          <p className="text-balance mt-6 text-gray-600">
            Commodo consequat voluptate labore mollit exercitation pariatur
            irure excepteur. Dolor officia minim culpa veniam mollit proident
            culpa pariatur velit cupidatat. Quis ut officia tempor id ea ex
            laboris mollit.Laborum anim elit nostrud amet quis. Aute amet sint
            nulla dolore proident elit exercitation. Quis exercitation proident
            occaecat ut consectetur occaecat. Occaecat dolor irure mollit irure.
            Esse non nostrud consectetur commodo sunt excepteur irure laboris
            ex. Dolor exercitation ad consectetur Lorem incididunt ea nostrud
            mollit consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
