import Image from "next/image";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-purple-dark text-white pt-20">
      <div className="container mx-auto sm:flex mb-4">
        <div>
          <Image src="/captain-crate.svg" width="100%" height="auto" />
        </div>
        <div>
          <h4>Legal</h4>
          <ul className="list-reset leading-normal">
            <li>
              <a href="">imprint</a>
            </li>
            <li>
              <a href="">privacy</a>
            </li>
            <li>
              <a href="">general terms and conditions</a>
            </li>
            <li>
              <a href="">cancellation policy</a>
            </li>
          </ul>

          <Image src="/tube.svg" width="100%" height="auto" />
        </div>
        <div>
          <h4>Info</h4>
          <ul>
            <li>
              <a href="">refer a friend</a>
            </li>
            <li>
              <a href="">help / contact</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">sign up / login </a>
            </li>
          </ul>
          <Image src="/pen.svg" width="100%" height="auto" />
        </div>
        <div>
          <h4>
            Join our mailing list to get updates on special offers, the art crew
            and more!
          </h4>
          <form action="">
            <label>
              <input type="checkbox" name="" id="" />I have read and agree to
              the terms & conditions
            </label>
            <input type="text" placeholder="Your e-mail address" />
          </form>
        </div>
      </div>

      <div className="container mx-auto sm:flex mb-4">
        <ul className="flex gap-8">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Pinterest</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
        </ul>
      </div>

      <div className="text-center bg-purple-light text-white p-4">
        © Copyright 2019 - 2021 – Upcrate Art Pirates
      </div>
    </footer>
  );
}
