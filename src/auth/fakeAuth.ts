
export interface UserData {
    username: string,
    password: string,
}

export default (formData: UserData) => {
    return new Promise((resolve : (username: string) => any, reject) => {
        setTimeout(() => {
            if (formData.username === 'Rohan' && formData.password === 'rohan123' ? true : false) {
                resolve(formData.username);
            } else {
                reject('Username and password is incorrect');
            }
        }, 1000);
    });
};