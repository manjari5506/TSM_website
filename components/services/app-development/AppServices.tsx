import React from "react";

const AppServices = () => {
  return (
    <section className="px-[6rem] pt-[13rem]">
      <h2 className="mb-8 text-center font-playfair text-5xl font-bold text-navy">
        App Development Services We Provide
      </h2>
      <p className="mb-12   text-center text-lg">
        At <span className="font-semibold">Stackmentalis</span>, we specialize
        in developing high-quality applications that meet your business
        objectives and enhance user experiences.
      </p>
      <div className="my-13 grid grid-cols-1 gap-6  md:grid-cols-2 ">
        {/* Service Card 1 */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className=" flex items-center gap-8">
            <img src="/images/services/8459331.jpg" className="h-40 w-40 " />
            <h3 className="mb-2 text-2xl font-bold text-navy ">
              Custom Mobile App Development
            </h3>
          </div>
          <p className="mb-4">
            Tailored mobile applications for iOS and Android platforms, designed
            to provide a seamless user experience and robust functionality.
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Native and cross-platform development.</li>
            <li>Intuitive UI/UX design.</li>
            <li>Performance optimization.</li>
          </ul>
        </div>

        {/* Service Card 2 */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className=" flex items-center gap-8">
            <img src="/images/services/8459331.jpg" className="h-40 w-40 " />
            <h3 className="mb-2 text-2xl font-bold text-navy">
              Web Application Development
            </h3>
          </div>
          <p className="mb-4">
            Building responsive and scalable web applications that deliver rich
            user experiences and meet modern web standards.
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Progressive Web Apps (PWAs).</li>
            <li>Responsive design for various devices.</li>
            <li>Integration with backend systems.</li>
          </ul>
        </div>

        {/* Service Card 3 */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className=" flex items-center gap-8">
            <img src="/images/services/8459331.jpg" className="h-40 w-40 " />
            <h3 className="mb-2 text-2xl font-bold text-navy">
              Enterprise App Development
            </h3>
          </div>
          <p className="mb-4">
            Developing custom enterprise applications that streamline
            operations, enhance collaboration, and improve productivity.
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Secure and scalable architecture.</li>
            <li>Integration with existing systems.</li>
            <li>Custom dashboards and reporting tools.</li>
          </ul>
        </div>

        {/* Service Card 4 */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className=" flex items-center gap-8">
            <img src="/images/services/8459331.jpg" className="h-40 w-40 " />
            <h3 className="mb-2 text-2xl font-bold text-navy">
              E-commerce App Development
            </h3>
          </div>
          <p className="mb-4">
            Creating feature-rich e-commerce applications that provide users
            with an engaging shopping experience.
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Secure payment gateways.</li>
            <li>User-friendly product catalogs.</li>
            <li>Order tracking and management.</li>
          </ul>
        </div>

        {/* Service Card 5 */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className=" flex items-center gap-8">
            <img src="/images/services/8459331.jpg" className="h-40 w-40 " />
            <h3 className="mb-2 text-2xl font-bold text-navy">
              MVP Development
            </h3>
          </div>
          <p className="mb-4">
            Rapid development of Minimum Viable Products (MVPs) to validate your
            business idea in the market.
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Quick turnaround time.</li>
            <li>Essential features focused on user feedback.</li>
            <li>Iterative improvements based on real-world usage.</li>
          </ul>
        </div>

        {/* Service Card 6 */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className=" flex items-center gap-8">
            <img src="/images/services/8459331.jpg" className="h-40 w-40 " />
            <h3 className="mb-2 text-2xl font-bold text-navy">
              App Maintenance and Support
            </h3>
          </div>
          <p className="mb-4">
            Ongoing maintenance and support services to ensure your application
            remains up-to-date and optimized.
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Regular updates and bug fixes.</li>
            <li>Performance monitoring and enhancements.</li>
            <li>User support and troubleshooting.</li>
          </ul>
        </div>
      </div>

      <div className="mt-13 rounded-2xl bg-[#e5e5e5] px-[4rem] py-[4rem] text-center">
        <h4 className="mb-4 text-2xl font-semibold text-navy ">
          Get Started Today!
        </h4>
        <p>
          Are you ready to turn your app idea into reality?{" "}
          <span className="font-semibold">Contact us</span> to discuss your
          project and learn how our app development services can help you
          succeed.
        </p>
      </div>
    </section>
  );
};

export default AppServices;
