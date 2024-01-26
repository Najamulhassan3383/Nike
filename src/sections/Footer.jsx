import footerLogo from "../assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className="text-white grid  grid-cols-1 gap-x-24 gap-y-10  md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-3">
        <img src={footerLogo} alt="footer-logo" width={140} height={100} />
        <p className="mb-5 mt-2 font-montserrat text-md">
          Get shoes ready for the new term at your nearest Nike store. Get
          Rewards
        </p>
        <div className="flex flex-row gap-x-6">
          {socialMedia.map((link, index) => (
            <div
              key={index}
              className="bg-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-coral-red"
            >
              <a href="#">
                <img src={link.src} alt={link.alt} height={24} width={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="font-bold text-2xl mb-4 font-palanquin">Products</h4>
        {footerLinks[0].links.map((link, index) => (
          <a key={index} href={link.link}>
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="font-bold text-2xl mb-4 font-palanquin">Help</h4>
        {footerLinks[1].links.map((link, index) => (
          <a key={index} href={link.link} className="font-monsterrat">
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="font-bold text-2xl mb-4 font-palanquin">Get in touch</h4>
        {footerLinks[2].links.map((link, index) => (
          <a key={index} href={link.link} className="font-monsterrat">
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
