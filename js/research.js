// javascript functions for research tab

var researchList = [
  {
    name: "Inferring Belief States in Partially-Observable Human-Robot Teams",
    conference: "true",
    authors: "<b>Jack Kolb</b>, Karen M. Feigh",
    paper:
      "https://jackkolb.com/pdf/IROS_24_Inferring_Belief_States_in_Partially_Observable_Human_Robot_Teams.pdf",
    tools: "Conference Proceedings of IEEE/RSJ IROS '24",
    time: "2024",
    status: "Complete",
    short:
      "Presents an architecture for predicting user responses to situation responses in human-robot teams, evaluated on a modified OvercookedAI domain.",
    long: "[ABSTRACT] We investigate the real-time estimation of human situation awareness using observations from a robot teammate with limited visibility. In human factors and human-autonomy teaming, it is recognized that individuals navigate their environments using an internal mental simulation, or \textit{mental model}. The mental model informs cognitive processes including situation awareness, contextual reasoning, and task planning. In teaming domains, the mental model includes a \textit{team model} of each teammate's beliefs and capabilities, enabling fluent teamwork without the need for explicit communication. However, little work has applied team models to human-robot teaming. In this work we compare the performance of two models, logical predicates and large language models, at estimating user situation awareness over varying visibility conditions. Our results indicate that the methods are largely resilient to low-visibility conditions in our domain, however opportunities exist to improve their overall performance.",
  },
  {
    name: "Human-AI Collaboration in Autonomous Aerial Vehicles for ISR: Experience, Trust, and Perception",
    conference: "true",
    authors:
      "Richard Agbeyibor, Vedant Ruia,  <b>Jack Kolb</b>, Karen M. Feigh",
    paper:
      "https://jackkolb.com/pdf/SciTech_24_Impact_of_Abstraction_Levels_of_Context_Information_on_AI_Advised_Decision_Making_for_an_Entry_Descent_and_Landing_Task.pdf",
    tools: "Conference Proceedings of HFES ASPIRE '24",
    time: "2024",
    status: "Complete",
    short:
      "Users participate in a simulated ISR domain with an autonomous pilot, and provide feedback on several modes of autonomy we presented them with.",
    long: "[ABSTRACT] AI-advised Decision Making is a form of human-autonomy teaming in which an AI recommender system suggests a solution to a human operator, who is responsible for the final decision. This work seeks to empower and effectively utilize these human decision makers by supporting their cognitive process of judgement. Previous work has found that providing decision makers with relevant information that the AI uses to generate possible courses of action improves crucial team decision-making metrics, and is a viable alternative solution to explaining or interpreting complex AI models. This paper investigates whether this technique and its observed benefits hold when the relevant information provided to the decision maker is displayed at different levels of abstraction. Findings indicate that this technique of supporting the human’s judgement process is effective in (1) boosting the human decision maker’s situation awareness and task performance, (2) calibrating their trust in AI teammates, and (3) reducing over-reliance on an AI partner, irrespective of the abstraction level at which information was displayed.",
  },
  {
    name: "Towards Safe Collaboration Between Autonomous Pilots and Human Crews for Intelligence, Surveillance, and Reconnaissance",
    conference: "true",
    authors:
      "Richard Agbeyibor, Vedant Ruia,  <b>Jack Kolb</b>, Carmen Cortes, Ty Mancao, Samuel Coogan, Karen M. Feigh",
    paper:
      "https://jackkolb.com/pdf/SciTech_24_Impact_of_Abstraction_Levels_of_Context_Information_on_AI_Advised_Decision_Making_for_an_Entry_Descent_and_Landing_Task.pdf",
    tools: "Conference Proceedings of IEEE DASC '24",
    time: "2024",
    status: "Complete",
    short:
      "Control barrier functions are used to control an autonomous pilot of an ISR aircraft with a human teammate.",
    long: "[ABSTRACT] AI-advised Decision Making is a form of human-autonomy teaming in which an AI recommender system suggests a solution to a human operator, who is responsible for the final decision. This work seeks to empower and effectively utilize these human decision makers by supporting their cognitive process of judgement. Previous work has found that providing decision makers with relevant information that the AI uses to generate possible courses of action improves crucial team decision-making metrics, and is a viable alternative solution to explaining or interpreting complex AI models. This paper investigates whether this technique and its observed benefits hold when the relevant information provided to the decision maker is displayed at different levels of abstraction. Findings indicate that this technique of supporting the human’s judgement process is effective in (1) boosting the human decision maker’s situation awareness and task performance, (2) calibrating their trust in AI teammates, and (3) reducing over-reliance on an AI partner, irrespective of the abstraction level at which information was displayed.",
  },
  {
    name: "Run Time Assurance and Human AI Fluency in Manned Autonomous Intelligence Surveillance and Reconnaissance",
    conference: "true",
    authors:
      "Richard Agbeyibor, Vedant Ruia, Carmen Cortes, <b>Jack Kolb</b>, Samuel Coogan, Karen M. Feigh",
    paper:
      "https://jackkolb.com/pdf/SciTech_24_Impact_of_Abstraction_Levels_of_Context_Information_on_AI_Advised_Decision_Making_for_an_Entry_Descent_and_Landing_Task.pdf",
    tools: "Conference Proceedings of the AIAA Aviation '24",
    time: "2024",
    status: "Complete",
    short:
      "Users participate in a simulated ISR domain with an autonomous pilot, we evaluate the team's mission performance and team fluency across several operational modes.",
    long: "[ABSTRACT] AI-advised Decision Making is a form of human-autonomy teaming in which an AI recommender system suggests a solution to a human operator, who is responsible for the final decision. This work seeks to empower and effectively utilize these human decision makers by supporting their cognitive process of judgement. Previous work has found that providing decision makers with relevant information that the AI uses to generate possible courses of action improves crucial team decision-making metrics, and is a viable alternative solution to explaining or interpreting complex AI models. This paper investigates whether this technique and its observed benefits hold when the relevant information provided to the decision maker is displayed at different levels of abstraction. Findings indicate that this technique of supporting the human’s judgement process is effective in (1) boosting the human decision maker’s situation awareness and task performance, (2) calibrating their trust in AI teammates, and (3) reducing over-reliance on an AI partner, irrespective of the abstraction level at which information was displayed.",
  },
  {
    name: "Impact of Abstraction Levels of Context Information on AI-Advised Decision Making for an Entry Descent and Landing Task",
    conference: "true",
    authors: "Divya Srivastava, <b>Jack Kolb</b>, and Karen M. Feigh",
    paper:
      "https://jackkolb.com/pdf/SciTech_24_Impact_of_Abstraction_Levels_of_Context_Information_on_AI_Advised_Decision_Making_for_an_Entry_Descent_and_Landing_Task.pdf",
    tools: "Conference Proceedings of AIAA SciTech '24",
    time: "2024",
    status: "Complete",
    short:
      "A joint human-robot decision making task is structured into a three-step process, improving task performance, user trust, and user situation awareness.",
    long: "[ABSTRACT] AI-advised Decision Making is a form of human-autonomy teaming in which an AI recommender system suggests a solution to a human operator, who is responsible for the final decision. This work seeks to empower and effectively utilize these human decision makers by supporting their cognitive process of judgement. Previous work has found that providing decision makers with relevant information that the AI uses to generate possible courses of action improves crucial team decision-making metrics, and is a viable alternative solution to explaining or interpreting complex AI models. This paper investigates whether this technique and its observed benefits hold when the relevant information provided to the decision maker is displayed at different levels of abstraction. Findings indicate that this technique of supporting the human’s judgement process is effective in (1) boosting the human decision maker’s situation awareness and task performance, (2) calibrating their trust in AI teammates, and (3) reducing over-reliance on an AI partner, irrespective of the abstraction level at which information was displayed.",
  },
  {
    name: "The Effects of Robot Motion on Comfort Dynamics of Novice Users in Close-Proximity Human-Robot Interactions",
    conference: "true",
    authors:
      "Pierce Howell, *<b>Jack Kolb</b>, *Yifan Liu, and Harish Ravichandar",
    paper:
      "https://jackkolb.com/pdf/IROS_23_Effects_of_Robot_Motion_on_Comfort_Dynamics_of_Novice_Users_in_Close_Proximity_Human_Robot_Interactions.pdf",
    tools: "Conference Proceedings of IEEE/RSJ IROS '23",
    time: "2023",
    status: "Complete",
    short:
      "User comfort with various robot motion planning strategies is assessed in a close-proximity collaborative assembly task.",
    long: "[ABSTRACT] Effective and fluent close-proximity human-robot interaction requires understanding how humans get habituated to robots and how robot motion affects human comfort.  While prior work has identified humans' preferences over robot motion characteristics and studied their influence on comfort, we are yet to understand how novice first-time robot users get habituated to robots and how robot motion impacts the dynamics of comfort over repeated interactions. To take the first step towards such understanding, we carry out a user study to investigate the connections between robot motion and user comfort and habituation. Specifically, we study the influence of workspace overlap, end-effector speed, and robot motion legibility on overall comfort and its evolution over repeated interactions. Our analyses reveal that workspace overlap, in contrast to speed and legibility, has a significant impact on users' perceived comfort and habituation. In particular, lower workspace overlap leads to users reporting significantly higher overall comfort, lower variations in comfort, and fewer fluctuations in comfort levels during habituation.",
  },
  {
    name: "The Effects of Inaccurate Decision-Support Systems on Structured Shared Decision-Making for Human-Robot Teams",
    conference: "true",
    authors: "*<b>Jack Kolb</b>, *Divya Srivastava, Karen M. Feigh",
    paper:
      "https://jackkolb.com/pdf/ROMAN_23_Structuring_Shared_Decision_Making_in_Human_Robot_Teams.pdf",
    tools: "Conference Proceedings of IEEE RO-MAN '23",
    time: "2023",
    status: "Complete",
    short:
      "Explores the impact of the type of robot recommendation error on mission performance in a structured shared decision-making domain.",
    long: "[ABSTRACT] Human-robot teams can leverage a human's expertise and a robot's computational power to meaningfully improve mission outcomes. In command and control domains, the robot teammate can also act as a decision-support system to advise human users. However, decision-support systems are susceptible to human factors issues including miscalibrated trust and degraded team performance. Recent work has mitigated these issues by using cognitive forcing functions to structure shared decision-making systems and place users as proactive on-the-loop actors. We bring this approach to a human-robot teaming domain, and investigate how Type I and Type II errors in the robot's recommendation affects team performance and user rational trust. We present the architecture of our decision-making process and a Mars rover landing experiment domain. Results from a comprehensive user study demonstrate that the error type of the robot's recommendation forms a trade-off between team performance and rational trust.",
  },
  {
    name: "Leveraging Cognitive States in Human-Robot Teaming",
    conference: "true",
    authors: "<b>Jack Kolb</b>, Harish Ravichandar, and Sonia Chernova",
    paper:
      "https://jackkolb.com/pdf/ROMAN_22_Leveraging_Cognitive_States_in_Human_Robot_Teaming.pdf",
    github:
      "https://github.com/GT-RAIL/cognitive-states-in-human-robot-teaming",
    tools:
      "Conference Proceedings of IEEE RO-MAN '22, <b>[Best Student Paper Finalist, 3/237, 1.2%]</b>",
    time: "2022",
    status: "Complete",
    short:
      "Measurements of user cognitive states are used to inform a role assignment algorithm and improve teaming performance.",
    long: "[ABSTRACT] Mixed human-robot teams (HRTs) have the potential to perform complex tasks by leveraging diverse and complementary capabilities within the team. However, assigning humans to operator roles in HRTs is challenging due to the significant variation in user capabilities. While much of prior work in role assignment treats humans as interchangeable (either generally or within a category), we investigate the utility of personalized models of operator capabilities based in relevant human factors in an effort to improve overall team performance. We call this approach individualized role assignment (IRA) and provide a formal definition. A key challenge for IRA is associated with the fact that factors that affect human performance are not static (e.g., one's ability to track multiple objects can change during or between tasks). Instead of relying on time-consuming and highly-intrusive measurements taken during the execution of tasks, we propose the use of short cognitive tests, taken before engaging in human-robot tasks, and predictive models of individual performance to perform IRA. Results from a comprehensive user study conclusively demonstrate that IRA leads to significantly better team performance than a baseline method that assumes human operators are interchangeable, even when we control for the influence of the robots' performance. Further, our results point to the possibility that such relative benefits of IRA will increase as the number of operators (i.e., choices) increase for a fixed number of tasks.",
  },
  {
    name: "Safe Dexterous Manipulation Using Geometric Boundary Constraints",
    workshop: "true",
    authors: "Abhineet Jain, <b>Jack Kolb</b>, and Harish Ravichandar",
    paper:
      "https://jackkolb.com/pdf/IJCAI_22_Constrained_RL_for_Dexterous_Manipulation.pdf",
    tools: "Workshop Proceedings of IJCAI '22 (Safe RL, non-archival)",
    time: "2022",
    status: "Complete",
    short:
      "Instance-specific geometric boundary constraints are used with reinforcement learning algorithms to obtain safe high-dimensional robot hand manipulation.",
    long: "[ABSTRACT] We explore adding instance-specific constraints to an object relocation task, that restrict and guide the robot's behavior during training as well as roll outs. Constrained Policy Optimization (CPO) is an effective method to solve constrained MDPs, built upon trust-region policy optimization (TRPO). We formulate a cylindrical boundary constraint for the initial motion of the robot hand towards the object. The robot incurs a penalty when it moves outside the boundary. We find that using CPO with this simple geometric constraint can ensure the robot learns to move towards the object sooner than without constraints. Further, training with this constraint (CPO) requires a similar number of samples as its unconstrained counterpart (TRPO) to master the skill. These findings shed light on how simple constraints can help robots achieve sensible and safe behavior quickly and ease concerns surrounding hardware deployment. We also investigate the effects of the strictness of these constraints and report findings that provide insights into how different degrees of strictness affect learning outcomes.",
  },
  {
    name: "Evaluating the Effectiveness of Corrective Demonstrations and a Low-Cost Sensor for Dexterous Manipulation",
    authors:
      "*Abhineet Jain, *<b>Jack Kolb</b>, J.M. Abbess IV, and Harish Ravichandar",
    paper: "https://arxiv.org/pdf/2204.07631.pdf",
    github:
      "https://github.com/GT-STAR-Lab/corrective-demos-dexterous-manipulation",
    workshop: "true",
    tools: "Workshop Proceedings of IEEE/ACM HRI '21 (MLHRC, non-archival)",
    time: "2022",
    status: "Complete",
    short:
      'Explores the use of DAGGER-like corrections, and demonstrations from a low-cost pose sensor, to improve robot hand performance at a "pick and place" task.',
    long: "[ABSTRACT] Imitation learning is a promising approach to help robots acquire dexterous manipulation capabilities without the need for a carefully-designed reward or a significant computational effort. However, existing imitation learning approaches require sophisticated data collection infrastructure and struggle to generalize beyond the training distribution. One way to address this limitation is to gather additional data that better represents the full operating conditions. In this work, we investigate characteristics of such additional demonstrations and their impact on performance. Specifically, we study the effects of <i>corrective</i> and <i>randomly-sampled</i> additional demonstrations on learning a policy that guides a five-fingered robot hand through a pick-and-place task. Our results suggest that corrective demonstrations considerably outperform randomly-sampled demonstrations, when the proportion of additional demonstrations sampled from the full task distribution is larger than the number of original demonstrations sampled from a restrictive training distribution. Conversely, when the number of original demonstrations are higher than that of additional demonstrations, we find no significant differences between corrective and randomly-sampled additional demonstrations. These results provide insights into the inherent trade-off between the effort required to collect corrective demonstrations and their relative benefits over randomly-sampled demonstrations. Additionally, we show that inexpensive vision-based sensors, such as LeapMotion, can be used to dramatically reduce the cost of providing demonstrations for dexterous manipulation tasks.",
  },
  {
    name: "Predicting Individual Human Performance in Human-Robot Teaming",
    authors:
      "<b>Jack Kolb</b>, Mayank Kishore, Kenneth Shaw, Harish Ravichandar, and Sonia Chernova",
    paper:
      "https://jackkolb.com/pdf/ROMAN_21_Predicting_Individual_Performance_in_Human_Robot_Teaming.pdf",
    conference: "true",
    tools: "Conference Proceedings of IEEE RO-MAN '21",
    time: "2021",
    status: "Complete",
    short:
      "Through a user study we find that scores from user cognitive skill tests can correlate to performance at robot teleoperation tasks.",
    long: "[ABSTRACT] Coordinating human-robot teams requires careful planning and allocation of tasks to the most appropriate agents.  This challenge is exacerbated by the fact that, unlike their robot teammates, humans exhibit significant variation in their abilities. Existing work largely ignores this variation in favor of simpler aggregate models, failing to leverage specialized capabilities of different individuals. In this work, we introduce simple cognitive tests for measuring inherent variations in human capabilities related to human-robot teaming, specifically, the ability to maintain situational awareness and to mentally model latent network structures.  We then demonstrate that user study participant performance on these cognitive tests is correlated with, and thus is a predictor for, their performance on human-robot teaming tasks. These findings have the potential to improve human-robot teaming algorithms (e.g., task allocation) by providing a mechanism to better leverage individual differences in human agents.",
  },
];

function handleResearch() {
  removeAll();
  loadResearch();
  showBar("research-button");
  research_active = true;
  return;
}

function loadResearch() {
  var research = document.createElement("div");
  research.id = "research";

  researchList.forEach(function (entry) {
    var newResearch = generateResearch(
      entry.name,
      entry.authors,
      entry.hackathon,
      entry.research,
      entry.publication,
      entry.github,
      entry.paper,
      entry.tools,
      entry.short,
      entry.long,
    );
    research.append(newResearch);
  });

  document.body.insertBefore(research, document.getElementById("content"));
  return;
}

function removeResearch() {
  if (research_active) {
    var element = document.getElementById("research");
    element.parentNode.removeChild(element);
    hideBar("research-button");
    research_active = false;
  }
  return;
}

function generateResearch(
  research_name,
  research_authors,
  research_hackathon,
  research_research,
  research_conference,
  research_github,
  research_paper,
  research_tools,
  research_description,
  research_description_long,
) {
  var newResearch = document.createElement("div");

  var newResearchContainer = document.createElement("div");
  newResearchContainer.className = "research-container";

  var newResearchSubContainer = document.createElement("div");
  newResearchSubContainer.className = "research-subcontainer";

  var newResearchIcon = document.createElement("div");

  var newResearchEntry = document.createElement("div");
  newResearchEntry.className = "research-entry";

  var newResearchEntryTitle = document.createElement("div");
  newResearchEntryTitle.className = "research-entry-title";
  newResearchEntryTitle.innerHTML = "<b>" + research_name + "</b>";

  var researchLink = document.createElement("a");
  researchLink.setAttribute("target", "_blank");

  var newResearchEntryTools = document.createElement("div");
  newResearchEntryTools.className = "research-entry-tools";
  var tools_listing = "";
  if (research_hackathon == "true") {
    tools_listing += "<span style='color:#ff33cc'><b>[Hackathon] </b></span>";
  } else if (research_research == "true") {
    tools_listing += "<span style='color:#995533'><b>[Research] </b></span>";
  } else if (research_conference == "true") {
    tools_listing += "<span style='color:#6633cc'><b>[Publication] </b></span>";
  }
  tools_listing += "<i>" + research_tools + "</i>";
  newResearchEntryTools.innerHTML = tools_listing;

  var preSpace = document.createElement("div");
  preSpace.className = "big-space";

  var newResearchEntryAuthors = document.createElement("div");
  newResearchEntryAuthors.className = "research-entry-tools";
  newResearchEntryAuthors.innerHTML = research_authors;

  var preSpace2 = document.createElement("div");
  preSpace2.className = "big-space";

  var newResearchEntryDescription = document.createElement("div");
  newResearchEntryDescription.className = "research-entry-desc";
  newResearchEntryDescription.innerHTML = research_description;

  var moreLink = document.createElement("button");
  if (research_description_long && !research_paper && !research_github) {
    moreLink.setAttribute(
      "onclick",
      "learnMore(" + '"' + research_name + '"' + ")",
    );
    moreLink.innerHTML = "<i>(learn more)</i>";
  }
  moreLink.setAttribute("class", "learn-more");

  if (research_github) {
    newResearchIcon.setAttribute("id", "here");
    newResearchIcon.setAttribute("href", research_github);
    newResearchIcon.innerHTML =
      "<svg class='research-github-icon' fill='black' viewBox='0 0 48 48' width='24' height='24'><path class='st0' d='M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z' clip-rule='evenodd' fill-rule='evenodd'/></svg>";
    newResearchEntry.classList.add("research-entry-hover");
    newResearchIcon.classList.add("research-entry-hover");
  }
  if (research_paper) {
    newResearchIcon.setAttribute("id", "here");
    newResearchIcon.setAttribute("href", research_paper);
    newResearchIcon.innerHTML =
      '<svg class="research-paper-icon" style="width:24px;height:24px" viewBox="0 0 384 512"><path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"/></svg>';
    newResearchEntry.classList.add("research-entry-hover");
    newResearchIcon.classList.add("research-entry-hover");
  }

  var postSpace = document.createElement("div");
  postSpace.className = "big-space";

  var breakSpace = document.createElement("div");
  breakSpace.className = "break-space";

  newResearch.append(newResearchContainer);
  newResearchContainer.append(newResearchSubContainer);
  newResearchSubContainer.append(newResearchEntry);
  newResearchEntry.append(newResearchEntryTitle);
  if (research_github || research_paper) {
    newResearchEntryTitle.append(researchLink);
    newResearchEntry.setAttribute(
      "onclick",
      "window.open('" +
        (research_paper
          ? research_paper
          : research_github
            ? research_github
            : "") +
        "', '_blank')",
    );
  }
  newResearchEntry.append(newResearchEntryTools);
  newResearchEntry.append(preSpace);
  newResearchEntry.append(newResearchEntryAuthors);
  newResearchEntry.append(preSpace);
  newResearchEntry.append(newResearchEntryDescription);
  newResearchEntryDescription.append(moreLink);
  newResearchEntry.append(postSpace);
  newResearchSubContainer.append(newResearchIcon);
  newResearch.append(breakSpace);

  return newResearch;
}
