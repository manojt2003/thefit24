
export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://lh4.googleusercontent.com/-56aIoTwmNl0/AAAAAAAAAAI/AAAAAAAAAAA/9ir-_9Cl2Q8/s40-c-k-mo/photo.jpg"
        alt="TheFit24 Logo"
        className="w-12 h-12 object-contain"
      />
      <div className="flex items-center">
        <span className="text-2xl font-bold text-gray-200 tracking-wider">THE</span>
        <span className="text-2xl font-bold text-gray-200 tracking-wider">FIT</span>
        <span className="text-2xl font-bold text-gray-200 tracking-wider">24</span>
      </div>
    </div>
  );
}