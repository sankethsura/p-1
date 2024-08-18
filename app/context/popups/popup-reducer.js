export const popupInitialState = {
  currentlyShow: null,
};

export default (state, action) => {
  switch (action.type) {
    //   case SHOW_JOB_CHANGE_CONFIRMATION: {
    //     return {
    //       currentlyShow: JOB_CHANGE_CONFIRMATION,
    //     };
    //   }

    case "SHOW_POPUP_1" || "SHOW_POPUP_2": {
      return {
        currentlyShow: "SHOW_POPUP_1",
      };
    }

    default:
      return popupInitialState;
  }
};
