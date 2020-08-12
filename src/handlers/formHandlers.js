export const validator = (value, validation) => {
    if (!validation) {
        return false
    }
    if (validation.required) {
        if (!value || value === '') {
            return 'required'
        }
    }
    if (value && !!validation) {
        if (validation.login) {
            const reg = /^[\w_@.]+$/;
            if (!reg.test(value)) {
                return 'login'
            }
        }
        if (validation.password) {
            const reg = /^[\s\w!@#$%^&*()_+=|/<>,.:;\-?\\[\]{}~`'"№]+$/;
            if (!reg.test(value)) {
                return 'password'
            }
        }
    }

    return false
}