// the data in under it mense input data
export const ValidateForm = (data, type) => {
    const error = {};

    //validate for User Name

    if (!data.email) {
        error.email = "لطفا ایمیل را وارد کنید";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "لطفا فرمت ایمیل را مثل آدم وارد کنید :)";
    } else {
        delete error.email;
    }
    //validate for passwrod
    if (!data.passwrod) {
        error.passwrod = "لطفا رمز خود را وارد کنید";
    } else if (data.passwrod.length < 5 || data.passwrod.length > 13) {
        error.passwrod = "رمز شما باید بیشتر از 5 و کمتر از 13 کارکتر باشد";
    } else {
        delete error.passwrod;
    }

    //validate for email
    // the under code for somethin that will understan wich on of these validate
    // will be work with spcifed type
    if (type === "login") {
        if (!data.userName) {
            error.userName = "لطفا نام کاربری را وارد کنید";
        } else if (data.userName.length < 6 || data.userName.length > 15) {
            error.userName =
                " نام کاربری باید بیشتر از 6 کارکتر و کمتر از 15 باشد !";
        } else {
            delete error.userName;
        }
        //validatea fro confirme Passwrod
    
        if (!data.confirmPasswrod) {
            error.confirmPasswrod = "لطفا رمز خود را دوباره وارد کنید";
        } else if (data.confirmPasswrod !== data.passwrod) {
            error.confirmPasswrod = "رمز شما با رمز اولیه مطابقت ندارد";
        } else {
            delete error.confirmPasswrod;
        }
        // validate for policy rouls
        if (data.accpetPolciy === false) {
            error.accpetPolciy = "داشم لطفا با قوانین ما موافقت کن !";
        } else {
            delete error.accpetPolciy;
        }
    }

    //get the error

    return error;
};

export default ValidateForm;
