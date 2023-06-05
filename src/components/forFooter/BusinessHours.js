
const daysOfWeek = [
  'Monday', 
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday', 
  'Saturday', 
  'Sunday'];

const BusinessHours = () => {
  return (
    <table className="border-collapse border border-gray-800">
      <thead>
        <tr className="bg-gray-800 text-white text-lg font-bold">
          <th colSpan="2">Business Hours</th>
        </tr>
        <tr className="bg-gray-400 text-gray-800">
          <th className="w-1/2 text-center">Day</th>
          <th className="w-1/2 text-center">Hours</th>
        </tr>
      </thead>
      <tbody>
        {daysOfWeek.map((day) => (
          <tr key={day} className="border border-gray-800">
            <td className="py-2 px-4 text-center">{day}</td>
            <td className="py-2 px-4 text-center">
              {/* Conditional Chain Below using Ternary Operator to specify weekend hours  */}
              {day === 'Sunday' ? '1 p.m.-6 p.m.' 
              : day === 'Saturday' ? '10 a.m.-5 p.m.' 
              : '11 a.m.-7 p.m.'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BusinessHours;