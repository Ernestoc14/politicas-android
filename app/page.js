import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-full flex flex-col items-center lg:w-10/12">
        <h1 className="text-3xl font-semibold mb-10 lg:mb-14 ">
          Bienvenidos a DigestiLearn!
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-base lg:text-lg leading-relaxed">
          <div>
            <p className="mb-6">
              Valoramos tu privacidad y estamos comprometidos a proteger tus
              datos personales.
            </p>
            <p className="mb-6">
              Esta política de privacidad explica que no recopilamos ni
              utilizamos ningún tipo de información personal ni datos de uso.
            </p>
            <p className="mb-12">
              No recopilamos ninguna información personal ni datos de uso a
              través de nuestra aplicación.
            </p>
            <p className="mb-6">
              No almacenamos ningún dato personal, por lo tanto, no aplicamos
              medidas de seguridad específicas para proteger datos que no
              recolectamos.
            </p>
          </div>
          <div>
            <p className="mb-6">
              Dado que no recopilamos ninguna información, no utilizamos ni
              compartimos datos personales.
            </p>
            <p className="mb-6">
              Nos reservamos el derecho de modificar esta política de privacidad
              en cualquier momento. Cualquier cambio será notificado a través de
              nuestra aplicación.
            </p>
            <p className="mb-6">
              Esta política es efectiva a partir del 7 de junio de 2024. Si
              tienes alguna pregunta sobre esta política de privacidad, por
              favor contáctanos a correoalatorio.
            </p>
            <p className="mb-6">
              Esta política de privacidad refleja el hecho de que
              DigestiLearn no recopila, utiliza ni comparte datos personales de
              los usuarios.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center pt-20 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/logowbg.png"
          alt="App Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p className="text-sm text-center mt-8">
        Todos los derechos reservados. Grupo JEG 2024
      </p>
    </main>
  );
}
