
// export function Hero() {
//   return (
//     <div className="relative h-screen">
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//       </div>
      
//       <div className="relative h-full flex items-center justify-center">
//         <div className="text-center text-white px-4">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 float-text">
//             TRANSFORM YOUR BODY
//             <br />
//             <span className="text-orange-500">TRANSFORM YOUR LIFE</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto float-text">
//             Join the ultimate fitness experience. World-class equipment, expert trainers, and a supportive community.
//           </p>
//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
//               Start Your Journey
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-black transition-colors">
//               View Classes
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// 2

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 float-text">
            TRANSFORM YOUR BODY
            <br />
            <span style={{ color: '#ff5500' }}>TRANSFORM YOUR LIFE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto float-text">
            Join the ultimate fitness experience. World-class equipment, expert trainers, and a supportive community.
          </p>
        </div>
      </div>
    </div>
  );
}