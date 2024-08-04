import { useEffect } from "react";

const Even = () => {
    useEffect(()=>{
        // useEffect의 콜백함수에 return이 있는 경우는
        // 클린업, 정리함수라고 부름 (useEffect가 끝날 때 실햄됨, 즉 언마운트 시점)
        return () => {
            console.log("unmount"); // +1 해서 <Even /> 이 사라지는 시점에 호출
        };
    }, []);

    return <div>짝수</div>
};

export default Even