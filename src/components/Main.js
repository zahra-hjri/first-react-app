// import Blob from "../assets/blob-green.jpg";
import Developer from "../assets/developer.jpg";
export default function Main() {
  return (
    <section className="flex-col sm:flex sm:flex-row-reverse lg:justify-evenly px-8 md:px-35 lg:px-40">
      <img
        src={Developer}
        alt="developer"
        className="sm:w-72 sm:h-72 md:w-96 md:h-96"
      ></img>
      <div className="mt-2 px-2 sm:mt-10 sm:px-12 md:px-30 font-mono font-bold lg:pr-52 lg:mt-16">
        <p className="text-black sm:font-bold">
          Hi, My name is
          <strong className="text-green-600 px-2 sm:text-xl">
            Zahra Hozhabri
          </strong>
          <br />
          <span className="text-black px-2">
            I'm a frontend developer from the Iran,
            <br />I enjoy when I code ... :)
          </span>
          <br />
          <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-10">
            a little aboute me
          </button>
        </p>
      </div>
      <div className="bg-transparent">
        {/* <img src={Blob} alt="Blob" className="relative"></img>
        <img
          src={Blob}
          alt="Blob"
          className="lg:w-72 lg:h-60 absolute right-5"
        ></img> */}
      </div>
    </section>
  );
}
