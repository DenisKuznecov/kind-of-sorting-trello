import * as types from './types'

export const addColumn = payload => {
  return {
      type: types.ADD_COLUMN,
      payload: payload
  }
}

export const deleteColumn = payload => {
    return {
        type: types.DELETE_COLUMN,
        payload: payload
    }
}

export const addCard = payload => {
    return {
        type: types.ADD_CARD,
        payload: payload
    }
}

export const deleteCard = payload => {
    return {
        type: types.DELETE_CARD,
        payload: payload
    }
}

export const getColumns = payload => {
    return {
        type: types.GET_COLUMNS,
        payload: payload
    }
}
