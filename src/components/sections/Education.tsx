
interface EducationItemProps {
  logo: string;
  title: string;
  period: string;
  description?: React.ReactNode;
}

function EducationItem({
  logo,
  title,
  period,
  description,
}: EducationItemProps) {
  return (
    <div className="shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] bg-white p-8 rounded-xl">
      <div className="flex gap-8 flex-wrap">
        <div className="w-[116px]">
          <img src={logo} alt={title} className="w-full" />
        </div>

        <div className="flex-1 min-w-60">
          <h3 className="text-xl font-semibold text-black leading-[1.4]">
            {title}
          </h3>
          {description && (
            <div className="mt-4 text-base text-gray-600">{description}</div>
          )}
        </div>

        <div className="text-base text-gray-700">{period}</div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <section className="bg-gray-50 py-5" id="education">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 px-5 py-1 rounded-xl text-sm text-gray-600 font-medium">
            Education / Certification
          </div>

          <div className="mt-4 text-xl text-gray-600 text-center max-w-xl">
            Here my Education and Certification details.
          </div>
        </div>

        <div className="mt-12 space-y-12">
          <EducationItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/85abb6ab57c5804f6987eafc3e1d83ba22eec606?placeholderIfAbsent=true"
            title="DATA SCIENCE FOR BUSINESS MANAGERS"
            period="Oct - Dec 2024"
            description={
              <>
                <p>
                  This intensive training equipped me with practical skills in
                  data analysis, machine learning, and visualization tools like
                  Python, Power BI, SQL, and advanced Excel techniques.
                </p>
                <br />
                <p>
                  It was an honor to learn from Professor Peter Lou, He
                  demonstrated a strong passion for the subject matter. He was
                  always motivated to learn cutting-edge tools and expand the
                  capabilities of AI in our daily assignments, always open to
                  solving our questions in our live classes, with incredible
                  guest speakers!
                </p>
                <br />
                <strong>Key takeaways:</strong>
                <br />
                • Mastered essential tools: From advanced Excel, Power BI, and
                SQL to Python programming and machine learning libraries, I
                gained hands-on experience with the data science toolkit.
                <br />
                • Bridging the gap: I learned to effectively collaborate with
                data scientists and engineers to translate data insights into
                actionable business strategies.
                <br />
                <br />
                My favorite part was our final project, where we analyzed the
                Financial Performance of Companies from the S&P500, cleaned the
                data, and created a Machine Learning model to predict whether to
                buy, sell, or hold the stocks with the given data.
              </>
            }
          />

          <EducationItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/85abb6ab57c5804f6987eafc3e1d83ba22eec606?placeholderIfAbsent=true"
            title="Fundamentals of Product Management"
            period="Jan - Mar 2021"
            description={
              <>
                <p>
                  This is a unique experience to know more in detail all the
                  tasks and processes of the role as Product Manager.
                </p>
                <br />
                <p>
                  The best part of this course was to have the opportunity to
                  participate in our class project. Our team's name was 24x7 as
                  we were located in Germany, the USA, Brazil, and Colombia. It
                  was a wonderful opportunity to work with these amazing people
                  with high skills, in different time zones, who came together
                  to create an MVP. It will be difficult to find these great
                  colleagues in a single company and working with this team was
                  an honor to me!
                </p>
              </>
            }
          />

          <EducationItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/eb0de67f6474cfd105a0251438e569f1a051c364?placeholderIfAbsent=true"
            title="Master of Marketing"
            period="2015 - 2017"
            description={
              <>
                <p>
                  I learned about marketing theory, according to the state of
                  the art in the different subjects, and compare what I learned
                  with practice through different pedagogical approaches, which
                  allowed me to connect learning with my work environment.
                </p>
                <br />
                <p>
                  This program, consistent with the University and the Faculty,
                  has an explicit commitment to the training of leaders who
                  promote sustainable innovation processes in organizations and
                  that have a positive impact on all areas of society.
                </p>
              </>
            }
          />

          <EducationItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/834629a515e6a48b0486053436dd8ad281365ba3?placeholderIfAbsent=true"
            title="Electronic and Telecommunication Engineer"
            period="1998 - 2004"
          />

          <EducationItem
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/6329021eeb284b527cf6878d6bf79fc55d57634d?placeholderIfAbsent=true"
            title="Scrum Master Professional Certificate - SMPC"
            period="2018 & 2020"
          />
        </div>
      </div>
    </section>
  );
}
