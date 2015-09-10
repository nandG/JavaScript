var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Francisco"
	},	
	"welcomeMessage": "Welcome to my Portfolio!",
	"skills": ["HTML5","CSS3","JavaScript"],
	"biopic": "images/fry.jpg",
	"display": function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		$(".flex-box").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$(".flex-box").append(HTMLemail.replace("%data%",bio.contacts.email));
		$(".flex-box").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$(".flex-box").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$(".flex-box").append(HTMLlocation.replace("%data%",bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
		$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) 
			$("#header").append(HTMLskills.replace("%data%",bio.skills[skill]));		
	}
};

bio.display();

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Fort Lauderdale, FL",
			"dates": "January 3000 - Future",
			"description": "Ham hock porchetta mollit corned beef \
			sed spare ribs aliqua nulla. Mollit ut \
			tongue qui adipisicing officia sirloin. \
			Turkey boudin tri-tip minim consequat \
			pastrami pariatur laborum fugiat nisi \
			beef ribs in dolore kielbasa sunt. Id cillum \
			aliquip turkey, ball tip cupidatat pastra-\
			mi. Meatloaf in fatback, pariatur ut nulla \
			reprehenderit jerky t-bone sirloin incidi-"	
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Fort Lauderdale, FL",
			"dates": "1998 - December 31, 1999",
			"description": "Ham hock porchetta mollit corned beef \
			sed spare ribs aliqua nulla. Mollit ut \
			tongue qui adipisicing officia sirloin. \
			Turkey boudin tri-tip minim consequat \
			pastrami pariatur laborum fugiat nisi \
			beef ribs in dolore kielbasa sunt. Id cillum \
			aliquip turkey, ball tip cupidatat pastra-\
			mi. Meatloaf in fatback, pariatur ut nulla \
			reprehenderit jerky t-bone sirloin incidi-"
		}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
		}	
	}
};

work.display();

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Ham hock porchetta mollit corned beef sed spare ribs aliqua nulla. Mollit ut tongue \
			qui adipisicing officia sirloin. Turkey boudin tri-tip minim consequat pastrami pariatur laborum \
			fugiat nisi beef ribs in dolore kielbasa sunt. Id cillum aliquip turkey, ball tip cupidatat pastra- \
			mi. Meatloaf in fatback, pariatur ut nulla reprehenderit jerky t-bone sirloin incidi-",
			"images": ["https://static.pexels.com/photos/4159/coffee-cup-mug-apple-medium.jpg","https://static.pexels.com/photos/1171/person-apple-laptop-notebook-medium.jpg"]
		}
	],
	"display": function(){		
		for (project in projects.projects) {	
			$("#projects").append(HTMLprojectStart);	
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));	
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));	
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
			for (image in projects.projects[project].images) 
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[image]));					
		}		
	}
};

projects.display();

var education = {
	"schools": [
		{
			"name": "Nova SouthEastern University",
			"location": "Fort Lauderdale, FL",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "Eckerd College",
			"location": "Saint Petersburg, FL",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 2003,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"	
		}
	],
	"display": function(){
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			$(".education-entry:last").append(formattedSchool + formattedDegree);		
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));			
			for (major in education.schools[school].majors)
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]));
		}

		for (course in education.onlineCourses) {	
			$(".education-entry:last").append(HTMLonlineClasses);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[course].url));
		}
	}
};
	
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);