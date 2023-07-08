import { ChooseUs } from "@/components/ChooseUs";
import { InicialPage } from "@/components/InicialPage";
import { Testimonts } from "@/components/Testimonts";
import { Treatments } from "@/components/Treatments";

export default function Home() {
  return (
    <main className="bg-white">
      <InicialPage />
      <Treatments />
      <ChooseUs />
      <Testimonts />

      <footer className="bg-blue-700 w-screen h-16 text-center justify-center items-center flex">
        <p className="text-white font-bold">
          Dental web © Reservados todos los derechos{" "}
        </p>
      </footer>
    </main>
  );
}
