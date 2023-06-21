function createTimeline() {
    timeline = [
        {
            type: "Conference",
            location: "IROS",
            title: "The Effects of Robot Motion on Comfort Dynamics of Novice Users in Close-Proximity Human-Robot Interactions",
            link: "https://jackkolb.com/pdf/IROS_23_The_Effects_of_Robot_Motion_on_Comfort_Dynamics_of_Novice_Users_in_Close-Proximity_Human-Robot_Interactions.pdf",
            month: "Oct",
            year: 2023,
        },
        {
            type: "Conference",
            location: "RO-MAN",
            title: "The Effects of Inaccurate Decision-Support Systems on Structured Shared Decision-Making for Human-Robot Teams",
            link: "https://jackkolb.com/pdf/ROMAN_23_The_Effects_of_Inaccurate_Decision-Support_Systems_on_Structured_Shared_Decision-Making_for_Human-Robot_Teams.pdf",
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
            location: "RO-MAN",
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
            location: "HRI (MLHRC)",
            title: "Evaluating the Effectiveness of Corrective Demonstrations and a Low-Cost Sensor for Dexterous Manipulation",
            link: "https://arxiv.org/abs/2204.07631",
            month: "Mar",
            year: 2022,
        },
        {
            type: "Conference",
            location: "RO-MAN",
            title: "Predicting Individual Human Performance in Human-Robot Teaming",
            link: "https://ieeexplore.ieee.org/document/9515368",
            month: "Aug",
            year: 2021,
        },
        {
            type: "Workshop",
            location: "HRI (WYSD)",
            title: "Predicting Individual Human Performance in Human-Robot Teaming",
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
    timelineDiv.innerHTML = "Here's what I've been up to lately:";
    
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
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;Conference Publication at " + timeline[i].location + " " + timeline[i].year;
        }
        
        // workshop publication
        if (timeline[i].type == "Workshop") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;Workshop Publication at " + timeline[i].location + " " + timeline[i].year;
        }

        // school
        if (timeline[i].type == "School") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].action + " " + timeline[i].level + " studies at " + timeline[i].location;
        }

        // work
        if (timeline[i].type == "Work") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].action + " at " + timeline[i].location;
        }

        // volunteer
        if (timeline[i].type == "Volunteer") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].action + " at " + timeline[i].location;
        }

        // award
        if (timeline[i].type == "Award") {
            entry.innerHTML += "<i>" + timeline[i].month + "'" + (timeline[i].year % 2000) + "</i>&emsp;" + timeline[i].award;
        }
        
        // add a link if applicable
        if (timeline[i].link) {
            entry.setAttribute("onclick", "window.open('" + timeline[i].link + "', '_blank');");
        }
        
        timelineDiv.appendChild(entry);
    }
}
