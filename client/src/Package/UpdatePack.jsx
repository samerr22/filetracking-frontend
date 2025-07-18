import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateThings() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(Array(10).fill(null));
  const [imageUploadErrors, setImageUploadError] = useState(Array(10).fill(null));
  const [formData, setFormData] = useState({
    name: '',
    git: '',
    youtube: '',
    categories: '',
    desc: '',
    images: Array(10).fill(null),
  });
  const [publishError, setPublishError] = useState(null);

  const { packId } = useParams();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(`/api/items/pgetAll?itemId=${packId}`);
        const data = await res.json();

        if (!res.ok) {
          console.log(data.message);
        }

        if (res.ok) {
          const selected = data.items.find((item) => item._id === packId) || {
            name: '',
            git: '',
            youtube: '',
            categories: '',
            desc: '',
            images: Array(10).fill(null),
          };
          setFormData(selected);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchStudents();
  }, [packId]);

  const navigate = useNavigate();

  const handleFileChange = (index, selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      // Handle image upload here if necessary
    }
  };

  const handleUploadImage = async () => {
    if (!file) {
      setImageUploadError("Please select an image");
      return;
    }

    setImageUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = progress.toFixed(0);
          return newProgress;
        });
      },
      (error) => {
        setImageUploadError("Image upload failed");
        setImageUploadProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = null; // Reset progress for the failed image
          return newProgress;
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUploadProgress((prev) => {
            const newProgress = [...prev];
            newProgress[index] = null; // Reset progress after completion
            return newProgress;
          });
          setImageUploadError(null);
          setFormData((prev) => {
            const newImages = [...prev.images];
            newImages[index] = downloadURL;
            return { ...prev, images: newImages };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/items/pUpdate/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      setPublishError(null);
      alert("Update successful!");
      navigate(`/PackageM`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative mt-20 mb-28 w-full max-w-2xl p-6 md:p-8 flex flex-col items-center">
        <div className="flex justify-center items-center mb-4">
          <Link to={`/PackageM`}>
            <button className="text-md hover:text-blue-400 font-serif underline text-gray-800">
              Back
            </button>
          </Link>
        </div>
        <div className="my-7 flex items-center justify-center">
          <h1 className="text-3xl font-serif uppercase text-slate-700">
            Update Post
          </h1>
        </div>

        <div className="w-full">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              {Array.from({ length: 10 }, (_, index) => (
                <div
                  key={index}
                  className="relative w-32 h-20 bg-white border border-gray-300 rounded-md flex items-center justify-center cursor-pointer"
                  onClick={() => document.getElementById(`file-input-${index}`).click()}
                >
                  <input
                    type="file"
                    id={`file-input-${index}`}
                    accept="image/*"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                    className="hidden"
                  />
                  {imageUploadProgress[index] !== null && (
                    <div className="absolute w-[32px] h-[32px] top-0 left-0 flex items-center justify-center">
                      <CircularProgressbar
                        value={imageUploadProgress[index]}
                        text={`${imageUploadProgress[index] || 0}%`}
                      />
                    </div>
                  )}
                  {imageUploadErrors[index] && (
                    <p className="absolute text-red-600 bottom-1">{imageUploadErrors[index]}</p>
                  )}
                  {formData.images && formData.images[index] ? (
                    <div className="absolute w-full h-full top-0 left-0 bg-white flex items-center justify-center rounded-md">
                      <img 
                        src={formData.images[index]} 
                        alt={`Uploaded-${index}`} 
                        className="object-cover w-full h-full rounded-md" 
                      />
                    </div>
                  ) : (
                    <span className="text-gray-500">Click to upload</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <input
                className="bg-slate-100 shadow-sm shadow-slate-500 p-3 rounded-lg w-full h-11"
                type="text"
                placeholder="Title"
                required
                id="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />

              

              <textarea
                className="bg-slate-100 shadow-sm shadow-slate-500 p-3 rounded-lg w-full h-32"
                placeholder="More Information"
                required
                id="desc"
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                value={formData.desc}
              />

              <button
                type="submit"
                className="bg-[#2055c7] p-3 font-medium text-white hover:text-black uppercase rounded-lg w-full h-11"
              >
                Submit
              </button>
            </div>

            {publishError && (
              <p className="mt-5 text-red-600 bg-white w-300 h-7 rounded-lg text-center">
                {publishError}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
