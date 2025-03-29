function EndpointMonitoring() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-12 w-full text-center px-4">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Endpoint Monitoring</h1>
        <p className="text-2xl font-bold text-red-900">We Find What Others Miss</p>
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
              CTG understands that the most important data in the world is yours and helps you secure it via 24/7/365 Endpoint Monitoring.
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
              Rather than reacting to a cyberattack and conjuring a flimsy response, our professionals are constantly scouring the web for new threats so we can develop preventive defenses and well thought out playbooks in the event of a breach.


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
            <p className="text-neutral-800/60 text-lg leading-[30px] max-w-md">
             Industry best practices are moving from assumptions of High Trust (what is “Inside” is trusted and what is “Outside” is not) to a Zero Trust Model, where all traffic is considered hostile and on-going monitoring is a fundamental requirement to maintaining security. US government agencies were mandated by a Presidential 2022 Executive Order to migrate to Zero Trust Architectures within two years,, using micro-perimeters based on continuous identity verification, least privilege access, transactions validation and continuous threat monitoring. CTG's experts are ready to help you in this transition with 24/7/365 endpoint threat monitoring, so that only the right users get access to the right data you want them to have for the right reasons.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col md:flex-row w-full min-h-screen">
          <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
            <img
              src="../slide2.gif"
              alt="Strategic Security"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
            <p className="font-bold text-xl max-w-md text-red-700">
              "If you know the enemy and know yourself, you need not fear the efforts of a hundred hackers." - Sun Tzu (adapted)
            </p>
            <p className="mt-10 text-neutral-800/60 text-lg leading-[30px] max-w-md">
             Many organizations don't know what devices are accessing their networks or how many nodes they have. CTG first maps outs your architecture to provide that scope and then provides customized solutions based on the size and needs of your organization, that then monitor your data like a hawk. All day, all night, a never-blinking stare. That's the only way to stop hackers and ransomware attacks in their tracks. We use the US military's framework of “Find, Fix, Destroy.” Our persistent stare monitoring finds them, which allows you to isolate their attack, close the attack vulnerability and destroy their ability to continue their attack. Disgruntled, the hackers move on to pick on easier targets, of which sadly there are many.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EndpointMonitoring;
