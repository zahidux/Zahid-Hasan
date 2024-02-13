import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
      <h1 className="text-white text-5xl text-center mb-10">Get In Touch</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-iconShadow p-14"
      >
        <div className="flex flex-col lg:flex-row items-start gap-4">
          <div className="w-full">
            <label className="text-gray" htmlFor="name">
              Full Name:
            </label>
            <input
              id="name"
              placeholder="Enter full name"
              {...register("name", { required: true })}
              className="w-full border border-green py-2 px-3 rounded-md outline-none"
            />
            {errors.name && (
              <span className="text-red">This field is required</span>
            )}
          </div>

          <div className="w-full">
            <label className="text-gray" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full border border-green py-2 px-3 rounded-md outline-none"
            />
            {errors.email && (
              <span className="text-red">This field is required</span>
            )}
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="text-gray" htmlFor="subject">
            Subject:
          </label>
          <input
            id="subject"
            placeholder="Enter full name"
            {...register("subject", { required: true })}
            className="w-full border border-green py-2 px-3 rounded-md outline-none"
          />
          {errors.subject && (
            <span className="text-red">This field is required</span>
          )}
        </div>

        <div className="w-full mt-4">
          <label className="text-gray" htmlFor="message">
            Message:
          </label>
          <textarea
            rows={4}
            id="message"
            placeholder="Write your message"
            {...register("message", { required: true })}
            className="w-full border border-green py-2 px-3 rounded-md outline-none"
          />
          {errors.message && (
            <span className="text-red">This field is required</span>
          )}
        </div>

        <button className="btn_primary w-full text-xl mt-4">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
