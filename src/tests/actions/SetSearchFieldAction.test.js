import { CHANGE_SEARCH_FIELD } from '../../constants'
import { setSearchField } from '../../actions/SetSearchFieldAction'

describe('Set search field', function () {
    it('should set the search field according to text input', function () {
        const text = 'test';
        expect(setSearchField(text)).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: text
        })
    });
});