import Link from "next/link";

export const InicialPage = () => {
  return (
    <section className=" h-screen flex flex-col bg-[url('/consul-01.png')] bg-no-repeat bg-cover bg-center max-xl:bg-[url('/consul-001.png')] max-sm:bg-[url('/consul-0001.png')]">
      <header className="h-38 w-screen flex flex-row justify-between items-center max-xl:flex-col ">
        <h1 className="mx-44 my-10 max-xl:my-5 text-4xl text-blue-700 font-light tracking-wide">
          <span className="font-bold text-blue-700">Dental</span>Care
        </h1>
        <h3 className="mx-5 my-10 max-xl:mt-2 text-xl uppercase font-light text-blue-700 tracking-wide flex max-xl:flex-col max-sm:flex-row">
          call us today:
          <span className="font-bold text-blue-700 text-xl">800-987-9988</span>
        </h3>
      </header>
      <article className="mt-40 mx-40 px-4 w-2/5 h-2/5 tracking-wide max-xl:flex max-xl:flex-col max-xl:items-center max-xl:w-screen max-xl:mx-0 max-xl:mt-20 max-sm:mt-36">
        <h1 className="text-7xl pt-10 pb-4 text-blue-800 max-xl:text-center">
          Creating <br />
          Brillant Smile
        </h1>
        <p className="w-2/4 text-xl mb-12 text-blue-800 font-light max-xl:text-center">
          Make an appointment for your smail makeover
        </p>
        <Link
          href="/"
          className="bg-green-600 text-center px-10 py-3 text-2xl text-white font-bold uppercase rounded-lg max-sm:text-lg "
        >
          request appointment
        </Link>
      </article>
    </section>
  );
};
