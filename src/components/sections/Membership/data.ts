// import { PlanType } from './types';

// export const membershipPlans: PlanType[] = [
//   {
//     name: 'Classic',
//     backgroundColor: 'bg-gradient-to-br from-amber-500/90 to-amber-700/90',
//     accessType: 'Dual Access',
//     features: [
//       'No Cost General Training',
//       'One Demo Free Session For Personal Training',
//       '80% Off On Steam And BMI',
//       '+ Attractive Complimentary Gift'
//     ],
//     durations: [
//       {
//         months: '12',
//         price: 14998,
//         monthlyPrice: 1249,
//         gst: {
//           amount: 2699,
//           total: 17697
//         }
//       },
//       {
//         months: '06',
//         price: 10498,
//         monthlyPrice: 1749,
//         gst: {
//           amount: 1889,
//           total: 12387
//         }
//       },
//       {
//         months: '03',
//         price: 7498,
//         monthlyPrice: 2499,
//         gst: {
//           amount: 1349,
//           total: 8847
//         }
//       }
//     ]
//   },
//   {
//     name: 'Premium',
//     backgroundColor: 'bg-gradient-to-br from-gray-400/90 to-gray-600/90',
//     accessType: 'Club Access',
//     features: [
//       'No Cost General Training',
//       'One Demo Free Session For Personal Training',
//       '80% Off On Steam And BMI',
//       '+ Attractive Complimentary Gift'
//     ],
//     durations: [
//       {
//         months: '12',
//         price: 17988,
//         monthlyPrice: 1499,
//         gst: {
//           amount: 3239,
//           total: 21227
//         }
//       },
//       {
//         months: '06',
//         price: 12598,
//         monthlyPrice: 2099,
//         gst: {
//           amount: 2267,
//           total: 14865
//         }
//       },
//       {
//         months: '03',
//         price: 8998,
//         monthlyPrice: 2999,
//         gst: {
//           amount: 1619,
//           total: 10617
//         }
//       }
//     ]
//   },
//   {
//     name: 'Standard',
//     backgroundColor: 'bg-gradient-to-br from-gray-500/90 to-gray-700/90',
//     accessType: 'Solo Access',
//     features: [
//       'No Cost General Training',
//       'One Demo Free Session For Personal Training',
//       '80% Off On Steam And BMI',
//       '+ Attractive Complimentary Gift'
//     ],
//     durations: [
//       {
//         months: '12',
//         price: 9999,
//         monthlyPrice: 833,
//         gst: {
//           amount: 1799,
//           total: 11799
//         }
//       },
//       {
//         months: '06',
//         price: 6999,
//         monthlyPrice: 1166,
//         gst: {
//           amount: 1259,
//           total: 8259
//         }
//       },
//       {
//         months: '03',
//         price: 4999,
//         monthlyPrice: 1666,
//         gst: {
//           amount: 899,
//           total: 5899
//         }
//       }
//     ]
//   }
// ];

// 2

export const membershipPlans = [
  {
    name: "Standard",
    durations: [
      {
        months: 12,
        price: 9999,
        monthlyPrice: 833,
        gst: 1799,
        total: 11799,
        access: "Solo Access"
      },
      {
        months: 6,
        price: 6999,
        monthlyPrice: 1166,
        gst: 1259,
        total: 8259,
        access: "Solo Access"
      },
      {
        months: 3,
        price: 4999,
        monthlyPrice: 1666,
        gst: 899,
        total: 5899,
        access: "Solo Access"
      }
    ]
  },
  {
    name: "Classic",
    durations: [
      {
        months: 12,
        price: 14998,
        monthlyPrice: 1249,
        gst: 2699,
        total: 17697,
        access: "Dual Access"
      },
      {
        months: 6,
        price: 10498,
        monthlyPrice: 1749,
        gst: 1889,
        total: 12387,
        access: "Dual Access"
      },
      {
        months: 3,
        price: 7498,
        monthlyPrice: 2499,
        gst: 1349,
        total: 8847,
        access: "Dual Access"
      }
    ]
  },
  {
    name: "Premium",
    durations: [
      {
        months: 12,
        price: 17988,
        monthlyPrice: 1499,
        gst: 3239,
        total: 21227,
        access: "Club Access"
      },
      {
        months: 6,
        price: 12598,
        monthlyPrice: 2099,
        gst: 2267,
        total: 14865,
        access: "Club Access"
      },
      {
        months: 3,
        price: 8998,
        monthlyPrice: 2999,
        gst: 1619,
        total: 10617,
        access: "Club Access"
      }
    ]
  },
  
];