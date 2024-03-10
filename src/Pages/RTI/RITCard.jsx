
const information = [
    {
      title: "State Public information officer",
      name: "Shri. Ajith S (Personal Manager)",
      address: "The Kerala State Cashew Development Corporation Ltd, Cashew House, Post Box No.13, Kollam-691001, India",
      mobile: "(Mob:8281114648)",
    },
    {
      title: "Assistant Public information officer",
      name: "Shri. Rajesh Prathap (Superintendent)",
      address: "The Kerala State Cashew Development Corporation Ltd, Cashew House, Post Box No.13, Kollam-691001, India",
      mobile: "(Mob:9495553535)",
    },
    {
      title: "Appellate authority",
      name: "Shri. Sunil John K (Managing Director)",
      address: "The Kerala State Cashew Development Corporation Ltd, Cashew House, Post Box No.13, Kollam-691001, India",
      mobile: "(Mob: 9847071750)",
    },
  ];
  const RITCard = () => (
    <main>
        {information.map((value) => (
            <div  className="flex group mt-2">
            <div className="w-96 hidden lg:flex bg-white group-hover:bg-indigo-500 group-hover:rounded-xl group-hover:text-white transition duration-300 transform group-hover:scale-105 p-6">
              <h3 className="font-bold text-xl">{value.title}</h3>
            </div>
            <div className="w-96 bg-gray-200 p-6 flex flex-col items-start">
            <h3 className="font-bold text-xl flex lg:hidden mb-2">{value.title}</h3>
              <span>{value.name}</span>
              <span>{value.address}</span>
              <span>{value.mobile}</span>
            </div>
          </div>
        ))}
    </main>
  );

  
export default RITCard