
interface ExperienceItemProps {
  logo: string;
  title: string;
  period: string;
  description: React.ReactNode;
}

function ExperienceItem({
  logo,
  title,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] bg-white p-8 rounded-xl">
      <div className="flex gap-8 flex-wrap">
        <div className="w-[80px]">
          <img src={logo} alt={title} className="w-full" />
        </div>

        <div className="flex-1 min-w-60">
          <h3 className="text-xl font-semibold text-gray-900 leading-[1.4]">
            {title}
          </h3>
          <div className="mt-4 text-base text-gray-600">{description}</div>
        </div>

        <div className="text-base text-gray-700">{period}</div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="bg-gray-50 py-[108px]" id="experience">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 px-5 py-1 rounded-xl text-sm text-gray-600 font-medium">
            Experience
          </div>

          <div className="mt-4 text-xl text-gray-600 text-center max-w-xl">
            Here is a quick summary of my Job Experience:
          </div>
        </div>

        <div className="mt-12 space-y-12">
          <ExperienceItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/e7e04ad17fcad3bceaa64fb9b8b0f44bd20e61de?placeholderIfAbsent=true"
            title="Product Owner Order Processing / Order to Consumer"
            period="May 2021- Jan 2025"
            description={
              <>
                <p>
                  Created measurable value in the adidas eCommerce backend
                  platform by addressing market opportunities and customer
                  needs, optimizing processes using tools such as Jira,
                  Confluence, and Miro. I managed the implementation of various
                  initiatives throughout their lifecycle, collaborating with
                  Agile experts and engineers to build a high-performance team.
                </p>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Brazil New Warehouse (2023): </strong>
                    Implemented changes to electronic invoicing integration,
                    facilitating the integration of the Global Omnichannel
                    platform with a new warehouse in Brazil, covering
                    functionalities such as Returns, Split Shipments, and
                    Delivery Exceptions. This contributed to a reduction in tax
                    costs and an expected increase in net sales of €4.3M during
                    the first year.
                  </li>
                  <li>
                    <strong>LAM Personalization (2022): </strong>
                    Developed warehouse integration to identify personalized
                    orders and implemented adaptations to electronic invoicing,
                    enabling the deployment of this functionality in the
                    eCommerce of LATAM countries. This initiative allowed Latin
                    America to achieve a 31% share of net sales in World Cup
                    products, compared to global sales.
                  </li>
                  <li>
                    <strong>Brazil Roll out (2021 - 2022): </strong>
                    Executed the implementation of deviations from the global
                    eCommerce model during the deployment of the Omnichannel
                    platform in Brazil, including the activation of offline
                    payments, installment payments, electronic invoice
                    calculation and generation, and error management. This
                    implementation generates 2.3 million invoices annually.
                  </li>
                </ul>
              </>
            }
          />

          <ExperienceItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/8a477b93d5257efdef845dffb56f8d5a501a27e8?placeholderIfAbsent=true"
            title="Go to Market and Content Manager"
            period="Mar 2016 - Nov 2020"
            description={
              <>
                <p>
                  Executed comprehensive go-to-market plans for 10 products,
                  including smartphones, tablets, and wearable devices. I led the 
                  development of programs, strategic services, and benefits for 
                  mobile devices to drive sales, offering value, affordability, 
                  and differentiation. This encompassed the entire product lifecycle, 
                  from market research, supplier negotiation, and product strategy 
                  to marketing communication and sales force training.
                </p>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Product Go to Market: </strong>
                    Developed detailed strategies and coordinated with
                    cross-functional teams to align objectives and manage
                    project execution, identifying and mitigating risks. I
                    utilized project management tools to ensure compliance with
                    deadlines set by executives. As a result, I achieved the
                    successful launch of all products within the established
                    timeframe, increased collaboration among different
                    departments, and reduced launch times and process
                    uncertainty.
                  </li>
                  <li>
                    <strong>Trade-in (2018 - 2020): </strong>
                    Implemented a program that allowed customers to exchange
                    their old phones for discounts on the purchase of new
                    devices. This program was integrated with financing options
                    and offered up to a 50% discount, successfully boosting, for
                    example, 46% of the Galaxy Note20 sales at launch.
                  </li>
                </ul>
              </>
            }
          />

          <ExperienceItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/8a477b93d5257efdef845dffb56f8d5a501a27e8?placeholderIfAbsent=true"
            title="App Store Content Assistant Manager / Supervisor"
            period="Jun 2010 - Feb 2016"
            description={
              <>
                <p>
                  Led the development of applications for Samsung devices,
                  covering everything from market research and product strategy
                  to design, prioritization, marketing communication, budget,
                  and contracts.
                </p>
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Samsung Concierge Application (2015-2016): </strong>
                    Developed the loyalty application for Premium customers, which 
                    offered exclusive benefits, such as 24/7 agent support for 
                    resolving technical problems via chat or call. This application 
                    was integrated with Salesforce, significantly increasing Premium 
                    sales, with a 30% customer adoption rate, and was recognized as 
                    the best implementation in Latin America. Project management 
                    tools were utilized.
                  </li>
                  <li>
                    <strong>Application Ecosystem (2010 – 2015): </strong>
                    Created a developer ecosystem that produced more than 100
                    applications for Smartphones, Tablets, TVs, Wearable
                    devices, and Gear VR devices, generating value and
                    differentiation for Samsung consumers. Project management
                    tools were utilized.
                  </li>
                </ul>
              </>
            }
          />

          <ExperienceItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/8a477b93d5257efdef845dffb56f8d5a501a27e8?placeholderIfAbsent=true"
            title="Project Manager for Latin America"
            period="Nov 2008 - Jun 2010"
            description="Manage the implementation of Chat Ideas Web, SMS, and SAT (SIM Browsing) platforms for Latin American countries."
          />

          <ExperienceItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/8a477b93d5257efdef845dffb56f8d5a501a27e8?placeholderIfAbsent=true"
            title="Account Manager / Mobile Product Designer"
            period="Jan 2005 - Oct 2008"
            description="Positions: Account manager (2008), Mobile Product Designer (2007), Mobile Department Chief (2006– 2007), Senior Mobile Developer (2006), Junior Mobile Developer (2005)."
          />
        </div>
      </div>
    </section>
  );
}
