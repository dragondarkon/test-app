import {
  TODO_ONCHANGE,
  TODO_ADD,
} from '../constants/actionTypes';

export const initialState = {
  item: {
    value: '',
  },
  data: [],
};

export default (state = initialState, action) => {
  const {
    type,
    item,
  } = action;

  switch (type) {
    case TODO_ONCHANGE: {
      return Object.assign({}, state, {
        item,
      });
    }

    case TODO_ADD: {
      if (item.value === '') {
        return state;
      }

      return Object.assign({}, state, {
        item: {
          value: '',
        },
        data: [
          ...(state.data),
          item,
        ],
      });
    }

    default: {
      return state;
    }
  }
};
