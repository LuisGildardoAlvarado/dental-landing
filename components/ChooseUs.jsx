import Image from "next/image";
import Link from "next/link";
export const ChooseUs = () => {
  return (
    <section className=" bg-[url('/consul-1.webp')] bg-no-repeat bg-cover bg-center w-screen">
      <div className="bg-blue-600 bg-opacity-90 flex flex-row max-xl:flex-col px-20 py-20 justify-center items-center gap-40 max-xl:gap-10">
        <div>
          <Image
            src="/consul-2.jpeg"
            alt="Invisible Braces"
            width={500}
            height={500}
            className="w-[40rem] h-[40rem] rounded-full object-cover max-xl:w-96 max-xl:h-96 "
          />
        </div>
        <aside className="flex flex-col text-white w-[40rem] px-10 text-left max-sm:w-96">
          <h1 className="text-4xl font-extrabold ">Why Choose Us?</h1>
          <p className="py-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id
            magnam amet totam aspernatur culpa ratione error molestiae fugit,
            dicta blanditiis est non, dolores itaque quos ab iure. Aspernatur,
            quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellat architecto illum odio, labore velit quam fugit neque
            molestiae minus veritatis quos in ipsum? Hic reiciendis ullam
            provident vero natus odit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis porro obcaecati eum facere esse
            praesentium autem, iure cum reprehenderit, doloremque itaque dolore
            optio provident laudantium. Recusandae veritatis molestiae sit
            aliquam.
          </p>
          <p className="font-bold mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            dolore totam{" "}
          </p>
          <Link
            href="/"
            className="bg-green-600  px-10 py-2 text-lg text-center text-white font-bold uppercase rounded-lg mr-72 max-sm:mx-4"
          >
            request appointment
          </Link>
        </aside>
      </div>
    </section>
  );
};
