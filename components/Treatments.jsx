import Image from "next/image";

export const Treatments = () => {
  return (
    <section className="bg-blue-500 flex justify-center flex-col px-40 py-20 text-center text-white items-center">
      <h2 className="text-5xl font-extrabold ">Top Quality Dental Care</h2>
      <p className="py-5 text-xl  w-[50vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        deleniti perferendis cupiditate quo dolores, at dolore ab ex
        reprehenderit vero, molestias odit optio fugit voluptas nesciunt,
        delectus saepe ut? Veniam?
      </p>
      <article className="grid grid-cols-3 grid-row-1 gap-5 pt-10 max-lg:grid-cols-1 max-sm:w-screen max-sm:px-10">
        <div className="flex flex-col items-center max-sm:py-5">
          <Image
            src="/tratamiento-1.jpg"
            alt="Dental Implants"
            width="300"
            height="300"
            className="bg-white h-60 w-96"
          />
          <h3 className="text-2xl font-bold py-3">Dental Implants</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum
            eligendi alias repellendus commodi sequi modi cumque et possimus.
          </p>
        </div>

        <div className="flex flex-col items-center max-sm:py-5">
          <Image
            src="/tratamiento-2.jpeg"
            alt="Invisible Braces"
            width="300"
            height="300"
            className="bg-white h-60 w-96"
          />
          <h3 className="text-2xl font-bold py-3">Invisible Braces</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum
            eligendi alias repellendus commodi sequi modi cumque et possimus.
          </p>
        </div>

        <div className="flex flex-col items-center max-sm:py-5">
          <Image
            src="/tratamiento-3.jpeg"
            alt="Teeth Whitening"
            width="300"
            height="300"
            className="bg-white h-60 w-96"
          />
          <h3 className="text-2xl font-bold py-3">Teeth Whitening</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum
            eligendi alias repellendus commodi sequi modi cumque et possimus.
          </p>
        </div>
      </article>
    </section>
  );
};
