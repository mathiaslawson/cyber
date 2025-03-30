import { Circle } from "lucide-react";

function SpecializedGovernmentServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="w-full mx-auto">
        {/* First Row - Text on left, Image collage on right */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Text */}
          <div className="md:w-1/3 p-8">
            <div className="flex flex-col h-full justify-center">
              <header className="flex justify-center flex-col items-center">
                <h1 className="text-5xl max-w-md font-bold text-red-700 mb-4 text-center">
                  Investigations Support
                </h1>
                <h1 className="text-xl max-w-md font-bold text-red-900 mb-4 text-center">
                  BKY-CYBER has deep experience supporting government investigations.
                </h1>
              </header>

              <p className="text-neutral-800/60 text-lg leading-relaxed text-center">
                Its founders are US Army veterans, one a career Special Agent
                <span className="text-red-700 font-bold">
                  (equivalent to an FBI agent)
                </span>{" "}
                who was a pioneer in creating cyber Red Teams and the other
                became a banking executive focused on new banking technologies
                and is currently is a licensed private investigator in the state
                of Texas.
              </p>

              <p className="text-neutral-800/60 text-lg leading-relaxed text-center mt-5">
                <span className="text-red-700 text-2xl mr-4 font-bold">
                  {" "}
                  BKY-CYBER's
                </span>
                lab performs investigations on many types of criminal cases. We
                have experts with experience in technology, intelligence, and
                law enforcement. With our background in these departments, we
                can arrange expert witness testimonies to accompany the data
                recovery and evidence we find. We are also skilled at creating
                affidavits and reports.
              </p>
            </div>
          </div>

          {/* Right Column - Image Collage (2x2 grid with no gaps) */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 h-full">
              <img
                src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXD7LRJwpYwEaLRm2Jjro9eGZ7U4dBOfKVTpnz"
                alt="Data Recovery Visual 1"
                className="w-full h-full object-cover"
              />
              <img
                src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXqZR28in56Zfc7NbkPYvzj1Beo4ryduJG9IKa"
                alt="Data Recovery Visual 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Centered Card Section */}
        <div
          className="py-16 px-4 bg-white bg-cover bg-center bg-no-repeat h-[100svh]"
          style={{ backgroundImage: "url('https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXtq6pkLcmxkKJhCFpAIS89osjUyMreHq03BO2')" }}
        >
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-[80svh]">
            <div className="p-8">
              <h2 className="text-md font-bold text-red-900 mb-6 text-center">
                Investigation Support
              </h2>
              <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">
                Evidence Collection & Preservation
              </h2>

              <div className="flex justify-center">
                <p className="text-neutral-800/60 text-lg mb-6 leading-[50px] text-center max-w-md">
                  We use techniques that are write-protected and are verifiable
                  with complex hash algorithms. We also enforce strict
                  chain-of-custody protocol to ensure all evidence is
                  accountable. Devices that we can perform data recovery on
                  include email servers, desktop computers, laptops, mobile
                  devices, backup devices, and network shares. We have a full
                  fledged Data Recovery lab on site to assist with any issues
                  with inaccessible devices. This is especially helpful in cases
                  where someone intentionally damaged a device.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <header className="py-12 w-full text-center px-4">
            <h1 className="text-4xl font-bold text-red-700 mb-4">
              Cyber Security & Data Recovery
            </h1>
            <p className="text-2xl font-bold text-red-900">
              Multidimensional Security
            </p>
          </header>

          {/* Main Content */}
          <main className="w-full border-t border-black">
            {/* Section 1 */}
            <section className="flex flex-col md:flex-row w-full min-h-screen">
              <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
                <img
                  src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXu5uCZIScDlK02NwM5nXVbg7AeuOQJ3Ttimrv"
                  alt="Proactive Security"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-3xl max-w-md text-red-700">
                  BKY-CYBER offers all government
                </p>
                <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
                  Agencies (local, state, and federal), schools, and hospitals
                  special rates for our Tier 1 Professional Services expertise
                  in Data Recovery and Computer Forensics.
                </p>
                <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
                  We have successfully served those organizations requiring
                  strict controls and qualifications so as to handle
                  mission-critical and sensitive data.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col md:flex-row-reverse w-full min-h-screen">
              <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
                <img
                  src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXD7LRJwpYwEaLRm2Jjro9eGZ7U4dBOfKVTpnz"
                  alt="Zero Trust Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-3xl max-w-md text-red-700 mt-6 mb-6">
                  Here are Some of the Reasons Why Government Agencies Choose
                  BKY-CYBER's Lab
                </p>
                <ul className="space-y-3">
                  <div className="flex justify-center">
                    <ul className="w-3/4 md:w-1/2 space-y-4">
                      {[
                        "Our data recovery/computer forensics lab is ISO/IEC 17025:2017 compliant and accredited by the ANSI National Accreditation Board (ANAB).",
                        "Flood/Fire/Natural Disaster",
                        "Deleted Files/Reformatted/Corrupted Operating Systems",
                        "Damaged Media/Electrical Surges/Data lost from Hackers and Viruses",
                        "All Operating Systems (Windows, MAC, LINUX, UNIX, & NOVELL)",
                        "Data Recovery Cost Protection for Agency/School/Hospital/Corporate Technology Refresh",
                        "Media Conversion (Interchange of data between any media forms)",
                        "Agency/Corporate Risk Assessments",
                      ].map((assessment, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-3 text-gray-700 p-4 rounded-lg"
                        >
                          <Circle className="w-2 h-2 text-red-500" />
                          <span>{assessment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ul>
              </div>
            </section>

            <section className="flex flex-col md:flex-row w-full min-h-screen">
              <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
                <img
                  src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXu5uCZIScDlK02NwM5nXVbg7AeuOQJ3Ttimrv"
                  alt="Proactive Security"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-3xl max-w-md text-red-700">
                  We conduct Data Recovery onsite in our Class 10 Clean Room
                  (ISO Level 4)
                </p>
               
                <div className="flex justify-center">
                  <ul className="space-y-4">
                    {[
                      "All Media Types",
                      "  Hard Drives/RAID Arrays",

                      "Flash Media",

                      "Tapes",
                      " Recovery of Data (Physical/Logical)",
                    ].map((assessment, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 text-gray-700/50 rounded-lg mt-8"
                      >
                        <span>{assessment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>
    </div>
  );
}

export default SpecializedGovernmentServices;
