import React from "react";
import useServicesData from "../hooks/useServicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [serviceData] = useServicesData();
  return (
    <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-10 md:gap-10 duration-300">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
