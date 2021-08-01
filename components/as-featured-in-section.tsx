import Image from "next/image";

export function AsFeaturedInSection() {
  return (
    <div className="min-h-sectionSmall md:min-h-sectionSmallMd py-10">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center">
        As featured in
      </h3>
      <div className="flex gap-20 justify-center mt-10 md:mt-32">
        <Image src="/palette.png" width={222} height={103} />

        <div className="hidden md:block">
          <Image src="/palette.png" width={222} height={103} />
        </div>
        <div className="hidden md:block">
          <Image src="/palette.png" width={222} height={103} />
        </div>
        <div className="hidden md:block">
          <Image src="/palette.png" width={222} height={103} />
        </div>
      </div>
    </div>
  );
}
