import Logo from "@/assets/Logo.png";
import Links from "@/shared/Links";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam, justo ut aliquam imperdiet, justo magna convallis nulla,
            vitae molestie est eros sit amet elit.
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="basis 1/4 mt-16 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <Links _className="my-5" />
        </div>
        <div className="basis 1/4 mt-16 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <div className="my-5 flex items-center gap-3">
            <PhoneIcon className="h-4 w-4" />
            <p>Phone example</p>
          </div>
          <div className="my-5 flex items-center gap-3">
            <MapPinIcon className="h-4 w-4" />
            <p>Address example</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
