import { CHANGE_SEARCH_FIELD } from '../constants'

let text;

export const setSearchField = (text) = ({
   type: CHANGE_SEARCH_FIELD,
   payload: text
});