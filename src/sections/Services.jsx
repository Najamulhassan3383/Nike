import ServiceContainer from "../components/ServiceContainer";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-20 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceContainer service={service} key={index} />
      ))}
    </div>
  );
};

export default Services;
