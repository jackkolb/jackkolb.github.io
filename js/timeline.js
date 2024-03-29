function createTimeline() {
    timeline = [
        {
            type: "Conference",
            location: "AIAA/IEEE DASC",
            title: "Towards Safe Collaboration Between Autonomous Pilots and Human Crews for Intelligence, Surveillance, and Reconnaissance",
            // link: "https://jackkolb.com/pdf/DASC_24_Towards_Safe_Collaboration_Between_Autonomous_Pilots_and_Human_Crews_for_Intelligence_Surveillance_and_Reconnaissance.pdf",
            month: "Sep",
            year: 2024,
        },
        {
            type: "Conference",
            location: "AIAA Aviation",
            title: "Run Time Assurance and Human AI Fluency in Manned Autonomous Intelligence Surveillance and Reconnaissance",
            // link: "https://jackkolb.com/pdf/Aviation_24_Run_Time_Assurance_and_Human_AI_Fluency_in_Manned_Autonomous_Intelligence_Surveillance_and_Reconnaissance.pdf",
            month: "Jul",
            year: 2024,
        },
        {
            type: "Conference",
            location: "AIAA SciTech",
            title: "Impact of Abstraction Levels of Context Information on AI-Advised Decision Making for an Entry Descent and Landing Task",
            link: "https://jackkolb.com/pdf/SciTech_24_Impact_of_Abstraction_Levels_of_Context_Information_on_AI_Advised_Decision_Making_for_an_Entry_Descent_and_Landing_Task.pdf",
            month: "Jan",
            year: 2024,
        },
        {
            type: "Award",
            award: "Successfully passed my PhD Proposal!",
            link: "https://jackkolb.com/pdf/Kolb_Proposal_Presentation.pdf",
            month: "Jan",
            year: 2024,
        },
        {
            type: "Conference",
            location: "IEEE/RSJ IROS",
            title: "The Effects of Robot Motion on Comfort Dynamics of Novice Users in Close-Proximity Human-Robot Interactions",
            link: "https://jackkolb.com/pdf/IROS_23_Effects_of_Robot_Motion_on_Comfort_Dynamics_of_Novice_Users_in_Close_Proximity_Human_Robot_Interactions.pdf",
            month: "Oct",
            year: 2023,
        },
        {
            type: "Conference",
            location: "IEEE RO-MAN",
            title: "The Effects of Inaccurate Decision-Support Systems on Structured Shared Decision-Making for Human-Robot Teams",
            link: "https://jackkolb.com/pdf/ROMAN_23_Structuring_Shared_Decision_Making_in_Human_Robot_Teams.pdf",
            month: "Aug",
            year: 2023,
        },
	    {
            type: "Award",
            award: "Awarded a Grant from Amazon Consumer Robotics ($80k)",
            month: "Dec",
            year: 2022,
        },
        {
            type: "Conference",
            location: "IEEE RO-MAN",
            title: "Leveraging Cognitive States in Human-Robot Teaming",
            link: "https://jackkolb.com/pdf/ROMAN_22_Leveraging_Cognitive_States_in_Human_Robot_Teaming.pdf",
            month: "Aug",
            year: 2022,
        },
	    {
            type: "Workshop",
            location: "IJCAI (Safe RL)",
            title: "Safe Dexterous Manipulation Using Geometric Boundary Constraints",
            link: "https://jackkolb.com/pdf/IJCAI_22_Constrained_RL_for_Dexterous_Manipulation.pdf",
            month: "Jul",
            year: 2022,
        },
        {
            type: "Work",
            action: "Interned",
            location: "Gatik AI",
            link: "https://gatik.ai",
            month: "May",
            year: 2022,
        },
        {
            type: "Workshop",
            location: "ACM/IEEE HRI (MLHRC)",
            title: "Evaluating the Effectiveness of Corrective Demonstrations and a Low-Cost Sensor for Dexterous Manipulation",
            link: "https://arxiv.org/abs/2204.07631",
            month: "Mar",
            year: 2022,
        },
        {
            type: "Conference",
            location: "IEEE RO-MAN",
            title: "Predicting Individual Human Performance in Human-Robot Teaming",
            link: "https://jackkolb.com/pdf/ROMAN_21_Predicting_Individual_Performance_in_Human_Robot_Teaming.pdf",
            month: "Aug",
            year: 2021,
        },
        {
            type: "Workshop",
            location: "ACM/IEEE HRI (WYSD)",
            title: "Predicting Individual Human Performance in Human-Robot Teaming",
            link: "https://jackkolb.com/pdf/HRI_21_Predicting_Individual_Human_Performance_in_Human_Robot_Teaming.pdf",
            month: "Mar",
            year: 2021,
        },
        {
            type: "School",
            action: "Began",
            location: "Georgia Tech",
            degree: "Robotics",
            level: "PhD",
            link: "https://research.gatech.edu/robotics",
            month: "Aug",
            year: 2020,
        },
        {
            type: "Volunteer",
            action: "Competed",
            location: "RoboSub 2020",
            link: "https://robosub.org/programs/2020",
            month: "Aug",
            year: 2020,
        },
        {
            type: "Work",
            action: "Interned",
            location: "NextGen Assistive Technologies",
            link: "https://nextgenat.com",
            month: "Jun",
            year: 2020,
        },
        {
            type: "School",
            action: "Completed",
            location: "UC Riverside",
            degree: "Mechanical Engineering",
            level: "BS",
            link: "https://ucr.edu",
            month: "Jun",
            year: 2020,
        },
    ];

    dotColors = {
        "Conference": "#3b67e0",
        "School": "#dd2d2d",
        "Workshop": "#008132",
        "Work": "#db960c",
        "Volunteer": "darkmagenta",
        "Award": "darkmagenta",
    }

    // get the timeline div element
    timelineDiv = document.getElementById("timeline");
    timelineDiv.innerHTML = "Here is what I have been up to lately:<br><br>";
    
    // create each timeline element for each element on the timeline, create s
    for (var i=0; i<timeline.length; i++) {
        // create the timeline entry div
        entry = document.createElement("div");
        entry.classList = "timeline-entry";

        // create and add the dot
        dot = document.createElement("span");
        dot.classList = "dot";
        dot.style.backgroundColor = dotColors[timeline[i].type]
        entry.appendChild(dot);
        entry.innerHTML += " ";  // add a space after the dot

        // add text to the entry
        // conference publication
        if (timeline[i].type == "Conference") {
            if (timeline[i].link) {
                entry.innerHTML += '<span style="float:right"><svg class="research-paper-icon" style="width:21px;height:21px" viewBox="0 0 384 512"><path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path></svg><\span>'
            }
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;Conference Publication at " + timeline[i].location + " " + timeline[i].year;
        }
        
        // workshop publication
        if (timeline[i].type == "Workshop") {
            if (timeline[i].link) {
                entry.innerHTML += '<span style="float:right"><svg class="research-paper-icon" style="width:21px;height:21px" viewBox="0 0 384 512"><path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path></svg><\span>'
            }
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;Workshop Publication at " + timeline[i].location + " " + timeline[i].year;
        }

        // school
        if (timeline[i].type == "School") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].action + " " + timeline[i].level + " studies at " + timeline[i].location;
        }

        // work
        if (timeline[i].type == "Work") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].action + " at " + timeline[i].location
        }

        // volunteer
        if (timeline[i].type == "Volunteer") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].action + " at " + timeline[i].location
        }

        // award
        if (timeline[i].type == "Award") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].award;
        }
        
        // add a link if applicable
        if (timeline[i].link) {
            entry.setAttribute("onclick", "window.open('" + timeline[i].link + "', '_blank');")
        }
        
        timelineDiv.appendChild(entry);
    }
}
