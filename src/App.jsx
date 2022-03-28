import {
  Header,
  FeedbackList,
  FeedbackStats,
  FeedbackForm,
} from './components/componentExport';
const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </div>
  );
};

export default App;
