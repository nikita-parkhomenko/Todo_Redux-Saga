class Validation {
    static isValidName(string, options) {
        if (string === undefined) {
            return false;
        }
        const { minL = 3, maxL = 15, noSpaces = true } = options;
        if (noSpaces) {
            const stringNoSpaces = string.trim();

            if (!stringNoSpaces) {
                return false;
            }

            return !(stringNoSpaces.length < minL || stringNoSpaces.length > maxL);
         }
        return !(string.length < minL || string.length > maxL);
    }

    static isValidEmail(string, options) {
        if (string === undefined) {
            return false;
        }
        const { minL = 10, maxL = 25 } = options;
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const mail = string.trim();
        if (mail.length < minL || mail.length > maxL) {
            return false;
        }
        if (!string.match(mailFormat)) {
            return false;
        }

        return true;
    }
}

export default Validation;
