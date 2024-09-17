export const validateForm = (formObject: { [key: string]: string }): boolean => {
    for (const key in formObject) {
        if (formObject[key].trim() === "") {
            return false;
        }
    }
    return true;
};