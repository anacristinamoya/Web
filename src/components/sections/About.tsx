export function About() {
  return (
    <section className="bg-gray-50 py-5" id="about">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 px-5 py-1 rounded-xl text-sm text-gray-600 font-medium">
            About me
          </div>
        </div>

        <div className="flex gap-12 mt-12 flex-wrap">
          <div className="flex-1 min-w-[420px]">
            <div className="max-w-[532px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92befcbbb340076a877457880148db974d1b4a15?placeholderIfAbsent=true"
                alt="About"
                className="w-full aspect-[1.33] object-cover"
              />
            </div>
          </div>

          <div className="flex-1 min-w-[420px] max-w-[632px]">
            <h3 className="text-gray-900 text-3xl font-semibold leading-[1.2] tracking-[-0.6px]">
              Curious about me? Here you have it:
            </h3>

            <div className="mt-6 text-base text-gray-600">
              <p>
                I am an electronic and telecommunications engineer with a
                master's in marketing, which gives me a perfect combination of
                technical and marketing knowledge. The last 19 years in the
                product industry have given me a deep understanding of the
                entire product life cycle, from product ideation, and market
                research to go-to-market strategy.
              </p>
              <br />
              <p>
                I've generated value and increased sales throughout my career
                through successful product development and project management.
                My experience at adidas, as a Product Owner for the e-Commerce
                back end, allowed me to collaborate effectively with
                cross-functional teams, from different regions, manage complex
                initiatives, and deliver results in an agile environment.
                Additionally, my prior roles at Samsung exposed me to the
                dynamic world of mobile applications and services and reinforced
                my ability to understand customer needs and translate them into
                successful products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
