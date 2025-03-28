function IncidentResponse() {
  return (
    <div className="flex justify-center">
      <div className="text-center max-w-4xl mt-10">
        <div>
          <p className="text-5xl font-bold mb-10">Incident Response</p>
          <p className="leading-[40px] text-xl">
            One of the cornerstones of modern cybersecurity is incident
            response. This concept describes how cybersecurity professionals
            respond to security breaches or other compromising incidents in
            their networks. Effective incident response requires constant
            training on the latest threats, tools, and techniques for combatting
            digital attacks. Modern cybersecurity is a requirement in the
            digital age, but many organizations' internal IT security
            departments do not have the training, resources, or manpower to
            fight sophisticated cyberattacks.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <img src="../mon.gif"></img>
        </div>

        <div>
          <p className="leading-[40px] mt-10 text-xl">
            In the event of a cybersecurity incident, <span className="text-red-600 font-bold text-4xl">CTG</span> uses uses the industry
            standard best practice incident response guidelines, following the
            NIST Computer Security Incident Handling Guide 800-61 Revision
            2-recommended seven step process: Prepare; Identify; Contain;
            Eradicate; Restore; Learn; Test and Repeat.
          </p>

          <p className="leading-[40px] mt-10 text-xl">
            Our teams have remote access to clients' enterprise systems,
           <span className="text-red-600 font-bold">allowing them to respond to threats as soon as they happen.</span>  Only in
            rare cases do we need to deploy to put “boots on the ground.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncidentResponse;
