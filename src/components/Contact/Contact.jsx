import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import phoneImg from "./../../assets/images/phone.svg";
import gmailImg from "./../../assets/images/gmail.svg";
import locationImg from "./../../assets/images/location.svg";
const Contact = () => {
  return (
    <div className="contact w-4/5 mx-auto my-0 py-24 px-0" id="Contact">
      <p className="top-title text-mouve font-semibold text-lg w-max rounded-1/2 mx-auto my-0 p-3 border border-solid border-mouve">
        <span>Contact</span>
      </p>
      <h1 className="text-blacky text-4xl w-max my-0 mx-auto font-bold pt-3">
        Let's Discuss Your <span className="text-mouve">Project</span>
      </h1>
      <p></p>
      <div className="contact-info flex justify-between pt-12">
        <div className="info w-1/3 flex flex-col gap-5">
          <ContactInfoCard
            image={phoneImg}
            label={"Call me"}
            value={"+963 967-535-203"}
          />
          <ContactInfoCard
            image={gmailImg}
            label={"Email me"}
            value={"mm4847329@gmail.com"}
          />
          <ContactInfoCard
            image={locationImg}
            label={"Address"}
            value={"Rukn-Aldin, Damascus, Syria."}
          />
        </div>
        <div className="form w-2/3 flex justify-end">
          <form
            action=""
            className="flex flex-wrap justify-end gap-y-5 gap-x-14 max-w-2xl"
          >
            <input
              type="text"
              placeholder="Full name"
              required
              className=" w-5/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-5/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{6}"
              required
              className="w-5/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none"
            />
            <input
              type="text"
              placeholder="Budget"
              required
              className="w-5/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none"
            />
            <textarea
              id="textarea"
              placeholder="Message"
              required
              className=" w-11/12 h-32 border border-solid border-neutral-300 rounded py-1 px-3 outline-none resize-none"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className=" w-36 bg-mouve text-white font-medium text-base p-2 border-none mt-3 cursor-pointer rounded-md hover:bg-white hover:font-semibold hover:border hover:border-solid  hover:border-mouve  hover:text-mouve"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
