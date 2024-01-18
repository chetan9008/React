import { CLEAR, REMOVE, RESET } from "./action";
import { person } from "../../vite-react-app/src/data";
let reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return { ...state, people: [] };
      break;
    case RESET:
      return { ...state, people: person };
      break;
    case REMOVE:
      let id = action.payload.id;
      return {
        ...state,
        people: state.people.filter((value) => value.id !== id),
      };
    default:
      // return state;
      throw new Error(`action type "${action}" doesn't match`);
  }
};

export default reducer;
