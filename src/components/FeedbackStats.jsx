import { useFeedback } from '../context/feedback-context';
const FeedbackStats = () => {
  const { feedbacks } = useFeedback();

  let average =
    feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length;
  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>
        Average Rating:
        {average ? average.toFixed(1).replace(/[.,]0$/, '') : 0}
      </h4>
    </div>
  );
};

export default FeedbackStats;
