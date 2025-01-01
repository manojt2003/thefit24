import { NavLink } from './NavLink';

export function DesktopMenu() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        {['Home', 'Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
          <NavLink
            key={item}
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </NavLink>
        ))}
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-550 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
}