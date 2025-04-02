import { CopyButton } from "@/components/ui/copy-button";

export function Contact() {
  return (
    <section className="bg-white py-24" id="contact">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 px-5 py-1 rounded-xl text-sm text-gray-600 font-medium">
            Get in touch
          </div>

          <div className="mt-4 text-xl text-gray-600 text-center max-w-xl">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45bc1ad789be1568472b47e14b44d3b2d104e7a0?placeholderIfAbsent=true"
              alt="Email"
              className="w-8 h-8"
            />
            <span className="text-gray-900 text-4xl font-semibold tracking-[-0.72px]">
              anacristina.moya@gmail.com
            </span>
            <CopyButton value="anacristina.moya@gmail.com" />
          </div>

          <div className="flex items-center gap-5 mt-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0a57de2a4334db632f345e800f0e81ba025a77?placeholderIfAbsent=true"
              alt="Phone"
              className="w-8 h-8"
            />
            <span className="text-gray-900 text-4xl font-semibold tracking-[-0.72px]">
              +57 3017864054
            </span>
            <CopyButton value="+57 3017864054" />
          </div>

          <div className="flex items-center gap-5 mt-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e0410cf06da025bf8c467859880db133ba863f?placeholderIfAbsent=true"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <span className="text-gray-900 text-4xl font-semibold tracking-[-0.72px]">
              ana-cristina-moya
            </span>
            <CopyButton value="ana-cristina-moya" />
          </div>
        </div>
      </div>
    </section>
  );
}
