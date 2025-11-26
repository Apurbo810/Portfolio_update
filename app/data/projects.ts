export interface projects {
    title: string 
    description: string
    image: string
    link: string
}

export const ProjectData: projects[] = [
    {
      title: "Community Based Recycle Tracking System",
      description:
        "A smart web platform for tracking recyclable waste, managing community recycling operations, and improving environmental awareness.",
      image: "/project_image/based-recycle-tracking.png",
      link: "https://community-based-recycle-tracking-live.vercel.app/",
    },
    {
      title: "Success Freelancer",
      description:
        "A complete freelancing learning platform offering courses, resources, and tools to help individuals grow their online career.",
      image: "/project_image/successfreelancer.png", 
      link: "https://www.successfreelancer.com/",
    },
];

