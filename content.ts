export const site = {
  name: "Sivamanikandan R",
  resume: "",
  linkedin: "",
  github: "",
  email: "sivamanikandan0206@gmail.com",
};

export const links = [["About","about"],["Work","work"],["Product Thinking","thinking"],["Skills","skills"],["Experience","experience"],["Contact","contact"]] as const;

export const skills: Record<string,string[]> = {
  Product:["Product discovery","Problem framing","PRDs","User stories","MVP definition","Feature prioritization","Roadmapping","Agile / Scrum"],
  Analytics:["SQL","Excel","Power BI","Tableau","Funnel analysis","Metric definition"],
  Research:["User interviews","Customer feedback","Competitor analysis","Journey mapping","Problem validation"],
  Tools:["Jira","Figma","Miro","Notion","Trello","Whimsical"],
};

export const experience = [
  {
    org:"TeachEdison / EdisonOS",
    role:"Associate Product Manager",
    dates:"Sep 2025 – Aug 2026",
    worked:"Worked on AI-powered education products, owning product initiatives from problem discovery and requirements through UX collaboration, testing, launch, and iteration. Led work across the AI Question Extractor and Bluebook Insights while working closely with design, engineering, and customer-facing teams.",
    learned:"Learned to balance customer needs, business priorities, technical constraints, and speed while making product decisions in a fast-moving SaaS environment.",
    impact:"Contributed to taking the AI Question Extractor beyond beta and iterating on capabilities including image extraction, extraction history, email notifications, JSON export, and its integration into the wider product experience."
  },
  {
    org:"Chartwells Higher Ed",
    role:"Inventory Manager & Supervisor",
    dates:"Sep 2024 – Feb 2025",
    worked:"Managed day-to-day operations for a university food-service environment, including inventory planning, ordering, team coordination, scheduling, and process improvement across a 30-person team.",
    learned:"Built a strong understanding of operational problems, stakeholder coordination, prioritization, and making decisions under real-world constraints.",
    impact:"Reduced food waste by 90%, improved order accuracy to 100%, reduced processing time by 25%, increased shift coverage by 30%, and reduced overtime costs by 20%."
  },
  {
    org:"Tata Motors",
    role:"Sales & Data Analyst Intern",
    dates:"Jun 2023 – Aug 2023",
    worked:"Supported sales and customer-focused initiatives using data to identify trends, improve reporting, and support promotional activities.",
    learned:"Strengthened my ability to turn data into practical business insights and communicate findings to stakeholders.",
    impact:"Contributed to database efficiency, customer engagement, and data-informed promotional initiatives."
  },
  {
    org:"MM Sweets & Bakery",
    role:"Administrator – Business Operations",
    dates:"Jan 2021 – Aug 2022",
    worked:"Managed supplier coordination, procurement, daily operations, and customer-facing business processes for a high-volume bakery environment.",
    learned:"Developed an early interest in understanding customers, improving processes, and finding practical ways to make a business run better.",
    impact:"Reduced procurement costs by 10% while supporting operations serving 1,000+ customers daily."
  },
  {
    org:"Northern Kentucky University",
    role:"MBA – Business Analytics & Supply Chain Management",
    dates:"Graduate",
    worked:"Combined business analytics, supply chain, strategy, and management coursework with practical problem-solving and data-driven decision making.",
    learned:"The program gave me the business and analytical foundation I now apply to product decisions.",
    impact:"GPA: 3.66 / 4.00"
  },
];

export type Study = { id:string; title:string; category:string; blurb:string; tools:string[]; outcome:string; sections:[string,string][] };

export const studies: Study[] = [
  {
    id:"ai-extractor",
    title:"AI Question Extractor",
    category:"AI Product · EdTech",
    blurb:"Turning a manual education workflow into an AI-assisted product experience.",
    tools:["Product discovery","PRD","Figma","Jira","Customer feedback","Agile"],
    outcome:"Moved beyond beta into customer usage and continued product iteration.",
    sections:[
      ["Context","The product team was building AI capabilities to help educators and content teams reduce the manual effort involved in turning source material into structured questions."],
      ["Problem","Users needed a faster way to extract questions from educational content without repeatedly copying, formatting, and restructuring material by hand."],
      ["My role","I worked as the product owner for the initiative, helping translate user needs and customer feedback into requirements, collaborating with design and engineering, and supporting testing and launch decisions."],
      ["Product decisions","The experience evolved through customer feedback and iteration. Key improvements included image extraction, extraction history, email notifications, JSON export, and bringing the AI extractor into the broader Artifacts / Tools Hub experience."],
      ["Execution","I worked across product requirements, UX discussions, prioritization, testing, issue resolution, and stakeholder communication while the feature moved from beta toward wider usage."],
      ["Outcome","The AI Extractor moved beyond beta and began seeing customer usage. That usage created a feedback loop for identifying bugs, usability issues, and opportunities for further improvements."],
      ["What I learned","A useful AI feature is not just about model capability. The surrounding workflow, user confidence, error handling, history, notifications, and export options can determine whether users actually adopt it."]
    ]
  },
  {
    id:"bluebook",
    title:"Bluebook Insights",
    category:"Product · Education",
    blurb:"Using product thinking and customer feedback to improve an education-focused insights experience.",
    tools:["Customer feedback","Product discovery","UX collaboration","Prioritization","Agile"],
    outcome:"Ongoing product refinement driven by user needs and product feedback.",
    sections:[
      ["Context","Bluebook Insights was one of the education-focused product areas I worked on alongside the AI product initiatives."],
      ["Problem","The challenge was to make the information and insights useful enough for users to understand what the data meant and what they should do next."],
      ["My role","I contributed to understanding user needs, identifying product pain points, translating feedback into improvements, and working with design and engineering on product refinements."],
      ["How I approached it","I focused on the user's workflow first: what information they need, where they get confused, what action they are trying to take, and which improvements would create the most value."],
      ["Execution","Worked cross-functionally through requirements, UX discussions, prioritization, testing, feedback collection, and iteration."],
      ["Outcome","The product continued to evolve through customer and stakeholder feedback, with an emphasis on making the experience clearer and more useful rather than simply adding more functionality."],
      ["What I learned","Good product decisions often come from removing confusion and improving the path to value, not from adding more features."]
    ]
  },
  {
    id:"college-ai",
    title:"AI College Eligibility Advisor",
    category:"Product Concept · AI",
    blurb:"Designing an AI-assisted college discovery experience around a student's academic profile.",
    tools:["Problem framing","User journey","MVP planning","AI product thinking","Feature prioritization"],
    outcome:"A proposed MVP focused on helping students discover realistic college options faster.",
    sections:[
      ["Problem","Students often have scores and academic information but struggle to translate that information into a realistic shortlist of colleges and majors."],
      ["Users","Students researching colleges, especially those who want a starting point rather than a long list of generic recommendations."],
      ["Concept","The student provides GPA, SAT / ACT score, state, school, and intended major. The product returns a practical college shortlist with context around score ranges and recommendations."],
      ["MVP","Start with a focused recommendation flow rather than building a full college search platform. The MVP would collect the minimum inputs needed and return a clear, explainable shortlist."],
      ["Success metrics","Recommendation completion rate, shortlist saves, click-through to college details, repeat usage, and qualitative confidence in the recommendations."],
      ["Key product question","How do we make recommendations useful and trustworthy without presenting an AI-generated list as a guarantee of admission?"],
      ["What I learned","AI products need strong boundaries and clear communication. The product should help users make better decisions, not pretend to make the decision for them."]
    ]
  }
];

export const steps = [
  ["01 Understand","Who is the user? What problem are they having? What evidence do we have?","User interviews, customer feedback, funnel review, support themes"],
  ["02 Define","What is the actual problem? Which assumptions are we making?","Clear problem statement and assumptions"],
  ["03 Prioritize","Which opportunity creates the most value relative to effort?","Impact × effort, RICE, MoSCoW or similar frameworks"],
  ["04 Build","What is the smallest useful version we can ship and learn from?","PRD, user stories, acceptance criteria, UX flows"],
  ["05 Measure","How will we know whether the product actually created value?","Primary, supporting and guardrail metrics"],
  ["06 Learn","What happened, what surprised us, and what should change next?","Experiment readout and next-iteration decisions"],
];

export const metricLadder = [
  ["North Star metric","The clearest signal that users are receiving meaningful value."],
  ["Primary product metric","The metric the feature is directly expected to influence."],
  ["Supporting metrics","Metrics that help explain why the primary metric moved."],
  ["Guardrail metrics","Signals that make sure an improvement in one area does not create a problem elsewhere."],
];

export const funnel = [["Visited",100],["Signed up",68],["Used core feature",41],["Came back in 7 days",23]] as const;

export const lenses = [
  ["Funnel analysis","Where do users drop off?"],["Cohort analysis","Do users keep finding value?"],
  ["Feature adoption","Are people actually using it?"],["Experiment analysis","Did the change move the target metric?"],
  ["Customer feedback","What are users repeatedly struggling with?"],
];

export const questions = [
  ["Why do users drop off here?","A drop is a symptom. I look at the step before it, the segment affected, and what users said."],
  ["What problem are we actually solving?","I try to separate the underlying user problem from the feature someone requested."],
  ["What happens if we don't build this?","The cost of not building something helps distinguish a real need from a nice-to-have."],
  ["What is the smallest version we can test?","Smaller tests help teams learn faster and reduce the cost of being wrong."],
  ["Which metric should move if this works?","If no meaningful outcome should change, I question whether we are solving the right problem."],
  ["Is this a user problem or just a feature?","Features without a clear problem can add complexity without creating value."],
  ["Which assumption could make this idea fail?","I want to identify and test the riskiest assumption early."],
];
