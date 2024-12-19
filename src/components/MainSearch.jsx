const MainSearch = () => {
  return (
    <div className="w-full mt-10 p-5">
      {/* 헤더 및 검색 바 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-8">
          인프런에서 연봉을 올리세요
        </h1>
        <div className="relative w-2/3 mx-auto">
          <input
            type="text"
            placeholder=" 배우고 싶은 지식을 입력해보세요."
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {/* right-3 : 부모의 오른쪽에서 12px 떨어진 위치에 배치 */}
            {/* top-1/2 : 상단 기준으로 50% 내려옴 */}
            {/* transform -translate-y-1/2 : 자기 높이의 절반만큼 위로 이동해 정확히 수직 가운데에 배치 */}
            🔍
          </button>
        </div>
      </div>

      {/* 카테고리 태그 */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {[
          { name: "국비지원교육", emoji: "🎓" },
          { name: "게임개발", emoji: "🕹️" },
          { name: "스프링", emoji: "🌱" },
          { name: "부트캠프", emoji: "🏠" },
          { name: "코딩테스트", emoji: "💻" },
          { name: "프론트엔드", emoji: "👨‍💻" },
          { name: "마케팅", emoji: "📈" },
          { name: "데이터", emoji: "🌐" },
          { name: "파이썬", emoji: "🐍" },
          { name: "ChatGPT", emoji: "💬" },
          { name: "보안", emoji: "🔒" },
        ].map((tag, index) => (
          <div
            key={index}
            className="flex items-center border px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <span>{tag.emoji}</span>
            <span className="ml-1">#{tag.name}</span>
          </div>
        ))}
        <button className="border rounded-full px-3 py-1 hover:bg-gray-100">
          ➡️
        </button>
      </div>

      {/* 무료 강의 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "PERSONAL GROWTH",
            subtitle: "셀프 성장법 이야기, Q&A 세션",
            bgColor: "bg-green-100",
          },
          {
            title: "Guide to Growth",
            subtitle: "디자이너 성장 가이드와 피그마 활용 꿀팁",
            bgColor: "bg-gray-800 text-white",
          },
          {
            title: "YouTube Shorts",
            subtitle: "폭발적인 조회수가 나오는 쇼츠",
            bgColor: "bg-green-100",
          },
          {
            title: "ChatGPT Codes",
            subtitle: "GPT에게 코딩을 맡기기 위한 코딩 강의",
            bgColor: "bg-orange-100",
          },
          {
            title: "How to Create Lecture?",
            subtitle: "강의 제작부터 홍보까지 완성하기",
            bgColor: "bg-green-500 text-white",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${card.bgColor}`}
          >
            <h2 className="text-lg font-bold mb-2">{card.title}</h2>
            <p className="text-sm">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSearch;
