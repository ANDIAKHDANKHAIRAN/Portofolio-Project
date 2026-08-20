export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Data Projects
const projects: Project[] = [
  {
    id: 1,
    title: "Frezz-Laundy",
    category: "Web Dev",
    description: "Adalah Web Berbasis Aplikasi Yang Membantu Kasir Untuk Mengindput data Tanpa Harus Menggunakan Karcis Ataua Secara Digital",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/ANDIAKHDANKHAIRAN/Frezz_laundry",
  },

  {
    id: 2,
    title: "Project Portofolio Summary",
    category: "Web Dev",
    description: "Dibuat Aplikasi Berbasis Web Menggunakan Laravel Untuk Membantu pengguna menanndai dan mengelompokkan barang yang ingin dimiliki berdasarkan tingkat kebutuhan.",
    tech: ["Xampp", "Composer", "Vscode", "PHP", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
];

// 2. Data Skills
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML5 / CSS3", level: "Basic", percentage: 0 },
      { name: "JavaScript (ES6+)", level: "Basic", percentage: 0 },
      { name: "React.js", level: "Basic", percentage: 5 },
      { name: "Next.js (App Router)", level: "Basic", percentage: 15 },
      { name: "Tailwind CSS", level: "Basic", percentage: 0 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
      { name: "MySQL", level: "Intermediate", percentage: 70 },
      { name: "RESTful API Development", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Basic", percentage: 50 },
      { name: "Figma (UI/UX)", level: "Basic", percentage: 70 },
      { name: "Postman", level: "Intermediate", percentage: 50 },
      { name: "VS Code", level: "Advanced", percentage: 95 },
    ],
  },
];

// 3. Data Sertifikat
const certificates: Certificate[] =  [
  {
    id: 1,
    title: "Memulai Dasar Pemograman untuk menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "Januari 11 ,2025",
    credentialId: "JMZVEMY4QPN9",
    verificationUrl: "https://dicoding.com/certificates/JMZVEMY4QPN9",
    image:"/sertifikat/JMZVEMY4QPN9.png"
  },
  {
    id: 2,
    title: "Ai Class ASEAN",
    issuer: "ASEA FOUNDATION",
    date: "May 30 , 2026",
    credentialId: "",
    verificationUrl: "https://www.AiClassASEAN.org",
    image:"/sertifikat/Ai_class.png"
  },
  {
    id: 3,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Network Academy - Js Institute Open Education & Development Group",
    date: "Maret 2025",
    credentialId: "Cert ID: 50c8f994-1c64-4caa-8277-c3d28bd37d5a",
    verificationUrl: "https://www.credly.com/badges/67e41dc1-ac41-4460-97ab-4727a09cbf3a/public_url",
    image:"/sertifikat/Java_essentials.png"
  },
  {
    id: 4,
    title: "Belajar Dasar Pemograman Web",
    issuer: "Dicoding Indonesia",
    date: "Januari 25 , 2025",
    credentialId: "98XWERNWWXM3",
    verificationUrl: "https://dicoding.com/certificates/98XWERNWWXM3",
    image:"/sertifikat/98XWERNWWXM3.png"
  },
  {
    id: 5,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Januari 25 , 2025",
    credentialId: "1OP82DG42PQK",
    verificationUrl: "https://dicoding.com/certificates/1OP82DG42PQK",
    image:"/sertifikat/1OP82DG42PQK.png"
  },

   {
    id: 6,
    title: "Laravel Web Programmer",
    issuer: "Telkom Digiup",
    date: "December 22 , 2025",
    credentialId: "D2500806",
    verificationUrl: "",
    image:"/sertifikat/Laravel_web_programmer.png"
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Drs. Eko Prasetyo",
    role: "Kepala Jurusan RPL",
    company: "SMK Negeri 1",
    avatar: "👨‍🏫",
    stars: 10,
    quote:
      "Alif menunjukkan performa luar biasa dalam setiap tugas dan proyek sekolah. Dia selalu menjadi leader dalam team project karena inisiatifnya yang tinggi.",
  },
  {
    id: 2,
    name: "Rian Ardiansyah",
    role: "Teman Sekelas / Ketua Kelas",
    company: "XII RPL 1",
    avatar: "🧑",
    stars: 5,
    quote:
      "Belajar kelompok bareng Alif selalu asik. Dia pintar menjelaskan konsep pemrograman yang susah dengan bahasa yang gampang dimengerti oleh teman-teman.",
  },
  {
    id: 3,
    name: "Siti Rahmawati",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Negeri 1",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Pemahaman Alif terhadap framework Next.js dan Tailwind CSS di usianya sekarang sangat mengagumkan. Proyek-proyeknya dikerjakan dengan rapi dan konsisten.",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}