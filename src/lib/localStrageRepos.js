
function makeKey(langId) {
    return `langId-${langId}`;
}

export default {

    getItem(key) {
        localStorage.getItem(key);
    },

    setItem(key, value) {
        localStorage.setItem(key, value);
    },

    getUncheckedWords(langId) {
        const value = localStorage.getItem(makeKey(langId)) || '{}';
        return JSON.parse(value);
    },

    addUncheckedWord(langId, wordId) {
        const wordIdObjects = this.getUncheckedWords(langId);
        wordIdObjects[wordId] = true;
        localStorage.setItem(makeKey(langId), JSON.stringify(wordIdObjects));
    },

    deleteUncheckedWord(langId, wordId) {
        const wordIdObjects = this.getUncheckedWords(langId);
        delete wordIdObjects[wordId];
        localStorage.setItem(makeKey(langId), JSON.stringify(wordIdObjects));
    },

};
