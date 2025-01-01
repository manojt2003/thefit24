
const classes = [
  {
    title: 'Zumba Aerobics',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    trainer: 'Maria Rodriguez',
    time: '6:00 AM - 7:00 AM'
  },
  {
    title: 'Group Class',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    trainer: 'John Smith',
    time: '7:30 AM - 8:30 AM'
  },
  {
    title: 'Cross Fit',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    trainer: 'Mike Johnson',
    time: '8:00 AM - 9:00 AM'
  },
  {
    title: 'Personal Training',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    trainer: 'Sarah Williams',
    time: 'By Appointment'
  },
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    trainer: 'Emma Davis',
    time: '6:00 AM - 7:00 AM'
  },
  {
    title: 'Steam And Shower enclosure space',
    image: 'https://t3.ftcdn.net/jpg/08/18/38/56/240_F_818385695_T5ma1s4E6QXuFXYqxQVaETsbUVTEfHWT.jpg',
    trainer: 'Alex Thompson',
    time: '7:30 AM - 8:30 AM'
  }
];

export function Classes() {
  return (
    <section className="py-20 bg-black" id="classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 float-text">Our Classes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto float-text">
            Join our diverse range of classes led by certified personal trainers to achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{classItem.title}</h3>
                {/* <p className="text-gray-300">Trainer: {classItem.trainer}</p> */}
                {/* <p className="text-gray-300">{classItem.time}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}