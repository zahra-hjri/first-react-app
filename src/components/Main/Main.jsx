
import Developer from "../../assets/developer.jpg";

const Main = () => {
  return (
    <section className="flex-col sm:flex sm:flex-row-reverse md:justify-between px-5 lg:px-18 xl:px-20 md:my-4">
      <img
        src={Developer}
        alt="developer"
        className="sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
      ></img>
      <div className="mt-2 px-2 sm:mt-10 sm:px-8 md:px-18 lg:px-16 xl:pr-28 xl:text-xl font-mono font-bold lg:mt-16">
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
    </section>
  );
}
export default Main;