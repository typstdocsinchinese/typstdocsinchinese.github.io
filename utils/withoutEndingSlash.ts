export default function (str: string) {
    return str.endsWith('/') ? str.substring(0, str.length - 1) : str;
}