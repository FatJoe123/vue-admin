/*
 * 公用方法
 */
let Global = {
    storage: {
        get: function(key) {
            return localStorage.getItem(key);
        },
        set: function(key, value) {
            localStorage.setItem(key, value);
        },
        clear: function(key) {
            localStorage.removeItem(key);
        }
    }
}

export default Global
