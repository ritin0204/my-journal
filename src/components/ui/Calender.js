import React, {useState} from 'react';


const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const setPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(),
        currentMonth.getMonth() - 1));
  };

  const setNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(),
        currentMonth.getMonth() + 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const generateCalender = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    const matrix = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if (i == 0 && j < firstDayOfMonth) {
          week.push(null);
        } else if (dayCounter > daysInMonth) {
          break;
        } else {
          week.push(new Date(year, month, dayCounter));
          dayCounter++;
        }
      }

      matrix.push(week);
    }

    return matrix;
  };

  const matrix = generateCalender();

  return (
    <div className='card calender-div'>
      <h2>Calender</h2>
      <div className='calender'>
        <div className='calender-action'>
          <button onClick={setPreviousMonth}>
            Previous
          </button>
          <h6>{currentMonth.toLocaleString('default',
              {month: 'long', year: 'numeric'})}</h6>
          <button onClick={setNextMonth}>Next</button>
        </div>
        <table>
          <thead>
            <tr>
              {weekDays.map((weekday) => (
                <th key={weekday}>{weekday}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              matrix.map((week, weekidx) => (
                <tr key={weekidx}>
                  {
                    week.map((date, idx) => (
                      date ?
                      <td key={date}
                        onClick={() => handleDateClick(date)}
                        className={
                          date &&
                          date.toDateString() === selectedDate.toDateString() ?
                          'selected' : ''}>
                        {date && date.getDate()}
                      </td> : <td key={(weekidx+1)*idx}></td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calender;
