import { useForm } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <section
      id="contact"
      className="pt-16 md:pt-36 duration-300 md:mx-32 shadow-xl rounded-xl"
    >
      <SectionTitle heading={"Get In Touch"} />
      <form onSubmit={handleSubmit(onSubmit)} className=" p-14">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full">
            <input
              id="name"
              placeholder="Enter full name"
              {...register("name", { required: true })}
              className="w-full border-0 py-3 pl-2 rounded-lg outline-1 outline-sky-500 text-xl shadow-lg"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-full">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full border-0 py-3 pl-2 rounded-lg outline-1 outline-sky-500 text-xl shadow-lg"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="w-full mt-8">
          <input
            id="subject"
            placeholder="Enter phone number"
            {...register("subject", { required: true })}
            className="w-full border-0 py-3 pl-2 rounded-lg outline-1 outline-sky-500 text-xl shadow-lg"
          />
          {errors.subject && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="w-full my-8">
          <textarea
            rows={4}
            id="message"
            placeholder="Write your message"
            {...register("message", { required: true })}
            className="w-full border-0 py-3 pl-2 rounded-lg outline-1 outline-sky-500 text-xl shadow-lg"
          />
          {errors.message && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="grid justify-center">
          <button className="text-2xl mt-4 py-3 px-10 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
