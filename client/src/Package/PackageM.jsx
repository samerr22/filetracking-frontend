import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function PackageM() {
  const [Info, setInfo] = useState([]);

  const [DId, setformId] = useState("");
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");
  console.log("ind", DId);

  console.log();

  useEffect(() => {
    const fetchinfo = async () => {
      try {
        const res = await fetch(`/api/items/pgetAll`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setInfo(data.items);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchinfo();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/items/pdelete/${DId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setInfo((prev) => prev.filter((Employe) => Employe._id !== DId));
        alert("deleted");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //search
  useEffect(() => {
    if (query.trim() === "") {
      // If the query is empty, display all data
      setfilter([...Info]);
    } else {
      // If there's a query, filter the data
      const filteredData = Info.filter(
        (Employe) =>
          Employe.name &&
          Employe.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, Info]);

 

  return (
    <div className="h-[1000px] mt-28 relative">
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
    <h1 className="text-4xl font-thin opacity-90 uppercase text-gray-800 text-center">
      Post Management
    </h1>

    <div className="flex justify-center items-center mt-2">
      <form>
        <div className="opacity-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-[350px] h-10 rounded-full shadow-xl border border-white bg-opacity-10"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </div>

    <div className="mb-1 mt-4 flex justify-center">
      <Link to={`/AddPack`}>
        <button className="w-36 bg-blue-600 shadow-md hover:text-black uppercase rounded-lg h-10 bg-opacity-90 border-white border border-opacity-45 text font-serif text-white text-opacity-90">
          New Post
        </button>
      </Link>
      
    </div>
  </div>

  <div className="lg:w-[900px] xl:w-[1300px] w-[450px] md:w-[700px] rounded-lg bg-opacity-30 bg-white mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[700px] mt-48 overflow-y-auto scrollbar-none">
      {filter && filter.length > 0 ? (
        filter.map((Employe) => (
          <div key={Employe._id} className="border border-gray-300 rounded-lg p-4 shadow-md bg-opacity-40">
            <div className="flex flex-col  items-center">
            <div className="flex flex-wrap space-x-2">
  {Employe.images.map((image, index) => (
    <img 
      key={index} 
      src={image} 
      alt={Employe.name} 
      className="w-16 h-16 object-cover rounded mb-2" // Added mb-2 for spacing
    />
  ))}
</div>
              <h3 className="font-bold text-lg mt-2">{Employe.name}</h3>
             
              
             
              <p className="text-sm text-gray-600 break-words w-[380px]"> {Employe.desc}</p>
            </div>

            <div className="flex justify-between mt-4">
              <Link to={`/UpdatePack/${Employe._id}`}>
                <button className="w-24 bg-[#1bbe4c] hover:opacity-80 bg-opacity-70 rounded-lg h-10 border-white border border-opacity-45 text font-serif text-white text-opacity-80">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => {
                  setformId(Employe._id);
                  handleDeleteUser();
                }}
                className="w-24 bg-[#d62e22] hover:opacity-80 rounded-lg bg-opacity-70 h-10 border-white border border-opacity-45 text font-serif text-white text-opacity-80"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <> 
        <div className="flex justify-center items-center mt-6">
          <div>
          <p className="text-2xl font-serif text-center opacity-60 ">
          You have no details
        </p>

          </div>
        </div>

      
        </>
      )}
    </div>
  </div>
</div>

  );
}

