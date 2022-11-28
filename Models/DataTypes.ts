export interface JobCard {
  id: number;
  type: string;
  logoPath: string;
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  salaryRange: string;
  posted: string;
  expReq: string;
}

export interface CatCard {
  id: number;
  icon: string;
  catName: string;
  jobs: number;
}

export interface Package {
  id: number;
  name: string;
  price: number;
  users: number;
  uptime: string;
  bandwidth: number;
  storage: number;
  phs: boolean;
  esla: boolean;
  bestVal: boolean;
}

export interface BlogCard {
  id: number;
  banner: any;
  catgory: string;
  title: string;
  desc: string;
  user: any;
  views: string;
  published: string;
}

export interface CompWithJobCard {
  id: number;
  logo: any;
  companyName: string;
  jobs: number;
}

export interface CandidateCard {
  name: string;
}
