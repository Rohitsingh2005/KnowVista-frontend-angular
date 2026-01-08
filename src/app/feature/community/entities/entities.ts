export interface CommunityTeam {
    communityName: string;
    peoples: number;
    description: string;
    discussions: Discussion[];
}

export interface Discussion {
    topic: string;
    replies: number;
}

export const communityTeams: CommunityTeam[] = [
    {
        communityName: 'Web Development Hub',
        peoples: 1245,
        description: 'A vibrant community for web developers to share knowledge, discuss latest frameworks, and collaborate on projects. Join us to stay updated with modern web technologies.',
        discussions: [
            { topic: 'Best practices for React performance optimization', replies: 23 },
            { topic: 'CSS Grid vs Flexbox: When to use which?', replies: 18 },
            { topic: 'TypeScript tips and tricks for beginners', replies: 31 }
        ]
    },
    {
        communityName: 'Data Science Enthusiasts',
        peoples: 892,
        description: 'Connect with data scientists, machine learning engineers, and AI researchers. Share datasets, discuss algorithms, and explore the world of data-driven insights.',
        discussions: [
            { topic: 'Introduction to Neural Networks', replies: 45 },
            { topic: 'Data preprocessing techniques', replies: 28 },
            { topic: 'Python vs R for data analysis', replies: 19 }
        ]
    },
    {
        communityName: 'Mobile App Developers',
        peoples: 756,
        description: 'A community dedicated to mobile app development across iOS, Android, and cross-platform solutions. Share your apps, get feedback, and learn together.',
        discussions: [
            { topic: 'Flutter vs React Native comparison', replies: 34 },
            { topic: 'App store optimization strategies', replies: 22 },
            { topic: 'Building responsive mobile UIs', replies: 27 }
        ]
    },
    {
        communityName: 'DevOps & Cloud',
        peoples: 634,
        description: 'Everything about DevOps, cloud infrastructure, CI/CD pipelines, and containerization. Learn from experts and share your deployment experiences.',
        discussions: [
            { topic: 'Docker best practices for production', replies: 29 },
            { topic: 'Kubernetes orchestration guide', replies: 41 },
            { topic: 'AWS vs Azure vs GCP comparison', replies: 36 }
        ]
    },
    {
        communityName: 'UI/UX Designers',
        peoples: 523,
        description: 'A creative space for designers to showcase their work, discuss design trends, and collaborate on projects. Share inspiration and get constructive feedback.',
        discussions: [
            { topic: 'Design systems: Building from scratch', replies: 17 },
            { topic: 'Accessibility in modern web design', replies: 24 },
            { topic: 'Figma tips for efficient workflows', replies: 19 }
        ]
    }
];

