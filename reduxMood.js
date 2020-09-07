const INITIAL_STATE = { mood: "(•‿•)" };

function moodReducer(state=INITIAL_STATE, action) {
  console.log("moodReducer ran", state, action);
  switch (action.type) {
    case "HAPPY":
      console.log("HAPPY condition met");
      return { ...state, mood: "(•‿•)"};

    case "SAD":
      console.log("SAD condition met");
      return { ...state, mood: "(ಥ﹏ಥ)"}

    case "ANGRY":
      console.log("ANGRY condition met");
      return { ...state, mood: "ノಠ_ಠノ"};

    case "CONFUSED":
      console.log("CONFUSED condition met");
      return { ...state, mood: "(⊙＿⊙)"};
    
    default:
      console.log("default condition");
      return state;
  }
}

const store = Redux.createStore(moodReducer);
