// javascript functions for research tab

var researchList = [
  {
    name: "Model Cards for AI Teammates: Comparing Human-AI Team Familiarization Methods for High-Stakes Environments",
    conference: "true",
    authors: "R. Bowers, R. Agbeyibor, <b>J. Kolb</b>, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/ROMAN_25_Model_Cards_for_AI_Teammates_Comparing_Human_AI_Team_Familiarization_Methods_for_High_Stakes_Environments.pdf",
    tools: "Conference Proceedings of IEEE RO-MAN '25",
    time: "2025",
    status: "Complete",
    short:
      "We explore methods for familiarizing users to an autonomous wingmen and their effect on team performance and human factors.",
    long: "[ABSTRACT] We compare three methods of familiarizing a human with an artificial intelligence (AI) teammate (\"agent\") prior to operation in a collaborative, fast-paced intelligence, surveillance, and reconnaissance (ISR) environment. In a between-subjects user study (n=60), participants either read documentation about the agent, trained alongside the agent prior to the mission, or were given no familiarization. Results showed that the most valuable information about the agent included details of its decision-making algorithms and its relative strengths and weaknesses compared to the human. This information allowed the familiarization groups to form sophisticated team strategies more quickly than the control group. Documentation-based familiarization led to the fastest adoption of these strategies, but also biased participants towards risk-averse behavior that prevented high scores. Participants familiarized through direct interaction were able to infer much of the same information through observation, and were more willing to take risks and experiment with different control modes, but reported weaker understanding of the agent's internal processes. Significant differences were seen between individual participants' risk tolerance and methods of AI interaction, which should be considered when designing human-AI control interfaces. Based on our findings, we recommend a human-AI team familiarization method that combines AI documentation, structured in-situ training, and exploratory interaction.",
  },
  {
    name: "Enabling Controllable, Identity Preserving, Non-Rigid Edits in Human-Centric Images",
    conference: "true",
    authors: "N. Warner, <b>J. Kolb</b>, M. Hahn, J. Huang, I. Essa, V. Birodkar",
    paper:
      "https://jackkolb.com/pdf/ICIP_25_Enabling_Controllable_Identity_Preserving_Non_Rigid_Edit_in_Human_Centric_Images.pdf",
    tools: "Conference Proceedings of IEEE ICIP '25",
    time: "2025",
    status: "Complete",
    short:
      "We condition diffusion in-painting with text captions from image sequences to enable text-controllable pose edits.",
    long: "[ABSTRACT] We approach the problem of inserting a person into a novel scene and controlling their pose via text guidance. Given an image of a person, a masked image of a scene, and a text description of the target pose, our model presents realistic images while being highly controllable. We validate the robustness of our model's true-to-text accuracy and identity preservation via a user study on in-the-wild images. In addition, we present a novel dataset containing pairs of frames from human-centric and action-rich videos, with text captions of the difference in human pose between frames. We also explore the challenges of controllable identity preservation for in-the-wild scenes and the failure modes of similar models. Our methods achieve a 10\% increase in pose adherence (PCKt@0.5) over comparable methods without compromising visual fidelity, and show a clear qualitative improvement.",
  },
  {
    name: "Investigating Human-AI Team Fluency in Autonomous Medical Evacuation: A Study of Novice Aviator Cognitive States and HAI Interface Design",
    conference: "true",
    authors: "S. Doda, R. Agbeyibor, C. Cortes, <b>J. Kolb</b>, J. Magalhaes, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/AVIATION_25_Investigating_Human_AI_Team_Fluency_in_Autonomous_Medical_Evacuation_A_Study_of_Novice_Aviator_Cognitive_States_and_HAI_Interface_Design.pdf",
    tools: "Conference Proceedings of AIAA AVIATION '25",
    time: "2025",
    status: "Complete",
    short:
      "Cognitive workload is estimated from a shared-authority medical evacuation scenario with an autonomous pilot.",
    long: "A goal of adaptive automation is to recognize the situational context or user cognitive state to adapt taskwork and interfaces to support team performance. Central to this objective is passive, real-time monitoring of a user's cognitive workload, such that the system can moderate the workload by assuming taskwork in high-workload situations. While prior work has sought to measure cognitive workload from physiological metrics, few studies have approached comprehensive evaluations in realistic domains. In this work, we use a medical evacuation scenario where the subject plays the role of a medical personnel on board a helicopter with an autonomous pilot. The subject has to interact with the pilot, relay information to ground control, and monitor the vitals of a patient. We equip the subject with various sensors (heart rate, respiration rate, and pupillometry) and successfully use classical machine learning models to estimate the cognitive workload state post-hoc. Results show a reasonably high accuracy (F1 of ~0.80) and future work aims to adapt this into a real-time system.",
  },
  {
    name: "Use of Simulated Mental Models and Active Replanning for Human-Robot Interaction",
    conference: "true",
    authors: "J. Ren, A. Swaminathan, <b>J. Kolb</b>, Y. Zhao, S. Coogan, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/SciTech_25_Use_of_Simulated_Mental_Models_and_Active_Replanning_for_Human_Robot_Interaction.pdf",
    tools: "Preprint",
    time: "2025",
    status: "Complete",
    short:
      "We propose a framework for intelligent user updates in multi-agent command & control by estimating the user's belief state.",
    long: "[ABSTRACT] This paper introduces a communication and planning framework to facilitate efficient state update information between an autonomous robotic system and a human operator under scenarios where continuous robotic monitoring is not available. The framework estimates the operator's mental model and uses the difference between the estimated mental model and the actual world state and robot plans to trigger selective communication updates to the operator. The framework is deployed in a simulation environment where a rapid task planning algorithm adapts robot plans to a dynamic operational environment in real time. The proposed framework aims to improve situational awareness and reduce cognitive load in contrast with baseline methods where communication is triggered by mission milestones, obstacles encountered, or periodically.",
  },
  {
    name: "Inferring Belief States in Partially-Observable Human-Robot Teams",
    conference: "true",
    authors: "<b>J. Kolb</b>, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/IROS_24_Inferring_Belief_States_in_Partially_Observable_Human_Robot_Teams.pdf",
    tools: "Conference Proceedings of IEEE/RSJ IROS '24",
    time: "2025",
    status: "Complete",
    short:
      "Presents an architecture for predicting user responses to situation responses in human-robot teams, evaluated on a modified OvercookedAI domain.",
    long: "[ABSTRACT] We investigate the real-time estimation of human situation awareness using observations from a robot teammate with limited visibility. In human factors and human-autonomy teaming, it is recognized that individuals navigate their environments using an internal mental simulation, or \textit{mental model}. The mental model informs cognitive processes including situation awareness, contextual reasoning, and task planning. In teaming domains, the mental model includes a \textit{team model} of each teammate's beliefs and capabilities, enabling fluent teamwork without the need for explicit communication. However, little work has applied team models to human-robot teaming. In this work we compare the performance of two models, logical predicates and large language models, at estimating user situation awareness over varying visibility conditions. Our results indicate that the methods are largely resilient to low-visibility conditions in our domain, however opportunities exist to improve their overall performance.",
  },
  {
    name: "Joint Intelligence, Surveillance, and Reconnaissance Mission Collaboration with Autonomous Pilots",
    conference: "true",
    authors:
      "R. Agbeyibor, V. Ruia,  <b>J. Kolb</b>, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/HFES_24_Joint_Intelligence_Surveillance_and_Reconnaissance_Mission_Collaboration_with_Autonomous_Pilots.pdf",
    tools: "Conference Proceedings of HFES ASPIRE '24",
    time: "2024",
    status: "Complete",
    short: "Users participate in a simulated ISR domain with an autonomous pilot, and provide feedback on several modes of autonomy we presented them with.",
    long: "[ABSTRACT] This study explores human-autonomy collaboration between a future autonomous pilot and a human crew member pursuing a joint Intelligence, Surveillance, and Reconnaissance (ISR) mission. We introduce a novel open-sourced autonomous ISR interaction domain simulating real-world scenarios. As aviation increasingly integrates autonomy, our focus lies in understanding how various autonomous capabilities and interface features affect trust, perception, and user interactions. Conducting an exploratory study with 27 participants in a flight simulator, we examine the impact of various autonomy modes on human-autonomy interaction. Through demographic analysis, interface usage, and qualitative responses, we explore the impact of experience, expertise, and authority on collaboration dynamics.",
  },
  {
    name: "Towards Safe Collaboration Between Autonomous Pilots and Human Crews for Intelligence, Surveillance, and Reconnaissance",
    conference: "true",
    authors:
      "R. Agbeyibor, V. Ruia,  <b>J. Kolb</b>, C. Cortes, T. Mancao, S. Coogan, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/DASC_24_Towards_Safe_Collaboration_Between_Autonomous_Pilots_and_Human_Crews_for_Intelligence_Surveillance_and_Reconnaissance.pdf",
    tools: "Conference Proceedings of IEEE DASC '24",
    time: "2024",
    status: "Complete",
    short:
      "Control barrier functions are used to control an autonomous pilot of an ISR aircraft with a human teammate.",
    long: "[ABSTRACT] Many aviation missions today are accomplished by a heterogeneous crew of pilots and mission specialists. As fully Automated Pilots (AP) are integrated into aviation crews, effective teaming will be necessary for safety assurance and mission effectiveness. This flight simulator study explored teaming between a non-pilot human operator and an AP collaborating on a maritime Intelligence, Surveillance, and Reconnaissance (ISR) mission. The study compared a \textit{Waypoint} AP behavior, requiring human intervention in aircraft control to prevent overflight of damage-causing enemy ships, with a \textit{Collision Avoidance} behavior where the AP proactively avoids enemy ships using control barrier functions. This proactive AP behavior resulted in less aircraft damage and more predictable team performance, albeit longer mission times. Results indicate that situation awareness varied  with AP complexity level and task load level. Participants perceived positively the AP when it succeeded and calibrated their trust when it failed.",
  },
  {
    name: "Run Time Assurance and Human AI Fluency in Manned Autonomous Intelligence Surveillance and Reconnaissance",
    conference: "true",
    authors:
      "R. Agbeyibor, V. Ruia, C. Cortes, <b>J. Kolb</b>, S. Coogan, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/AVIATION_24_Run_Time_Assurance_and_Human_AI_Fluency_in_Manned_Autonomous_Intelligence_Surveillance_and_Reconnaissance.pdf",
    tools: "Conference Proceedings of the AIAA Aviation '24",
    time: "2024",
    status: "Complete",
    short:
      "Users participate in a simulated ISR domain with an autonomous pilot, we evaluate the team's mission performance and fluency across several operational modes.",
    long: "[ABSTRACT] The maturation of autonomy for electric vertical take-off and landing aircraft will soon make it possible to execute military intelligence, surveillance, reconnaissance (ISR) missions aboard crewed autonomous aerial vehicles. This research experimentally investigates factors that may influence the quality of interaction (i.e., team fluency) between a non-pilot human operator and the AI pilot responsible for autonomous flight, aboard a minimally crewed aircraft.  In a flight simulator study with twenty-seven participants, various levels of workload and AI pilot capabilities are investigated including run time assurance through control barrier functions (CBFs). CBFs are used to enable pro-active collision avoidance behaviors by the AI pilot. Team fluency and mission effectiveness outcomes through trust, situation awareness, workload, interaction and performance show that task complexity and AI behavior are significant factors for the quality of human AI interaction in the autonomous ISR context.",
  },
  {
    name: "Impact of Abstraction Levels of Context Information on AI-Advised Decision Making for an Entry Descent and Landing Task",
    conference: "true",
    authors: "D. Srivastava, <b>J. Kolb</b>, and K. Feigh",
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
      "P. Howell, *<b>J. Kolb</b>, *Y. Liu, and H. Ravichandar",
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
    authors: "*<b>J. Kolb</b>, *D. Srivastava, K. Feigh",
    paper:
      "https://jackkolb.com/pdf/ROMAN_23_Structuring_Shared_Decision_Making_in_Human_Robot_Teams.pdf",
    tools: "Conference Proceedings of IEEE RO-MAN '23",
    time: "2023",
    status: "Complete",
    short:
      "Explores the impact of the type of robot recommendation error on mission performance in a structured shared decision-making domain.",
    long: "[ABSTRACT] Human-robot teams can leverage a human's expertise and a robot's computational power to meaningfully improve mission outcomes. In command and control domains, the robot teammate can also act as a decision-support system to advise human users. However, decision-support systems are susceptible to human factors issues including miscalibrated trust and degraded team performance. Recent work has mitigated these issues by using cognitive forcing functions to structure shared decision-making systems and place users as proactive on-the-loop actors. We bring this approach to a human-robot teaming domain, and investigate how T.pe I and T.pe II errors in the robot's recommendation affects team performance and user rational trust. We present the architecture of our decision-making process and a Mars rover landing experiment domain. Results from a comprehensive user study demonstrate that the error type of the robot's recommendation forms a trade-off between team performance and rational trust.",
  },
  {
    name: "Leveraging Cognitive States in Human-Robot Teaming",
    conference: "true",
    authors: "<b>J. Kolb</b>, H. Ravichandar, and S. Chernova",
    paper:
      "https://jackkolb.com/pdf/ROMAN_22_Leveraging_Cognitive_States_in_Human_Robot_Teaming.pdf",
    github:
      "https://github.com/GT-RAIL/cognitive-states-in-human-robot-teaming",
    tools:
      "Conference Proceedings of IEEE RO-MAN '22, <b>[Best Student Paper Finalist, 3/237]</b>",
    time: "2022",
    status: "Complete",
    short:
      "Measurements of user cognitive states are used to inform a role assignment algorithm and improve teaming performance.",
    long: "[ABSTRACT] Mixed human-robot teams (HRTs) have the potential to perform complex tasks by leveraging diverse and complementary capabilities within the team. However, assigning humans to operator roles in HRTs is challenging due to the significant variation in user capabilities. While much of prior work in role assignment treats humans as interchangeable (either generally or within a category), we investigate the utility of personalized models of operator capabilities based in relevant human factors in an effort to improve overall team performance. We call this approach individualized role assignment (IRA) and provide a formal definition. A key challenge for IRA is associated with the fact that factors that affect human performance are not static (e.g., one's ability to track multiple objects can change during or between tasks). Instead of relying on time-consuming and highly-intrusive measurements taken during the execution of tasks, we propose the use of short cognitive tests, taken before engaging in human-robot tasks, and predictive models of individual performance to perform IRA. Results from a comprehensive user study conclusively demonstrate that IRA leads to significantly better team performance than a baseline method that assumes human operators are interchangeable, even when we control for the influence of the robots' performance. Further, our results point to the possibility that such relative benefits of IRA will increase as the number of operators (i.e., choices) increase for a fixed number of tasks.",
  },
  {
    name: "Safe Dexterous Manipulation Using Geometric Boundary Constraints",
    workshop: "true",
    authors: "A. Jain, <b>J. Kolb</b>, and H. Ravichandar",
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
      "*A. Jain, *<b>J. Kolb</b>, J. Abbess, and H. Ravichandar",
    paper: "https://arxiv.org/pdf/2204.07631.pdf",
    github:
      "https://github.com/GT-STAR-Lab/corrective-demos-dexterous-manipulation",
    workshop: "true",
    tools: "Workshop Proceedings of IEEE/ACM HRI '22 (MLHRC, non-archival)",
    time: "2022",
    status: "Complete",
    short:
      'Explores the use of DAGGER-like corrections, and demonstrations from a low-cost pose sensor, to improve robot hand performance at a "pick and place" task.',
    long: "[ABSTRACT] Imitation learning is a promising approach to help robots acquire dexterous manipulation capabilities without the need for a carefully-designed reward or a significant computational effort. However, existing imitation learning approaches require sophisticated data collection infrastructure and struggle to generalize beyond the training distribution. One way to address this limitation is to gather additional data that better represents the full operating conditions. In this work, we investigate characteristics of such additional demonstrations and their impact on performance. Specifically, we study the effects of <i>corrective</i> and <i>randomly-sampled</i> additional demonstrations on learning a policy that guides a five-fingered robot hand through a pick-and-place task. Our results suggest that corrective demonstrations considerably outperform randomly-sampled demonstrations, when the proportion of additional demonstrations sampled from the full task distribution is larger than the number of original demonstrations sampled from a restrictive training distribution. Conversely, when the number of original demonstrations are higher than that of additional demonstrations, we find no significant differences between corrective and randomly-sampled additional demonstrations. These results provide insights into the inherent trade-off between the effort required to collect corrective demonstrations and their relative benefits over randomly-sampled demonstrations. Additionally, we show that inexpensive vision-based sensors, such as LeapMotion, can be used to dramatically reduce the cost of providing demonstrations for dexterous manipulation tasks.",
  },
  {
    name: "Predicting Individual Human Performance in Human-Robot Teaming",
    authors:
      "<b>J. Kolb</b>, M. Kishore, K. Shaw, H. Ravichandar, and S. Chernova",
    paper:
      "https://jackkolb.com/pdf/ROMAN_21_Predicting_Individual_Performance_in_Human_Robot_Teaming.pdf",
    conference: "true",
    tools: "Conference Proceedings of IEEE RO-MAN '21",
    time: "2021",
    status: "Complete",
    short:
      "Through a user study we find that scores from user cognitive skill tests correlate to performance at robot teleoperation tasks.",
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
  newResearchEntryDescription.className = "project-entry-desc";
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
