const passwordBox = document.getElementById("password");
const length = 12;

const chars = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()[]{};:,.></+-_="
];

function generatePassword() {
    let password = chars.map(set => set[Math.floor(Math.random() * set.length)]).join('');

    while (password.length < length) {
        const randomSet = chars[Math.floor(Math.random() * chars.length)];
        password += randomSet[Math.floor(Math.random() * randomSet.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

