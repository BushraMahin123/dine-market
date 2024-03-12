import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon , FacebookIcon ,TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex gap-11 flex-wrap justify-center items-center">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <Link href={'#'} className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src={'/dine-market.png'}
                    width={200}
                    height={200}
                    alt="logo"
                    className="max-w-full dark:hidden"
                  />
                </Link>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Small, artisan label that offers a 
                thoughtfully curated collection of high 
                quality everyday essentials made.
                </p>
                <div className="mb-6 flex items-center">
                  <Link
                    href="javascript:void(0)"
                    className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-slate-300 border border-stroke text-dark  dark:border-dark-3 dark:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <TwitterIcon fill="black"/>
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-slate-300 border border-stroke text-dark dark:border-dark-3 dark:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <FacebookIcon fill="black"/>
                  </Link>
                 
                  <Link
                    href="javascript:void(0)"
                    className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-slate-300 border border-stroke text-dark dark:border-dark-3 dark:text-white  sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <LinkedinIcon fill="black"/>
                  </Link>
                </div>
                
              </div>
            </div>

            <LinkGroup header="Company">
              <NavLink link="/#" label="About" />
              <NavLink link="/#" label="Terms of Use" />
              <NavLink link="/#" label="Privacy Policy" />
              <NavLink link="/#" label="How it Works" />
              <NavLink link="/#" label="Contact Us" />
            </LinkGroup>
            <LinkGroup header="Support">
              <NavLink link="/#" label="Support Carrer" />
              <NavLink link="/#" label="24h Service" />
              <NavLink link="/#" label="Quick Chat" />
              <NavLink  link="/#" label=""/>
              <NavLink  link="/#" label=""/>
            </LinkGroup>
            <LinkGroup header="Contact">
              <NavLink link="/#" label="Whatsapp" />
              <NavLink link="/#" label="Support 24h" />
              <NavLink  link="/#" label=""/>
              <NavLink  link="/#" label=""/>
              <NavLink  link="/#" label=""/>
            </LinkGroup>
          </div>
        </div>
        <hr className="mb-5"/>
        <div className="flex gap-x-64 items-center justify-center">
            <p className="text-slate-400 text-base text-body-color dark:text-dark-6 font-bold">
                    Copyright&copy; 2022 Dine <br/>
                    Market
            </p>
            <span><span className="text-slate-600">Design by.</span>Weird Design<br/> Studio</span>
            <span><span className="text-slate-600">Code by.</span>bushramahin on<br/> github</span>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }:any) => {
  return (
    <>
      <div className="w-full px-6 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-7 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="text-xl" >{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }:{link:string , label:string}) => {
  return (
    <li>
      <Link
        href={link}
        className=" text-slate-600 inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </Link>
    </li>
  );
};
