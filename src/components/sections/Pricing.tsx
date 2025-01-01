import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Three month Plan',
    price: '4,999',
    features: [
      'Access to gym facilities',
      'Locker room access'
    ]
  },
  {
    name: 'Six month Plan',
    price: '8999',
    features: [
      'All Basic features',
      'Personal trainer consultation'
    ],
    popular: true
  },
  {
    name: '1 year Plan',
    price: '11999',
    features: [
      'All Pro features',
      'Private training sessions',
      'Premium amenities'
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-black" id="membership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900/50 rounded-lg p-8 border ${
                plan.popular ? 'border-red-600' : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}