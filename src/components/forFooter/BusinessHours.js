const daysOfWeek = [
  'Mon-Fri', 
  'Sat-Sun'];

const BusinessHours = () => {
  return (
    <div className="flex flex-col border-y-8 border-y-olive">
      <div className="font-bold italic">Business Hours</div>
      {daysOfWeek.map((day) => (
        <div key={day} className="py-2 px-4">
          <div className="text-center">{day}</div>
          <div className="text-center">
            {/* Conditional Chain Below using Ternary Operator to specify weekend hours  */}
            {day === 'Sat-Sun' ? '12 p.m.-5 p.m.' : '10 a.m.-7 p.m.'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusinessHours;