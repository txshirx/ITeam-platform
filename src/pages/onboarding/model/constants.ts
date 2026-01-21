
import { ROUTES } from '@/shared/config/router/routes';
import type { NavItem, Feature, PricingPlan, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'IT Questions', href: ROUTES.QUESTIONS },
  { label: 'IT Quiz', href: ROUTES.QUIZ.CREATE },
];

export const FEATURES: Feature[] = [
  {
    title: 'Моковые собеседования',
    description: 'Практикуйся на новых вопросах. Подберем подходящие по удобным фильтрам',
    icon: '🤖',
  },
  {
    title: 'Огромная база знаний',
    description: 'Более 1500 вопросов на рызные специальности и темы.',
    icon: '💻',
  },
  {
    title: 'Статистика прогресса',
    description: 'Ты всегда можешь узнать сколько впоросов ты изучил и сколько предстоит еще.',
    icon: '🤝',
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    features: ['5 Mock Interviews / Month', 'Standard Problem Set', 'Community Support', 'Basic Analytics'],
  },
  {
    name: 'Pro',
    price: '$29',
    recommended: true,
    features: ['Unlimited AI Interviews', 'Advanced System Design Track', 'Priority Mentor Access', 'Video Feedback Analysis', 'Custom Study Plans'],
  },
  {
    name: 'Team',
    price: '$99',
    features: ['HR Dashboard', 'Custom Question Banks', 'Onboarding Tracks', 'SLA Support', 'Candidate Evaluation Tools'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alexei Ivanov',
    role: 'Software Engineer',
    company: 'Google',
    content: 'ITeam was the bridge between my technical skills and landing a dream job. The system design module is unmatched.',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Frontend Dev',
    company: 'Meta',
    content: 'The AI feedback pointed out nuances in my communication that I never noticed. Highly recommended for senior roles.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
];
