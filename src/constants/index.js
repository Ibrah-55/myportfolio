import {
	backend,
	creator,
	web,
	django,
	meta,
	starbucks,
	tesla,
	shopify,
	codex,
	dalle,
	generator,
  } from "../assets";
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "work",
	  title: "Work",
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
	  company_name: "Grip Foundation",
	  Location: "Remote - India",
	  icon: starbucks,
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
	  icon: tesla,
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
  
  const testimonials = [
	{
	  testimonial:
	  "I thought it was impossible to make a website as beautiful as our product, but Name? proved me wrong.",
	  name: "Sara Lee",
	  designation: "CFO",
	  company: "Acme Co",
	  image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
	  testimonial:
		"I've never met a web developer who truly cares about their clients' success like Name? does.",
	  name: "Chris Brown",
	  designation: "COO",
	  company: "DEF Corp",
	  image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
	  testimonial:
		"After Name? optimized our website, our traffic increased by 50%. We can't thank them enough!",
	  name: "Lisa Wang",
	  designation: "CTO",
	  company: "456 Enterprises",
	  image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
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
		  name: "tailwind",
		  color: "pink-text-gradient",
		},
	  ],
	  image: dalle,
	  source_code_link: "https://github.com/ElonMusk2002/T-Shirt_3D__Customizer_With_ChatGPT",
	},
	{
	  name: "CodeX",
	  description:
		"A powerfull web application that allows user to chat with chatGPT to help with code. No needed vpn or logging ",
	  tags: [
		{
		  name: "express",
		  color: "blue-text-gradient",
		},
		{
		  name: "NodeJS",
		  color: "green-text-gradient",
		},
		{
		  name: "openAiAPI",
		  color: "pink-text-gradient",
		},
	  ],
	  image: codex,
	  source_code_link: "https://github.com/ElonMusk2002/Codex-ChatGPT",
	},
	{
	  name: "Image Generator by DALL-E",
	  description:
		"A repository that generates images using OpenAI API key written in Python using Django1. DALL·E is a 12-billion parameter version of GPT-3 trained to generate images from text descriptions",
	  tags: [
		{
		  name: "openAiAPI",
		  color: "blue-text-gradient",
		},
		{
		  name: "Python",
		  color: "green-text-gradient",
		},
		{
		  name: "Django",
		  color: "pink-text-gradient",
		},
	  ],
	  image: generator,
	  source_code_link: "https://github.com/ElonMusk2002/Image_Generator_DALL-E",
	},
  ];
  
  export { services, experiences, testimonials, projects };