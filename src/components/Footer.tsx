export default function Footer() {
    return (
        <div className="h-[32vh] flex flex-wrap justify-evenly items-center bg-slate-800">
            <div className="flex items-center md:text-5xl text-white">
                <img loading='lazy' src="logo.svg"/>
                <div className="mx-[2vw] user-select-none">
                    NUMPIE Corp.
                </div>
            </div>

            <footer className="flex items-center justify-center text-sm  text-white">
                <div>
                    서울특별시 강남구 미래로 1402 <br/>
                    사업자 번호 : 105615-52651 상호: PIEPAY, 대표: 김유빈<br/>
                    고객센터:1544-0634 팩스:0505-200-6060 이메일:mirae@mirae.co.kr 
                    <br/>ⓒ NUMPIE All rights reserved.
                </div>
            </footer>
        </div>
    );
}
