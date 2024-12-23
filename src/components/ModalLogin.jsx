import PropTypes from "prop-types"; // PropTypes 불러오기
const K_REST_API_KEY = import.meta.env.VITE_K_REST_API_KEY;
const K_REDIRECT_URI = `http://localhost:3000/oauth`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const ModalLogin = ({ onClose }) => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL; //kakaoURL로 이동
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      {/* fixed : 스크롤을 내려도 요소가 화면에 고정된 상태로 유지 */}
      {/* inset-0 : 상하좌우 모두 0으로 설정하여 요소가 화면 전체를 덮도록 만듦 */}
      {/* flex : 요소를 Flexbox 컨테이너로 설정 - 자식 요소를 정렬하고 배치할 수 있음 */}
      {/* bg-opacity-50 : 배경의 불투명도를 50%로 설정 */}
      {/* z-50 요소의 z-index 값을 50으로 설정 */}
      <div className="bg-white rounded-lg w-3/12 shadow-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-600 hover:text-gray-800"
        >
          &#x2715;
        </button>
        <div className="flex items-center justify-center">
          <img src="src/assets/Logo.png" className="h-12"></img>
          <img src="src/assets/EduBox.png" className="mx-0 my-5"></img>
        </div>
        <input
          type="email"
          placeholder="이메일"
          className="w-full border rounded p-2 mb-4 focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400"
        />
        <button className="w-full bg-orange-500 text-white mt-10 mb-4 py-2 rounded hover:bg-orange-600 ">
          로그인
        </button>
        <div className="flex justify-center text-gray-400 gap-4">
          <div>아이디(이메일) 찾기</div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div>비밀번호 찾기</div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div>회원가입</div>
        </div>
        <div className="flex justify-center items-center text-gray-400 mt-10">
          <hr className="w-1/3 border-gray-300 mr-4" />
          <div>간편 로그인</div>
          <hr className="w-1/3 border-gray-300 ml-4" />
        </div>

        <div className="flex items-center justify-center gap-5 mt-3">
          <button
            onClick={handleKakaoLogin}
            className="w-16 h-16 rounded-lg shadow-md hover:transition-all"
          >
            <img
              src="/src/assets/Kakao.png" // 카카오 로고 이미지 경로
              alt="Kakao Login"
              className="w-full h-full"
            />
          </button>
          <button
            onClick={handleKakaoLogin}
            className="w-16 h-16 rounded-lg bg-yellow-400  shadow-md hover:bg-yellow-500 transition-all"
          >
            <img
              src="/src/assets/Google.png" // 카카오 로고 이미지 경로
              alt="Kakao Login"
              className="w-full h-full"
            />
          </button>
          <button
            onClick={handleKakaoLogin}
            className="w-16 h-16 rounded-lg bg-yellow-400  shadow-md hover:bg-yellow-500 transition-all"
          >
            <img
              src="/src/assets/Kakao.png" // 카카오 로고 이미지 경로
              alt="Kakao Login"
              className="w-full h-full"
            />
          </button>
          <button
            onClick={handleKakaoLogin}
            className="w-16 h-16 rounded-lg bg-yellow-400  shadow-md hover:bg-yellow-500 transition-all"
          >
            <img
              src="/src/assets/Kakao.png" // 카카오 로고 이미지 경로
              alt="Kakao Login"
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

ModalLogin.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose prop이 필수 함수임을 명시
};

export default ModalLogin;
