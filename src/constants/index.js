import {
	backend,
	creator,
	web,
	django,
	simpfi,
	sparks,
	other,
	quiz,
	links,
	fitness,
	kenya,
	weather,
  } from "../assets";
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
		id: "skills",
		title: "Skills",
	  },
	{
	  id: "projects",
	  title: "Projects",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const services = [
	{
	  title: "Fullstack Developer",
	  icon: web,
	},
	{
	  title: "Django Developer",
	  icon: django,
	},
	{
		title: "Frontend Developer",
		icon: creator,
	  },
	{
	  title: "Backend Developer",
	  icon: backend,
	},
	
  ];
  
  const experiences = [
	{
	  title: "Software Engineer Intern",
	  company_name: "Sparks Foundation Network",
	  Location: "Remote - India",
	  icon: sparks,
	  iconBg: "#383E56",
	  date: "Feb 2023 - April 2023",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
	  ],
	},
	{
	  title: "Junior Developer",
	  company_name: "Decops LLC",
	  Location: "Remote - USA",
	  icon: simpfi,
	  iconBg: "#E6DEDD",
	  date: "May 2023 - December 2023",
	  points: [
		"Worked on the development of a cutting-edge visual workflow automation solution with a talented team of developers.",
		" Participated in the creation of the automation platform, which included Blockchain and generative AI technology to automate numerous company procedures",
		"Also actively participated in code reviews and debugging sessions to make sure the functionality and quality of the code were up to par.",
	  ],
	},
	// {
	//   title: "Web Developer",
	//   company_name: "Shopify",
	//   icon: shopify,
	//   iconBg: "#383E56",
	//   date: "Jan 2022 - Jan 2023",
	//   points: [
	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	//   ],
	// },
	// {
	//   title: "Full stack Developer",
	//   company_name: "Meta",
	//   icon: meta,
	//   iconBg: "#E6DEDD",
	//   date: "Jan 2023 - Present",
	//   points: [
	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	//   ],
	// },
  ];
  
  const skills = [
	{
	  title:"Frontend",
	  sl1: "JavaScript(React, Nextjs, Svelte), jQuery",
	  sl2: " Tailwind",
	  sl3: "RESTful Services/APIs",
	  sl4: "Cross-Browser Development",
	},
	{
		title:"Backend",
		sl1: "Python(Django, Flask)",
		sl2: " Javascript(Nodejs, Express)",
		sl3: "Cloud computing9 AWS, Google Cloud Platform)",
		sl4: "Testing and debugging",
	  },
	  {
		title:"Database",
		sl1: "Sql",
		sl2: " Database Management",
		sl3: "Mongo",
		sl4: "Query Optimization",
	  },
	  {
		title:"Tools & Methods",
		sl1: "Git, GitHub",
		sl2: "Heroku, Vercel",
		sl3: "Firebase, cloudflare",
		sl4: "Chrome Dev Tools, SEO",
	  },
	  {
		title:"Proffesional",
		sl1: "Remote Pair-Programming",
		sl2: " Adaptability skills",
		sl3: "Communication skills",
		sl4: " Attention to detail",
	  },
	// {
	//   testimonial:
	// 	"I've never met a web developer who truly cares about their clients' success like Name? does.",
	//   name: "Chris Brown",
	//   designation: "COO",
	//   company: "DEF Corp",
	//   image: "https://randomuser.me/api/portraits/men/5.jpg",
	// },
	// {
	//   testimonial:
	// 	"After Name? optimized our website, our traffic increased by 50%. We can't thank them enough!",
	//   name: "Lisa Wang",
	//   designation: "CTO",
	//   company: "456 Enterprises",
	//   image: "https://randomuser.me/api/portraits/women/6.jpg",
	// },
  ];
  
  const projects = [
	{
	  name: "Fitness Application",
	  description:
		"Helpful application for workout. A user can get ideas of what exercise to carry out and also learn hot to do them and find exercises that are similar for a productive workout.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "javascript",
		  color: "green-text-gradient",
		},
	
		{
			name: "Rapid api",
			color: "pink-text-gradient",
		  },
	  ],
	  image: fitness,
	  source_code_link: "https://fitness-app-ibrah-55.vercel.app/",
	},
	{
	  name: "Quiz App ",
	  description:
		"A powerfull question App that allows user to access the questions only after Payment. Results are then displayed to the user.Has a admin dash to add and edit questions.",
	  tags: [
		{
		  name: "Express",
		  color: "blue-text-gradient",
		},
		{
		  name: "NodeJS",
		  color: "green-text-gradient",
		},
		{
		  name: "Safaricom Daraja API",
		  color: "pink-text-gradient",
		},
	  ],
	  image: quiz,
	  source_code_link: "https://github.com/Ibrah-55/quiz-app",
	},
	{
		name: "Kenya Airways Booking",
		description:
		  "A booking system designed for Kenya Airways, providing users with seamless flight booking experiences. Fetches real-time flight information and manage bookings ",
		  tags: [
		{
		  name: "bcryptjs",
		  color: "blue-text-gradient",
		},
		{
		  name: "Mysql",
		  color: "green-text-gradient",
		},
		{
		  name: "Express",
		  color: "pink-text-gradient",
		},
	  ],
	  image: kenya,
	  source_code_link: "https://github.com/Ibrah-55/Kenya-Airways-Booking/tree/main",
	},
	{
		name: "Installation hub ",
		description:
		  " Provides developers with access to a wide range of free resources and tools that they can use in their work. These resources include links to free software, libraries & frameworks",
		tags: [
		  {
			name: "Remix",
			color: "blue-text-gradient",
		  },
		  {
			name: "NodeJS",
			color: "green-text-gradient",
		  },
		  {
			name: "Prisma",
			color: "pink-text-gradient",
		  },
		],
		image: links,
		source_code_link: "https://github.com/Ibrah-55/All-Installation",
	  },
	  {
		name: "Laundry Forecast ",
		description:
		  "App to view weather updates, allows search of places and get your current location. Also helps you decide when to carry out laundry based on that weelk weather forecast.",
		tags: [
		  {
			name: "Threejs",
			color: "blue-text-gradient",
		  },
		  {
			name: "Express",
			color: "green-text-gradient",
		  },
		  {
			name: "Twilio",
			color: "pink-text-gradient",
		  },
		],
		image: weather,
		source_code_link: "https://github.com/Ibrah-55/laundryforecast",
	  },
	  {
		name: "Other projects ",
		description:
		  "Other projects I have done: https://candypops.co.ke  https://briansworldfitness.com  https://vaug.vercel.app ",
		tags: [
		  {
			name: "Express",
			color: "blue-text-gradient",
		  },
		  {
			name: "NodeJS",
			color: "green-text-gradient",
		  },
		  {
			name: "Safaricom Daraja API",
			color: "pink-text-gradient",
		  },
		],
		image: other,
		source_code_link: "https://github.com/Ibrah-55 ",
	  },
  ];
  
  export { services, experiences, skills, projects };