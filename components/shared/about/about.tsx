import Image from "next/image";

export default function AboutGym() {
  return (
    <section className="mx-auto py-8 px-4 md:px-0 md:max-w-screen-md">
      <h2 className="text-3xl font-bold text-center mb-6">ABOUT OUR GYM</h2>{" "}
      <div className="relative h-[400px] w-full md:h-[600px]">
        <Image
          src="/images/about-gym.jpg"
          alt="A person working out in our gym"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  );
}
