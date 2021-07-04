import Image from "next/image";
import { CaptainCrateSvg } from "./elements/svg/cpt-crate-svg";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-purple-dark text-white pt-20">
      <div className="container mx-auto p-5 md:p-0 w-full grid mb-4 md:grid-cols-6">
        <CaptainCrateSvg variant="head-only" className="text-white mb-5" />
        <div>
          <h4 className="mb-4 text-xl uppercase">Legal</h4>
          <ul className="list-reset leading-normal text-red text-xl">
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
        <div className="md:col-span-2">
          <h4 className="mb-4 text-xl uppercase">Info</h4>
          <ul className="text-blue text-xl">
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
        <div className="md:col-span-2">
          <h4 className="text-xl mb-4">
            Join our mailing list to get updates on special offers, the art crew
            and more!
          </h4>
          <form action="">
            <label className="mb-3 flex gap-4 items-center cursor-pointer">
              <input type="checkbox" name="" id="" className="" />I have read
              and agree to the terms & conditions
            </label>
            <input
              type="email"
              placeholder="Your e-mail address"
              className="w-full p-4 text-purple-dark"
            />
          </form>
        </div>
      </div>

      <div className="p-5 md:p-0 container mx-auto sm:flex mb-4">
        <ul className="flex flex-wrap gap-8">
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
