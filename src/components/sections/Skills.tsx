export function Skills() {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 px-5 py-1 rounded-xl text-sm text-gray-600 font-medium">
            Skills & tools
          </div>

          <div className="mt-4 text-xl text-gray-600 text-center max-w-xl">
            The skills and tools I am really good at:
          </div>
        </div>

        <div className="mt-4 flex gap-2.5 flex-wrap">
          <div className="flex-1 min-w-60">
            <strong>Skills:</strong>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Scrum Master</li>
              <li>Agile Methodologies</li>
              <li>Project Management</li>
              <li>Product Management</li>
              <li>Alliance Management</li>
              <li>Product Owner</li>
              <li>Data Analysis</li>
              <li>Marketing</li>
              <li>RoadmapMobile Applications</li>
              <li>Stakeholder Management Technical Background</li>
              <li>Accountable</li>
              <li>Storytelling</li>
              <li>Adaptability</li>
            </ul>
          </div>

          <div className="flex-1 min-w-60">
            <strong>Tools:</strong>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Figma</li>
              <li>Miro</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>Kibana</li>
              <li>Excel for Data Science</li>
              <li>Power BI</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
