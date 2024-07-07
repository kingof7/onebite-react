// const Button = (props) => { // 부모컴포넌트에서 자식컴포넌트로 내려준 값이 props
//     console.log(props);
//     return (
//         <button style={{color: props.color}}>
//             {props.text} - {props.color.toUpperCase()}
//         </button>
//     );
// };

// let {text, color} = props 객체 분해 할당에 의해
const Button = ({text, color, children}) => { // text, color에 구조분해 할당, children은 <Button> </Button> 내부 children
    return (
        <button style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",   // color값이 없을 때 props의 기본값
};

export default Button;