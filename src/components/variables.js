export default {
    title: "RSS Virtual Keyboard",
}
export const keyboard = {
    line_1: [
        {char: "\`", alt: "~", color: 'dark'},
        {char: "1", alt: "!", color: 'light'},
        {char: "2", alt: "@", color: 'light'},
        {char: "3", alt: "#", color: 'light'},
        {char: "4", alt: "$", color: 'light'},
        {char: "5", alt: "%", color: 'light'},
        {char: "6", alt: ":", color: 'light'},
        {char: "7", alt: "?", color: 'light'},
        {char: "8", alt: "*", color: 'light'},
        {char: "9", alt: "(", color: 'light'},
        {char: "0", alt: ")", color: 'light'},
        {char: "-", alt: "_", color: 'light'},
        {char: "=", alt: "+", color: 'light'},
        {char: "Backspace", color: 'dark'},
    ],
    line_2: [
        {char: "Tab", color: 'dark'},
        {char: 'Q', color: 'light', low:'q'},
        {char: 'W', color: 'light', low:'w'},
        {char: 'E', color: 'light', low:'e'},
        {char: 'R', color: 'light', low:'r'},
        {char: 'T', color: 'light', low:'t'},
        {char: 'Y', color: 'light', low:'y'},
        {char: 'U', color: 'light', low:'u'},
        {char: 'I', color: 'light', low:'i'},
        {char: 'O', color: 'light', low:'o'},
        {char: 'P', color: 'light', low:'p'},
        {char: '[', color: 'light', low:'{'},
        {char: ']', color: 'light', low:'}'},
        {char: '\\', alr: '/', color: 'light', low:'/'},
        {char: 'DEL', color: 'dark'},
    ],
} 