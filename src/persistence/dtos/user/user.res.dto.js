export default class UserResDTO {
    constructor(user) {
        this.nombre = user.first_name;
        this.email = user.email;
        this.role = user.role;
    }
};