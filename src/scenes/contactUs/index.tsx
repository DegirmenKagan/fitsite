import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register, // register an input
    trigger, // trigger validation
    formState: { errors }, // form state
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Whether you're a seasoned fitness enthusiast or a beginner taking
            the first steps towards a healthier you, our gym is the perfect
            place to thrive. Join now to access top-notch equipment,
            personalized training plans, and a supportive community that cheers
            for your success. Don't just imagine a healthier, fitter version of
            yourself – make it a reality. Your journey begins when you click
            "Join Now"!
          </p>
        </motion.div>
      </motion.div>

      {/* Form and Image*/}
      <div className="mt-10 justify-between gap-8 md:flex">
        {/* Form */}
        <motion.div
          className="mt-10 basis-3/5 md:mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/contact@degirmenkagan.dev"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 100 })} // register an input with validation rules applied to it (required and max length of 100)
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max length is 100 char"}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })} // register an input with validation rules applied to it (required and max length of 100)
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}

            <textarea
              className={inputStyles}
              placeholder="Message"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })} // register an input with validation rules applied to it (required and max length of 100)
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char"}
              </p>
            )}

            <button
              type="submit"
              className="roundedlg mt-5 bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white "
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
            <img
              className="w-full"
              src={ContactUsPageGraphic}
              alt="contact-us-page-graphic"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
