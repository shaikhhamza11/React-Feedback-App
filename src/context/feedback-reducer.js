export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'delete-feedback':
      const { id } = action.payload;
      return state.filter((feedback) => feedback.id !== id);
    case 'add-feedback':
      const { newFeedback } = action.payload;
      return [newFeedback, ...state];
    default:
      return state;
  }
};
