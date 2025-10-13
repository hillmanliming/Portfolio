import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Image
        src="/Logo.svg"
        alt="Li-Ming Hillman Logo"
        width={90}
        height={19}
        priority
      />
      <div className="text-xl">Coming soon...</div>
    </div>
  );
}
