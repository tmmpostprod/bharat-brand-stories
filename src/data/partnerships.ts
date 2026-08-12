export interface MediaKitStat {
  value: string;
  label: string;
}

export interface PartnershipTier {
  id: string;
  name: string;
  tagline: string;
}

export const MEDIA_KIT_STATS: MediaKitStat[] = [
  { value: '100M+', label: 'TV & Digital Reach' },
  { value: '15', label: 'Broadcast Episodes' },
  { value: '4.8/5', label: 'Sponsor Satisfaction' },
  { value: '85%', label: 'Executive Audience' }
];

export const PARTNERSHIP_TIERS: PartnershipTier[] = [
  {
    id: 'title',
    name: 'Title Sponsor',
    tagline: 'Prime Airtime & Exclusive Logo Branding'
  },
  {
    id: 'powered_by',
    name: 'Powered By',
    tagline: 'In-Episode Integration & Digital Rights'
  },
  {
    id: 'associate',
    name: 'Associate Partner',
    tagline: 'Segment Sponsor & Social Amplification'
  }
];
