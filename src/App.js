import logo from "./logo.svg";
import "./App.css";

function App() {
  let shareFirst = async () => {
    if (navigator && navigator.share) {
      try {
        let fetchImage = await fetch("/iceland.avif");
        let blobImage = await fetchImage.blob();

        let newImageFile = new File([blobImage], "img.avif", {
          type: "image/avif",
        });

        navigator.share({
          title: "Hello, this is a custom message. For one image",
          text: "Of course this is a custom text",
          url: "https://staytus.com",
          files: [newImageFile],
        });
      } catch (err) {}
    }
  };
  let shareMultipleImages = async () => {
    if (navigator && navigator.share) {
      try {
        let fetchFirstImage = await fetch("/1.jpg");
        let blobFirstImage = await fetchFirstImage.blob();

        let firstImageFile = new File([blobFirstImage], "1.jpg", {
          type: "image/jpeg",
        });

        let fetchSecondImage = await fetch("/2.jpg");
        let secondBlobImage = await fetchSecondImage.blob();

        let secondImageFile = new File([secondBlobImage], "2.jpg", {
          type: "image/jpeg",
        });

        let fetchThirdImage = await fetch("/3.jpg");
        let blobThirdImage = await fetchThirdImage.blob();

        let thirdImageFile = new File([blobThirdImage], "3.jpg", {
          type: "image/jpeg",
        });

        navigator.share({
          title: "Hello, this is a custom message for multiple image sharing",
          text: "OIf course this is a custom text",
          url: "https://staytus.com",
          files: [firstImageFile, secondImageFile, thirdImageFile],
        });
      } catch (err) {}
    }
  };
  let shareAudio = async () => {
    if (navigator && navigator.share) {
      try {
        let fetchImage = await fetch("/audio.mp3");
        let blobImage = await fetchImage.blob();

        let newImageFile = new File([blobImage], "audio.mp3", {
          type: "audio/mp3",
        });

        navigator.share({
          title: "Hello, this is a custom message",
          text: "OIf course this is a custom text",
          url: "https://staytus.com",
          files: [newImageFile],
        });
      } catch (err) {}
    }
  };
  return (
    <main className="bg-gray-100  flex justify-center  lg:items-center w-full min-h-screen flex-nowrap flex-col   space-y-4 py-20">
      <article className="rounded-lg bg-white shadow-sm p-7 text-center sm:max-w-sm sm:p-4 sm:pb-12">
        <img
          src="/iceland.avif"
          alt="Ice Cave"
          className="rounded-lg sm:w-full object-cover sm:h-52"
        />
        <div>
          <h2 className="text-gray-800 capitalize text-xl font-bold pt-8 pb-4">
            Imagine this is a great article
          </h2>
          <p>
            And continuing our imagination exercise. Let's imagaine that this is
            also a great description
          </p>
          by{" "}
          <button href="#" className="capitalize underline inline-block pt-3">
            Irf suarez
          </button>
          <button
            onClick={shareFirst}
            className="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide"
          >
            Share image
          </button>
        </div>
      </article>

      <article className="bg-white shadow-sm  relative sm:max-w-2xl rounded-lg lg:justify-self-end">
        <div className="grid gap-3 sm:grid-cols-3 items-center md:gap-0 p-7 sm:pb-0 sm:pt-10 sm:px-6">
          <img
            src="/1.jpg"
            alt="Sea1"
            className="rounded-t-lg w-full h-44 sm:w-52 sm:h-52 object-cover justify-self-center sm:rounded-l-lg sm:rounded-r-none md:w-44 md:h-44"
          />
          <img
            src="/2.jpg"
            alt="Sea2"
            className="w-full h-44 sm:h-52 md:h-44"
          />
          <img
            src="/3.jpg"
            alt="waht"
            className="rounded-b-lg w-full h-44 object-cover justify-self-center sm:w-52 sm:h-52 sm:rounded-r-lg sm:rounded-l-none md:w-44 md:h-44 "
          />
        </div>
        <div className="pb-7 px-10 sm:pt-0 sm:pb-10">
          <h2 className="text-gray-800 capitalize text-xl font-bold sm:pt-8 pb-1">
            You can share multiple images
          </h2>
          <p>
            Please notice how each application will manage the elements you're
            sharing
          </p>
          by{" "}
          <a href="#" className="capitalize underline inline-block pt-3">
            Irf
          </a>
          <button
            onClick={shareMultipleImages}
            className="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide"
          >
            Share image
          </button>
        </div>
      </article>

      <article className="bg-white shadow-sm  relative sm:max-w-2xl rounded-lg lg:justify-self-end">
        <div className="w-full flex justify-center p-4">
          <audio className="w-full" controls>
            <source src="/audio.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="pb-7 px-10 sm:pt-0 sm:pb-10">
          <h2 className="text-gray-800 capitalize text-xl font-bold sm:pt-8 pb-1">
            You can also share audios
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in
            sapien. Nullam dapibus fermentum ipsum. className aptent taciti
            sociosqu.
          </p>
          by{" "}
          <a href="#" className="capitalize underline inline-block pt-3">
            Irf
          </a>
          <button
            onClick={shareAudio}
            className="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide"
          >
            Share audio
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
