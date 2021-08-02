import Image from "next/image";

export function FormerArtistsSection() {
  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 ">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-xl m-auto">
        Featured artists we worked with
      </h3>

      <p className="md:hidden text-purple-dark mt-5">
        “Upcrate is the first art supply box I have ever tried and that I
        recommend to everyone. You’ll find all you need to make an awesome piece
        of art and discover new mediums . I personally enjoy the little extras,
        they never fail to surprise me !”
      </p>

      <div className="grid md:grid-cols-3 gap-20 relative mt-10 md:mt-20">
        <div className="grid gap-10 md:gap-20">
          <div>
            <Image
              src="/home/featured-artists/featured-01.png"
              width={385}
              height={385}
              layout="responsive"
            />
            <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
              <div className="text-bold">#upcrate14</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/r.os_art/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @r.os_art
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/home/featured-artists/featured-02.png"
              width={385}
              height={385}
              layout="responsive"
            />
            <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
              <div className="text-bold">#upcrate7</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/boxadessin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @boxadessin
              </a>
            </div>
          </div>
        </div>
        <div className="text-2xl text-purple-dark text-center hidden md:block">
          These are 4 of the many artists we have worked with in the past. Each
          of them come with their own unique styles, knowledge and preferences
          when it comes to art supplies. They curate the contents of their
          monthly box to make sure that all the materials work well together.
          Don’t forget to check them out and shower them in love!
        </div>
        <div className="gap-20 hidden md:grid">
          <div>
            <Image
              src="/home/featured-artists/featured-03.png"
              width={385}
              height={385}
              layout="responsive"
            />
            <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
              <div className="text-bold">#upcrate13</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/nikalarkina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nikalarkina
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/home/featured-artists/featured-04.png"
              width={385}
              height={385}
              layout="responsive"
            />
            <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
              <div className="text-bold">#upcrate1</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/kloodwig/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @kloodwig
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
