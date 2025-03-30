import { ShieldCheck } from "lucide-react";

function CyberSecurityAssessment() {
  const assessments = [
    "Cybersecurity Policy Questionnaire",
    "Network Configuration Assessment",
    "Vulnerability Assessment",
    "Compliance Assessment",
    "Compromise Assessment",
    "Red Teaming, including Pen Tests",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Title - Visible on all screens */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 text-center mb-8">
          Cybersecurity Assessments
        </h1>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-gray-700 text-base md:text-lg">
                <span className="text-xl md:text-2xl font-bold text-red-700">BKY-CYBER</span>{" "}
                understands that the most important data in the world is yours and
                helps you secure it via customized Cybersecurity Assessments.
              </p>
              
              <p className="text-gray-700 text-base md:text-lg">
                We provide cybersecurity risk assessments based on the NIST SP
                800-171 Rev. 2 - Protecting Controlled Unclassified Information
                in Nonfederal Systems and Organizations and the NIST
                Cybersecurity Framework version 1.1 published April 16, 2018.
              </p>
              
              <p className="text-gray-700 text-base md:text-lg">
                We can also customize our assessment per your industry or
                individual needs, for instance, for ports we would add pertinent
                industry guidelines such as Navigation and Vessel Inspection
                Circular (NVIC) 01-20: Guidelines for Addressing Cyber Risks at
                Maritime transportation Security Act (MTSA) Regulated
                Facilities.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-red-700 mb-4">
                Types of Assessments
              </h2>
              <ul className="space-y-3">
                {assessments.map((assessment, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <ShieldCheck className="flex-shrink-0 w-5 h-5 text-red-500" />
                    <span className="text-sm md:text-base">{assessment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 md:h-full">
              <img 
                src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXtq6pkLcmxkKJhCFpAIS89osjUyMreHq03BO2" 
                alt="Cybersecurity Assessment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurityAssessment;