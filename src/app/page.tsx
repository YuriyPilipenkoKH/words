import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <Image
        src={process.env.NEXT_PUBLIC_HOME_BG || "/home-bg.png"}
        alt="Home Background"
        width={800}
        height={600}
        className="object-cover rounded-lg shadow-lg"
      />
    </main>
  );
}
