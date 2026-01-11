export interface TeamCard {
    image: string;
    title: string;
    Location: string;
    DateTime: string;
    description: string;
}

export const Collaboration_Cards: TeamCard[] = [
    {
        image: 'assets/meetups/meetup1.jpg',
        title: "Delhi Tech Innovators Meetup",
        Location: "Connaught Place, New Delhi",
        DateTime: "12 Feb 2026",
        description: "A networking meetup for developers, startup founders, and tech enthusiasts to share ideas and explore collaboration opportunities."
    },
    {
        image: 'assets/meetups/meetup2.jpg',
        title: "Mumbai Startup Founders Meet",
        Location: "Bandra Kurla Complex, Mumbai",
        DateTime: "18 Feb 2026",
        description: "Connect with startup founders, investors, and mentors to discuss funding, growth strategies, and innovation."
    },
    {
        image: 'assets/meetups/meetup3.jpg',
        title: "UI/UX Designers Meetup",
        Location: "Indiranagar, Bengaluru",
        DateTime: "22 Feb 2026",
        description: "A creative meetup for designers to discuss latest UI/UX trends, design tools, and real-world product experiences."
    },
    {
        image: 'assets/meetups/meetup4.jpg',
        title: "AI & Data Science Meetup",
        Location: "Hitech City, Hyderabad",
        DateTime: "27 Feb 2026",
        description: "Learn and network with AI engineers, data scientists, and machine learning enthusiasts working on next-gen technologies."
    },
    {
        image: 'assets/meetups/meetup5.jpg',
        title: "Full-Stack Web Developers Meetup",
        Location: "Viman Nagar, Pune",
        DateTime: "3 Mar 2026",
        description: "A meetup for MERN, PHP, and backend developers to exchange knowledge, best practices, and project experiences."
    },
    {
        image: 'assets/meetups/meetup6.jpg',
        title: "Creators & Vloggers Meetup",
        Location: "MI Road, Jaipur",
        DateTime: "8 Mar 2026",
        description: "A fun and interactive meetup for content creators, vloggers, and influencers to collaborate and grow together."
    }
];

