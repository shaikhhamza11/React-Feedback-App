import { useState, useEffect } from 'react';
import { useFeedback } from '../context/feedback-context';

const Rating = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useFeedback();
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  useEffect(() => {
    if (feedbackEdit?.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  return (
    <ul className='rating'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => {
        return (
          <li key={num}>
            <input
              type='radio'
              id={num}
              value={num}
              name={num}
              onChange={handleChange}
              checked={selected === num}
            />
            <label htmlFor={num}>{num}</label>
          </li>
        );
      })}

      {/* <li>
        <input
          type='radio'
          name='num1'
          id='num1'
          value='1'
          onChange={handleChange}
        />
      </li> */}
    </ul>
  );
};

export default Rating;
