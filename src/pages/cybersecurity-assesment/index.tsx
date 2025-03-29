import { ShieldCheck } from "lucide-react";

function CyberSecurityAssesment() {
  const assessments = [
    "Cybersecurity Policy Questionnaire",
    "Network Configuration Assessment",
    "Vulnerability Assessment",
    "Compliance Assessment",
    "Compromise Assessment",
    "Red Teaming, including Pen Tests",
  ];

  return (
    <div className="flex justify-center mb-10">
      <div className="text-center max-w-[80%] mt-10">
        <div className="flex flex-row gap-9">
          <div className="leading-[45px] w-full">
            <p className="text-5xl font-bold text-red-700">
              {" "}
              Cybersecurity Assessments
            </p>
            <p className="mt-7">
              <span className="text-2xl font-bold text-red-700">CTG</span>{" "}
              understands that the most important data in the world is yours and
              helps you secure it via customized Cybersecurity Assessments.
              <br />
              <p className="mt-10">
                We provide cybersecurity risk assessments based on the NIST SP
                800-171 Rev. 2 - Protecting Controlled Unclassified Information
                in Nonfederal Systems and Organizations and the NIST
                Cybersecurity Framework version 1.1 published April 16, 2018. We
                can also customize our assessment per your industry or
                individual needs, for instance, for ports we would add pertinent
                industry guidelines such as Navigation and Vessel Inspection
                Circular (NVIC) 01-20: Guidelines for Addressing Cyber Risks at
                Maritime transportation Security Act (MTSA) Regulated
                Facilities.
              </p>
            </p>

            <h2 className="text-xl font-semibold text-red-700 mb-4 mt-10">
              Types of Assessments
            </h2>
            <ul className="space-y-3">
              {assessments.map((assessment, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <span>{assessment}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <img src="../contact.png" className="h-full"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurityAssesment;
