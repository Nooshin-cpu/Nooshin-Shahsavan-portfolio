// Image metadata utility for SEO optimization
export interface ImageMetadata {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// Centralized image metadata for better SEO
export const imageMetadata: Record<string, ImageMetadata> = {
  // Logo and branding images
  'logoweb.png': {
    src: '/src/assets/logoweb.png',
    alt: 'Nooshin Shahsavan Portfolio Logo',
    title: 'Nooshin Shahsavan - Creative Designer',
    description: 'Professional logo for Nooshin Shahsavan portfolio'
  },

  // About page images
  'man-8.jpg': {
    src: '/src/assets/about/man-8.jpg',
    alt: 'Nooshin Shahsavan professional portrait',
    title: 'Nooshin Shahsavan - About Me',
    description: 'Professional portrait of Nooshin Shahsavan'
  },
  'man-1.jpg': {
    src: '/src/assets/about/man-1.jpg',
    alt: 'Nooshin Shahsavan lifestyle image 1',
    title: 'Nooshin Shahsavan - Personal Interests',
    description: 'Lifestyle image showing personal interests'
  },
  'man-2.jpg': {
    src: '/src/assets/about/man-2.jpg',
    alt: 'Nooshin Shahsavan lifestyle image 2',
    title: 'Nooshin Shahsavan - Creative Process',
    description: 'Image representing creative design process'
  },
  'man-3.jpg': {
    src: '/src/assets/about/man-3.jpg',
    alt: 'Nooshin Shahsavan lifestyle image 3',
    title: 'Nooshin Shahsavan - Design Inspiration',
    description: 'Image showing design inspiration and creativity'
  },
  'man-4.jpeg': {
    src: '/src/assets/about/man-4.jpeg',
    alt: 'Nooshin Shahsavan lifestyle image 4',
    title: 'Nooshin Shahsavan - Professional Work',
    description: 'Image representing professional design work'
  },
  'man-5.jpg': {
    src: '/src/assets/about/man-5.jpg',
    alt: 'Nooshin Shahsavan lifestyle image 5',
    title: 'Nooshin Shahsavan - Creative Lifestyle',
    description: 'Lifestyle image showing creative interests'
  },
  'man-6.jpg': {
    src: '/src/assets/about/man-6.jpg',
    alt: 'Nooshin Shahsavan lifestyle image 6',
    title: 'Nooshin Shahsavan - Personal Life',
    description: 'Personal lifestyle image'
  },
  'man-7.jpg': {
    src: '/src/assets/about/man-7.jpg',
    alt: 'Nooshin Shahsavan lifestyle image 7',
    title: 'Nooshin Shahsavan - Creative Expression',
    description: 'Image showing creative expression and interests'
  },

  // Work page images
  'workhome.png': {
    src: '/src/assets/home/workhome.png',
    alt: 'Work portfolio showcase',
    title: 'Nooshin Shahsavan - Work Portfolio',
    description: 'Portfolio showcase of creative projects'
  },
  'work1.png': {
    src: '/src/assets/work/work1.png',
    alt: 'SBS Project preview',
    title: 'SBS Project - Brand Design',
    description: 'Preview of SBS branding project'
  },
  'work3.png': {
    src: '/src/assets/work/work3.png',
    alt: 'Veen Project preview',
    title: 'Veen Project - Brand Identity',
    description: 'Preview of Veen branding project'
  },
  'work4.png': {
    src: '/src/assets/work/work4.png',
    alt: 'Zar Project preview',
    title: 'Zar Project - Creative Design',
    description: 'Preview of Zar creative project'
  },
  'work5.png': {
    src: '/src/assets/work/work5.png',
    alt: 'UX/UI Project preview',
    title: 'UX/UI Design Project',
    description: 'Preview of UX/UI design project'
  },
  'work6.png': {
    src: '/src/assets/work/work6.png',
    alt: 'Delicato Project preview',
    title: 'Delicato Project - Brand Design',
    description: 'Preview of Delicato branding project'
  },
  'work7.png': {
    src: '/src/assets/work/work7.png',
    alt: 'Additional project preview',
    title: 'Creative Design Project',
    description: 'Preview of additional creative project'
  },

  // SBS Project images
  'banner.png': {
    src: '/src/assets/sbsimg/banner.png',
    alt: 'SBS Project banner',
    title: 'SBS Project - Brand Identity',
    description: 'Banner image for SBS branding project'
  },
  's1.png': {
    src: '/src/assets/sbsimg/s1.png',
    alt: 'SBS logo design',
    title: 'SBS Logo Design',
    description: 'Logo design for SBS project'
  },
  's2.png': {
    src: '/src/assets/sbsimg/s2.png',
    alt: 'SBS brand elements',
    title: 'SBS Brand Elements',
    description: 'Brand elements and design components'
  },
  's3.png': {
    src: '/src/assets/sbsimg/s3.png',
    alt: 'SBS color palette',
    title: 'SBS Color Palette',
    description: 'Color palette and brand guidelines'
  },
  's4.png': {
    src: '/src/assets/sbsimg/s4.png',
    alt: 'SBS typography',
    title: 'SBS Typography',
    description: 'Typography and font selection'
  },

  // Veen Project images
  'brand-strategy.png': {
    src: '/src/assets/veen/brand-strategy.png',
    alt: 'Veen brand strategy',
    title: 'Veen Brand Strategy',
    description: 'Brand strategy and positioning for Veen project'
  },
  'card.png': {
    src: '/src/assets/veen/card.png',
    alt: 'Veen business card design',
    title: 'Veen Business Card',
    description: 'Business card design for Veen project'
  },
  'envelop.png': {
    src: '/src/assets/veen/envelop.png',
    alt: 'Veen envelope design',
    title: 'Veen Envelope Design',
    description: 'Envelope design for Veen project'
  },

  // Delicato Project images
  'deli-home.png': {
    src: '/src/assets/deli/deli-home.png',
    alt: 'Delicato project home',
    title: 'Delicato Project Home',
    description: 'Home page design for Delicato project'
  },
  'd1.png': {
    src: '/src/assets/deli/d1.png',
    alt: 'Delicato design element 1',
    title: 'Delicato Design Element',
    description: 'Design element for Delicato project'
  },
  'd2.png': {
    src: '/src/assets/deli/d2.png',
    alt: 'Delicato design element 2',
    title: 'Delicato Design Element',
    description: 'Design element for Delicato project'
  },

  // Zar Project images
  'banner-zar.png': {
    src: '/src/assets/zar/banner-zar.png',
    alt: 'Zar project banner',
    title: 'Zar Project Banner',
    description: 'Banner image for Zar project'
  },
  'logo-zar-1.png': {
    src: '/src/assets/zar/logo-zar-1.png',
    alt: 'Zar logo design 1',
    title: 'Zar Logo Design',
    description: 'Logo design for Zar project'
  },
  'logo-zar-2.png': {
    src: '/src/assets/zar/logo-zar-2.png',
    alt: 'Zar logo design 2',
    title: 'Zar Logo Design',
    description: 'Alternative logo design for Zar project'
  },

  // Workday Project images
  'workday-phone.png': {
    src: '/src/assets/work/workday-phone.png',
    alt: 'Workday app mockup',
    title: 'Workday App Mockup',
    description: 'Mobile app mockup for Workday project'
  },
  'schedule.png': {
    src: '/src/assets/work/schedule.png',
    alt: 'Workday schedule icon',
    title: 'Workday Schedule Icon',
    description: 'Schedule icon for Workday app'
  },
  'time-out.png': {
    src: '/src/assets/work/time-out.png',
    alt: 'Workday time off icon',
    title: 'Workday Time Off Icon',
    description: 'Time off icon for Workday app'
  },
  'notification.png': {
    src: '/src/assets/work/notification.png',
    alt: 'Workday notification icon',
    title: 'Workday Notification Icon',
    description: 'Notification icon for Workday app'
  },

  // Fun Project images
  'funhome.jpg': {
    src: '/src/assets/fun/funhome.jpg',
    alt: 'Fun projects showcase',
    title: 'Fun Projects Showcase',
    description: 'Showcase of fun and creative projects'
  },
  'straw1.MP4': {
    src: '/src/assets/fun/straw1.MP4',
    alt: 'Straw animation video',
    title: 'Straw Animation',
    description: 'Creative animation video'
  },
  '2D.mp4': {
    src: '/src/assets/fun/2D.mp4',
    alt: '2D animation video',
    title: '2D Animation',
    description: '2D animation video project'
  },
  'vr.mp4': {
    src: '/src/assets/fun/vr.mp4',
    alt: 'VR/AR project video',
    title: 'VR/AR Project',
    description: 'Virtual reality and augmented reality project'
  }
};

// Helper function to get image metadata
export const getImageMetadata = (filename: string): ImageMetadata => {
  return imageMetadata[filename] || {
    src: `/src/assets/${filename}`,
    alt: `Image: ${filename}`,
    title: `Nooshin Shahsavan - ${filename}`,
    description: `Image from Nooshin Shahsavan portfolio`
  };
};

// Helper function to create optimized img element
export const createOptimizedImage = (filename: string, className?: string, style?: React.CSSProperties) => {
  const metadata = getImageMetadata(filename);
  return {
    src: metadata.src,
    alt: metadata.alt,
    title: metadata.title,
    className,
    style,
    loading: 'lazy' as const,
    decoding: 'async' as const
  };
}; 