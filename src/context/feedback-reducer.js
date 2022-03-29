import { v4 as uuidv4 } from 'uuid';

export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'delete-feedback':
      const { id } = action.payload;
      return state.filter((feedback) => feedback.id !== id);
    case 'add-feedback':
      const { newFeedback } = action.payload;
      newFeedback['id'] = uuidv4();
      return [newFeedback, ...state];
    case 'update-feedback':
      console.log(action.payload);
      const { updateId, updateItem } = action.payload;
      return state.map((feedback) =>
        feedback.id === updateId ? { ...feedback, ...updateItem } : feedback
      );
    default:
      return state;
  }
};
