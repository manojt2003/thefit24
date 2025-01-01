export interface PlanDuration {
  months: '03' | '06' | '12';
  price: number;
  monthlyPrice: number;
  gst: {
    amount: number;
    total: number;
  };
}

export interface PlanType {
  name: 'Classic' | 'Premium' | 'Standard';
  durations: PlanDuration[];
  features: string[];
  accessType: string;
  backgroundColor: string;
}