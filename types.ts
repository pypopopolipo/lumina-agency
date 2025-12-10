export interface AutomationStrategy {
  title: string;
  description: string;
  impact: string;
  tools: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export interface ClientReview {
  name: string;
  company: string;
  review: string;
  avatar: string;
}