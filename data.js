import {
  GraduationCap,
  Code,
  Database,
  LineChart,
  Cpu,
  Command,
} from "lucide-react";

// FAQ
export const faqData = [
  {
    question: "What are the eligibility criteria for the program?",
    answer:
      "We welcome individuals with a strong passion for technology and innovation. Prior experience is not required, but a willingness to learn and a commitment to the program are essential.",
  },
  {
    question: "Can you explain the application process?",
    answer:
      "The application process consists of three stages: an initial application review, a technical assessment, and a personal interview. This process usually takes 2-3 weeks.",
  },
  {
    question:
      "What fees should I expect, and what payment options are available?",
    answer:
      "Program fees vary depending on the chosen track. We offer flexible payment plans and scholarships for outstanding candidates to make the program accessible.",
  },
  {
    question: "What is the expected time commitment for participants?",
    answer:
      "Participants are expected to commit 40 hours per week for 12 weeks. This includes hands-on projects, mentorship, and networking opportunities that are integral to the program.",
  },
  {
    question: "How will this program impact my career?",
    answer:
      "Our program is designed to be a critical difference-maker for your career, providing you with real industry experience, mentorship from professionals, and a network that can help you launch your career in tech.",
  },
];

//Student Success Testimonials

export const testimonials = [
  {
    name: "Sangram",
    role: "Data Science",
    quote:
      "Joining Learning Habits completely changed my confidence level in data science. The real datasets and industry insights I gained while working on actual projects helped me see the bigger picture beyond just theory. Ab mujhe interviews mein kahin bhi apne skills dikhane mein hesitation nahi hoti.",
    image: "/api/placeholder/64/64",
    icon: Database,
    link: "#sangram",
  },
  {
    name: "Shilpa",
    role: "Power BI",
    quote:
      "Mere liye dashboard banane aur data ko visualize karne ka experience theory se kaafi alag tha. Learning Habits gave me the push to learn hands-on, aur yeh exposure industry mentors ke sath kaam karke hi possible ho saka. I feel much more prepared for a data analytics role now.",
    image: "/api/placeholder/64/64",
    icon: LineChart,
    link: "#shilpa",
  },
  {
    name: "Ajay",
    role: "Python",
    quote:
      "Python ke basic commands toh college mein theek se seekh liye the, but Learning Habits ne mujhe projects pe kaam karke sikhaya ki industry mein code ko kaise apply kiya jaata hai. I can now handle real projects with confidence, thanks to this opportunity.",
    image: "/api/placeholder/64/64",
    icon: Code,
    link: "#ajay",
  },
];

export const videoTestimonials = [
  {
    name: "Mayank",
    role: "Python & React Developer",
    thumbnail: "/api/placeholder/640/360",
    videoUrl: "#video1",
    icon: Command,
  },
  {
    name: "Vaibhav",
    role: "AI & ML Engineer",
    thumbnail: "/api/placeholder/640/360",
    videoUrl: "#video2",
    icon: Cpu,
  },
  {
    name: "Ayushi",
    role: "DevOps Engineer",
    thumbnail: "/api/placeholder/640/360",
    videoUrl: "#video3",
    icon: GraduationCap,
  },
];


//How It Works
    export const steps = [
      {
        title: "1. Apply & Get Selected",
        description:
          "Submit your application and take the first step towards transforming your career. We're looking for passion, curiosity, and a drive to learn.",
        cta: "Ready to take the first step?",
        icon: "🚀",
        delay: 0.2,
      },
      {
        title: "2. Join the Learning Habits Team",
        description:
          "Become part of a community of learners and mentors. Here, you'll meet industry experts and get set up to tackle real-world projects.",
        cta: "See yourself growing here?",
        icon: "👥",
        delay: 0.4,
      },
      {
        title: "3. Work on Real Industry Projects",
        description:
          "Roll up your sleeves and dive into actual industry projects. Gain hands-on experience that will set your resume apart.",
        cta: "Ready to gain real-world skills?",
        icon: "💼",
        delay: 0.6,
      },
      {
        title: "4. Boost Your Career",
        description:
          "With a portfolio of real projects and newfound confidence, take the next big leap in your career. You're industry-ready!",
        icon: "⭐",
        cta: "Imagine yourself here?",
        delay: 0.8,
      },
    ];