import { Plan, Feature, BlogPost, BrokenLink } from './types';

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Starter',
    priceMonthly: 0,
    priceYearly: 0,
    features: ['Up to 100 pages scan', 'Weekly reports', 'Email alerts', 'Community support'],
  },
  {
    id: 'basic',
    name: 'Basic',
    priceMonthly: 10,
    priceYearly: 100,
    features: ['Up to 1,000 pages scan', 'Daily reports', 'Email alerts', 'Standard support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 29,
    priceYearly: 290,
    features: ['Up to 10,000 pages', 'Daily scans', 'Auto-fix suggestions', 'Export to PDF/CSV', 'Priority support'],
    isPopular: true,
  },
  {
    id: 'agency',
    name: 'Agency',
    priceMonthly: 99,
    priceYearly: 990,
    features: ['Unlimited pages', 'Real-time monitoring', 'White-label reports', 'API Access', 'Dedicated account manager'],
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Automated Crawling',
    description: 'Set it and forget it. We scan your site daily to catch broken links before your users do.',
    icon: 'search',
  },
  {
    title: 'Smart Suggestions',
    description: 'Our AI analyzes broken links and suggests the best replacement or redirect strategy.',
    icon: 'lightbulb',
  },
  {
    title: 'Instant Alerts',
    description: 'Get notified via Slack, Email, or Webhook the moment a critical 404 is detected.',
    icon: 'bell',
  },
  {
    title: 'SEO Impact Score',
    description: 'Understand how broken links affect your search rankings and fix high-impact errors first.',
    icon: 'bar-chart',
  },
];

export const MOCK_BROKEN_LINKS: BrokenLink[] = [
  {
    id: '1',
    url: 'https://example.com/blog/2021/seo-guide',
    sourcePage: 'https://example.com/blog',
    statusCode: 404,
    detectedAt: '2023-10-25T10:00:00Z',
    severity: 'high',
    suggestedFix: 'Redirect to /blog/2024/seo-mastery-guide',
  },
  {
    id: '2',
    url: 'https://example.com/pricing-old',
    sourcePage: 'https://example.com/footer',
    statusCode: 301,
    detectedAt: '2023-10-26T08:30:00Z',
    severity: 'medium',
    suggestedFix: 'Update link to /pricing',
  },
  {
    id: '3',
    url: 'https://external-partner.com/api/v1',
    sourcePage: 'https://example.com/docs/api',
    statusCode: 500,
    detectedAt: '2023-10-26T09:15:00Z',
    severity: 'high',
  },
  {
    id: '4',
    url: 'https://example.com/images/logo-v1.png',
    sourcePage: 'https://example.com/about',
    statusCode: 404,
    detectedAt: '2023-10-26T11:20:00Z',
    severity: 'low',
    suggestedFix: 'Remove image or replace with logo-v2.png',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Broken Links Kill Your SEO',
    excerpt: 'Search engines hate dead ends. Learn how 404 errors impact your crawl budget and ranking.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    image: 'https://picsum.photos/800/400?random=1',
  },
  {
    id: '2',
    title: 'Redirects 101: 301 vs 302',
    excerpt: 'When to use permanent redirects versus temporary ones for maximum link equity preservation.',
    date: 'Oct 18, 2023',
    readTime: '7 min read',
    image: 'https://picsum.photos/800/400?random=2',
  },
  {
    id: '3',
    title: 'Automating Link Maintenance',
    excerpt: 'How to save 10 hours a week by automating your website health checks.',
    date: 'Oct 25, 2023',
    readTime: '4 min read',
    image: 'https://picsum.photos/800/400?random=3',
  },
];
