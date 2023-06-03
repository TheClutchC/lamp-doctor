const BusinessHours = () => {
  return (
    <table className="table-auto border-4">
      <thead>
        <tr>
          <th className="border-2">Business Hours</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Day</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>11 a.m.-7 p.m.</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>11 a.m.-7 p.m.</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>11 a.m.-7 p.m.</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>11 a.m.-7 p.m.</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>11 a.m.-7 p.m.</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>10 a.m.-5 p.m.</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>12:30 p.m.-4 p.m.</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BusinessHours;