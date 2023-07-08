import Image from "next/image";

export const Testimonts = () => {
  return (
    <section className="flex flex-col mt-20 justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-800">Testimonial</h1>
      <article className="grid grid-cols-3 grid-row-1 gap-10 py-10 px-10 max-sm:grid-cols-1 max-sm:gap-20 ">
        <div className="flex flex-col items-center justify-start">
          <Image
            src="/cita.png"
            alt="Comillas"
            width={500}
            height={500}
            className="w-[7rem] h-[6rem] object-cover"
          />
          <p className="py-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequatur unde iusto alias. Est deserunt quos corrupti sint,
            placeat, atque veritatis recusandae enim, et itaque aliquam
            voluptates accusantium ipsa assumenda!
          </p>
          <p className="uppercase text-green-600 font-bold text-xl pt-5">
            JOHN SMITH
          </p>
        </div>

        <div className="flex flex-col items-center justify-start">
          <Image
            src="/cita.png"
            alt="Comillas"
            width={500}
            height={500}
            className="w-[7rem] h-[6rem] object-cover"
          />
          <p className="py-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequatur unde iusto alias. Est deserunt quos corrupti sint,
            placeat, atque veritatis recusandae enim, et itaque aliquam
            voluptates accusantium ipsa assumenda!
          </p>
          <p className="uppercase text-green-600 font-bold text-xl pt-5">
            JOHN SMITH
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <Image
            src="/cita.png"
            alt="Comillas"
            width={500}
            height={500}
            className="w-[7rem] h-[6rem] object-cover"
          />
          <p className="py-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequatur unde iusto alias. Est deserunt quos corrupti sint,
            placeat, atque veritatis recusandae enim, et itaque aliquam
            voluptates accusantium ipsa assumenda!
          </p>
          <p className="uppercase text-green-600 font-bold text-xl pt-5">
            JOHN SMITH
          </p>
        </div>
      </article>
    </section>
  );
};
