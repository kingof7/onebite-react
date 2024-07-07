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
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e); // SyntheticBaseEvent = 합성 이벤트 객체 : 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
                        // -> 브라우저 마다 규격, 동작방식도 달라서(=크로스브라우징이슈) 합성 이벤트 객체가 생겨남
        console.log(`${text} - ${color}`);
    };
    return (
        <button
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",   // color값이 없을 때 props의 기본값
};

export default Button;