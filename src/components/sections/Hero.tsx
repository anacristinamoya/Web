
import { CopyButton } from "@/components/ui/copy-button";

export function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First column - Text content */}
          <div className="flex flex-col max-w-screen-md">
            <div className="flex flex-col">
              <h2 className="text-gray-900 text-6xl font-bold leading-[1.2] tracking-[-1.2px]">
                Hi, I'm Ana Cristina 👋
              </h2>
              <p className="text-gray-600 text-base mt-2">
                I'm a results-driven <strong>Product Manager</strong> with 19
                years of experience. Possesses technical expertise as an
                Electronic and Telecommunications Engineer, complemented by the
                strategic and business insights of a Master of Marketing. Proven
                ability to translate market needs and data analysis into
                innovative solutions, consistently generating value and
                increasing sales through successful product development and
                project management. Expertise in collaborating with
                cross-functional teams to lead all stages of the product life
                cycle, from market research and strategic planning to
                development, deployment, and go-to-market execution.
              </p>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-2 text-gray-600">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e2797b82bd08bed82ae2e86c5fc55489538c5c5?placeholderIfAbsent=true"
                  alt="Location"
                  className="w-6 h-6"
                />
                <span>Cali, Colombia</span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center justify-center w-6 h-6">
                  <div className="bg-emerald-500 w-2 h-2 rounded-full" />
                </div>
                <span className="text-gray-600">
                  Available for new job opportunities
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-[8px] text-[rgba(34,34,34,1)] font-medium">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fcc29420a487775a5cce0d24706a4bbcf012545?placeholderIfAbsent=true"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
                <span className="underline">ana-cristina-moya</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="underline">anacristina.moya@gmail.com</span>
                <span>+57 301 7864054</span>
              </div>
            </div>
          </div>

          {/* Second column - Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8becb8f2cddca1d792ba40fbd6d00146ca9c4dc3?placeholderIfAbsent=true"
              alt="Ana Cristina Moya"
              className="w-[400px] max-w-full rounded-[500px] aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
