import {
  Header,
  FeedbackList,
  FeedbackStats,
  FeedbackForm,
  Footer,
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
      <Footer />
    </div>
  );
};

export default App;
