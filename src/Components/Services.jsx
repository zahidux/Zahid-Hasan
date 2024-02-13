import React from "react";
import useServicesData from "../hooks/useServicesData";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const [serviceData] = useServicesData();
  return (
    <section
      id="services"
      className="mb-12 p-6 md:p-12 duration-300 md:mx-32 rounded-2xl shadow-md"
    >
      <SectionTitle heading={"Services"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 md:gap-10 duration-300">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
