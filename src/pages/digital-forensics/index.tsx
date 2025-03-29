import { digitalLogos } from "../hero/data";

function DigitalForensics() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-12 w-full text-center px-4 flex justify-center flex-col">
        <p className="text-2xl font-bold text-red-900">
          We Find What Others Miss
        </p>
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Digital Forensics
        </h1>
        <div className="flex justify-center">
          <div className="flex justify-center flex-col">
            <p className="text-2xl font-bold text-red-700 mt-9">
              What are Digital Forensics?
            </p>
            <p className="mt-4 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              Rather than reacting to a cyberattack and conjuring a flimsy
              response, our professionals are constantly scouring the web for
              new threats so we can develop preventive defenses and well thought
              out playbooks in the event of a breach.
            </p>
            <p className="text-2xl font-bold text-red-700 mt-9">
              Crime lab and Asci 17025 certifications.
            </p>
            <p className="mt-4 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              The context is most often for the usage of data in a court of law,
              though digital forensics can be used in other instances.
              -Techopedia.
            </p>
            <p className="text-2xl font-bold text-red-700 mt-9">
              Evidence Preservation
            </p>
            <p className="mt-4 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              Even if no forensic analysis is necessary at the time of
              submission, we can forensically acquire digital devices to
              preserve the data for later use.
            </p>
          </div>
        </div>

        <div>
          <section className="p-20 bg-white">
            <div className="px-4">
              <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-[200px] space-y-16 md:space-y-1 ">
                {digitalLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="w-[150px]"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full border-t border-black">
        {/* Section 1 */}
        <section className="flex flex-col md:flex-row w-full min-h-screen">
          <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
            <img
              src="../mon.gif"
              alt="Proactive Security"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
            <p className="font-bold text-3xl max-w-md text-red-700">
              CTG Offers World Class Digital Forensics & Data Recovery
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              CTG Offers World Class Digital Forensics & Data Recovery And
              ISO17025:2017 Accredited - The international gold standard, equal
              to the US FBI and DEA. Our Digital Forensics capacity supports
              Expert Testimony in civil courts or for Criminal Prosecution
            </p>

            <p className="font-bold text-3xl max-w-md text-red-700 mt-8">
              Expert Services
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              Our experts assist clients with development of forensic protocols
              and orders, as well as regularly provide expert witness testimony
              in court.
            </p>

            <p className="font-bold text-3xl max-w-md text-red-700 mt-8">
              Mobile Device Seizure and Investigation
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              Our experts are trained in advanced extraction methods such as
              JTAG, ISP, Chip off, and EDL Mode extractions. Common services
              include production of all data for review, searches for keywords,
              and recovery of deleted items.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col md:flex-row-reverse w-full min-h-screen">
          <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
            <img
              src="../slide.gif"
              alt="Zero Trust Architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
            <p className="font-bold text-3xl max-w-md text-red-700">
              Our Lab Leads
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              The United States in recovering• Hard Drives• Solid State Drives•
              Flash Drives• Cell Phones• Mobile Devices• Servers / RAID Arrays•
              Tapes
            </p>

            <p className="font-bold text-3xl max-w-md text-red-700 mt-8">
              Data Reconstruction
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              We have a full service data recovery lab in house. We have
              advanced data recovery capabilities that no other digital
              forensics lab can match.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DigitalForensics;
