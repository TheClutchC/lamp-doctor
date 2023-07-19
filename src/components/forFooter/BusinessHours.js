const daysOfWeek = [
  'Mon - Wed', 
  'Thurs - Sun'
];

const BusinessHours = () => {
  return (
    <div>
      <div className="font-bold italic">Business Hours</div>
      {daysOfWeek.map((day) => (
        <div key={day} className="py-2 px-4">
          <div className="text-center">{day}</div>
          <div className="text-center">
            {/* Conditional Chain Below using Ternary Operator to specify weekend hours  */}
            {day === 'Thurs - Sun' ? 'Closed' : '10:00 AM - 4:00 PM'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusinessHours;