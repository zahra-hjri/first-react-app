import Blob from "../assets/blob-green.jpg";
export default function Main() {
  return (
    <section className="flex justify-between px-8 lg:px-40">
      <div>
        <p className="text-black"></p>
        <p className="text-black font-bold">
          Hi, My name is
          <strong className="text-green-600 px-2 text-2xl">
            Zahra Hozhabri
          </strong>
        </p>
      </div>
      <div className="bg-transparent">
        <img src={Blob} alt="Blob" className="relative"></img>
        <img
          src={Blob}
          alt="Blob"
          className="lg:w-72 lg:h-60 absolute right-5"
        ></img>
        <img
          src={Blob}
          alt="Blob"
          className="lg:w-80 lg:h-48 absolute -left-7"
        ></img>
      </div>
    </section>
  );
}
