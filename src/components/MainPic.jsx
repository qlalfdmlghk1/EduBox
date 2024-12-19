import { useState, useEffect } from "react";

/*
전체 흐름 요약
    1. 컴포넌트가 마운트되면 useEffect가 실행되어 setInterval이 시작됩니다.
    2. 3초마다 setCurrentImage가 호출되어 인덱스가 하나씩 증가하며 이미지가 바뀝니다.
    3. 배열 끝까지 가면 인덱스는 다시 0으로 돌아갑니다.
    4. 컴포넌트가 언마운트되거나 images.length가 변경되면 타이머가 정리됩니다.
*/

const MainPic = () => {
  // 이미지 배열
  const images = [
    "src/assets/MainPic1.png",
    "src/assets/MainPic2.png",
    "src/assets/MainPic3.png",
    "src/assets/MainPic4.png",
    "src/assets/MainPic5.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  // currentImage : 현재 보여줄 이미지의 인덱스를 저장하는 상태 (초기값 : 0)
  // setCurrentImage: 상태를 업데이트하는 함수

  useEffect(() => {
    // setInterval : 3초마다 이미지 인덱스를 변경
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    // clearInterval(interval) : 포넌트가 언마운트되거나 useEffect가 다시 실행될 때 setInterval 타이머를 정리
    return () => clearInterval(interval);
  }, [images.length]); // images.length가 변경될 때만 useEffect가 실행

  return (
    <div className="mt-5 w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide {prevImage}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* 네비게이션 */}
      <div className="h-20 w-full flex justify-center items-center gap-6 ">
        <div className="h-10 flex justify-between items-center gap-6 bg-gray-500 text-white px-6 py-1 rounded-full font-medium">
          {currentImage + 1}/{images.length}
          <div>
            {/* 좌측 화살표 */}
            <button
              className="bg-gray-500 text-white hover:text-gray-800 px-1"
              onClick={() =>
                setCurrentImage((prevImage) =>
                  prevImage === 0 ? images.length - 1 : prevImage - 1
                )
              }
            >
              &lt;
            </button>
            {/* 일시정지 버튼 */}
            <button className="bg-gray-500 text-white hover:text-gray-800 px-1">
              &#10074;&#10074;
            </button>
            {/* 우측 화살표 */}
            <button
              className="bg-gray-500 text-white hover:text-gray-800"
              onClick={() =>
                setCurrentImage((prevImage) =>
                  prevImage === images.length - 1 ? 0 : prevImage + 1
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>

        {/* 세로 구분선 */}
        <div className="h-10 w-px bg-gray-300"></div>

        {/* 메뉴 버튼들 */}
        <div className="h-10 flex gap-2">
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            AI 커리어 스쿨
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            정보처리기사 실기
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            기술 블로그
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            코테 합격
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            AI로 개발하기
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            퀴즈이벤트
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            Top 50 👑
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-50 hover:border-orange-500 hover:text-orange-500 ">
            로드맵 🌱
          </button>
          {/* 드롭다운 버튼 */}
          <button className="text-gray-600 hover:text-gray-800">&#9660;</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default MainPic;
