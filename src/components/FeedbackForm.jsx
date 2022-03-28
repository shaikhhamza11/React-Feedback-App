import { Card, Button, Rating } from './componentExport';
import { useState, useEffect } from 'react';
import { ACTIONS } from '../constant/Actions';
import { useFeedback } from '../context/feedback-context';
import { v4 as uuidv4 } from 'uuid';
const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisbled] = useState(true);
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(10);
  const { dispatch } = useFeedback();
  useEffect(() => {
    if (text === '' || text.length === 0) {
      setBtnDisbled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisbled(true);
      setMessage('Review should contain atleast 10 character');
    } else {
      setMessage(null);
      setBtnDisbled(false);
    }
  }, [text]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating,
      };
      dispatch({ type: ACTIONS.ADD_FEEDBACK, payload: { newFeedback } });
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <Rating select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled} version='primary'>
            Submit
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
