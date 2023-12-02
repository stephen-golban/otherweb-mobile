export const rxEmail = new RegExp('^[a-zA-Z0-9]+([%\\^&\\-\\=\\+\\,\\.]?[a-zA-Z0-9]+)@[a-zA-Z]+([\\.]?[a-zA-Z]+)*(\\.[a-zA-Z]{2,3})+$');

export const rxPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;

export const rxNumber = /[^\d]+/g;
