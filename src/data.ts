/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RawQuizItem, QuizQuestion, CategoryInfo } from './types';

export const categoriesList: CategoryInfo[] = [
  { id: '국기', name: '🏳️ 국기', icon: '🏳️', description: '세계 여러 나라의 아름다운 국기를 맞혀보아요!' },
  { id: '음식', name: '🍜 음식', icon: '🍜', description: '세계 여러 나라의 맛있는 대표 음식을 알아보아요!' },
  { id: '문화유산', name: '🏛️ 문화유산', icon: '🏛️', description: '세계 여러 나라의 역사 깊은 문화유산을 떠나보아요!' },
  { id: '전통의상', name: '👘 전통의상', icon: '👘', description: '세계 여러 나라의 멋지고 아름다운 전통의상을 입어보아요!' },
  { id: '축제', name: '🎉 축제', icon: '🎉', description: '세계 여러 나라의 신나는 축제를 함께 즐겨보아요!' },
  { id: '집', name: '🏠 집', icon: '🏠', description: '세계 여러 나라의 독특하고 다양한 전통 집을 살펴보아요!' },
  { id: '인사말', name: '👋 인사말', icon: '👋', description: '세계 여러 나라의 다정하고 반가운 인사말을 배워보아요!' },
  { id: '종합', name: '🌐 종합', icon: '🌐', description: '국기, 음식, 문화유산, 의상, 집, 인사말을 모아서 정복해요!' }
];

export const rawDb: Record<string, RawQuizItem[]> = {
  국기: [
    { country: '한국', iso: 'kr', emoji: '🇰🇷', valueName: '태극기', features: '태극 문양, 빨강/파랑/흰색', explanation: '우리나라 국기 이름은 태극기예요! 가운데 태극 문양이 있고, 네 모서리에 검은색 괘가 그려져 있어요.' },
    { country: '일본', iso: 'jp', emoji: '🇯🇵', valueName: '일장기', features: '흰 바탕에 빨간 원', explanation: '일본의 국기는 흰색 바탕 중심에 빨간색 동그라미가 그려져 있어요. 떠오르는 태양을 나타낸대요.' },
    { country: '미국', iso: 'us', emoji: '🇺🇸', valueName: '성조기', features: '별과 줄무늬, 빨강/흰/파랑', explanation: '미국의 성조기에는 파란색 네모 안에 하얀 별이 가득하고, 빨간색과 흰색 줄무늬가 그려져 있어요.' },
    { country: '프랑스', iso: 'fr', emoji: '🇫🇷', valueName: '삼색기', features: '파랑/흰/빨강 세로 3색', explanation: '프랑스의 국기는 파랑, 흰색, 빨강 세 가지 색상으로 되어 있어 삼색기라고 불러요. 자유, 평등, 박애를 지칭해요.' },
    { country: '영국', iso: 'gb', emoji: '🇬🇧', valueName: '유니언 잭', features: '빨간 십자가와 대각선, 파랑 배경', explanation: '영국의 유니언 잭은 잉글랜드, 스코틀랜드, 아일랜드의 십자가 무늬를 겹쳐서 완성한 멋진 국기예요.' },
    { country: '이탈리아', iso: 'it', emoji: '🇮🇹', valueName: '이탈리아 국기', features: '초록/흰/빨강 세로 3색', explanation: '이탈리아의 국기는 왼쪽부터 초록, 하양, 빨강 세 개의 세로 줄무늬로 기쁨과 정의, 사랑을 의미해요.' },
    { country: '독일', iso: 'de', emoji: '🇩🇪', valueName: '독일 국기', features: '검정/빨강/노랑 가로 3색', explanation: '독일의 국기는 위에서부터 검정색 , 빨간색, 노란색 세 줄의 가로 모양이에요. 자유의 상징이에요.' },
    { country: '스페인', iso: 'es', emoji: '🇪🇸', valueName: '스페인 국기', features: '빨강/노랑/빨강 가로 3색', explanation: '스페인의 국기는 위아래가 빨간색이고, 가운데 넓은 노란색이 있어요. 노란색에는 멋진 문양도 그려져 있어요.' },
    { country: '브라질', iso: 'br', emoji: '🇧🇷', valueName: '브라질 국기', features: '초록 바탕에 노란 마름모, 파란 원', explanation: '브라질의 국기는 지구를 상징하는 파란 구체 위에 브라질의 푸른 하늘과 보석 같은 별들이 새겨져 있어요.' },
    { country: '캐나다', iso: 'ca', emoji: '🇨🇦', valueName: '캐나다 국기', features: '빨간 단풍잎', explanation: '캐나다의 국기는 흰색 바탕 중심에 캐나다를 상징하는 탐스러운 빨간 단풍잎이 예쁘게 들어있어요.' },
    { country: '호주', iso: 'au', emoji: '🇦🇺', valueName: '호주 국기', features: '파란 바탕에 영국 국기 + 별', explanation: '호주 국기는 파란색 바탕 왼쪽 위에 영국 국기가 있고, 그 외 다른 부분에는 별 모양들이 자리하고 있어요.' },
    { country: '중국', iso: 'cn', emoji: '🇨🇳', valueName: '오성홍기', features: '빨간 바탕에 노란 별', explanation: '중국의 오성홍기는 빨간색 전체 바탕 왼쪽 위에 큰 별 한 개와 작은 네 개의 하이라이트 노란 별이 떠 있어요.' },
    { country: '인도', iso: 'in', emoji: '🇮🇳', valueName: '삼색바퀴기', features: '주황/흰/초록 가로 3색 + 파란 바퀴', explanation: '인도의 국기는 위에서 아래로 주황, 흰색, 초록이며, 전설적인 파란색의 24살 바퀴 문양이 있어요.' },
    { country: '튀르키예', iso: 'tr', emoji: '🇹🇷', valueName: '월성기', features: '빨간 바탕에 흰 초승달과 별', explanation: '튀르키예 국기는 열정적이고 깨끗한 빨간 바탕 한복판에 하얀색 초승달과 빛나는 별이 있지요.' },
    { country: '스위스', iso: 'ch', emoji: '🇨🇭', valueName: '스위스 국기', features: '빨간 바탕에 흰 십자가', explanation: '스위스 국기는 아주 예쁘게 정사각형 모양이며, 빨간색 면 한가운데 하얀 십자가 기호가 있어요.' },
    { country: '그리스', iso: 'gr', emoji: '🇬🇷', valueName: '그리스 국기', features: '파랑/흰 줄무늬 + 십자가', explanation: '그리스 국기는 파란색과 하얀색 가로 무늬에, 왼쪽 위에 흰색 십자가가 있어요. 십자가는 종교의 수호를 의미해요.' },
    { country: '남아프리카공화국', iso: 'za', emoji: '🇿🇦', valueName: '남아공 국기', features: '6가지 색의 Y자 모양', explanation: '남아프리카공화국의 국기는 녹색이 Y자 모양으로 뻗어 있어, 여러 인종의 평화로운 통합을 가르쳐요.' },
    { country: '멕시코', iso: 'mx', emoji: '🇲🇽', valueName: '멕시코 국기', features: '초록/흰/빨강 + 독수리 문양', explanation: '멕시코 국기 한가운데의 흰 줄 위에는 독수리가 선인장 위에서 뱀을 집어삼키는 전설이 그려져 있어요.' },
    { country: '아르헨티나', iso: 'ar', emoji: '🇦🇷', valueName: '아르헨티나 국기', features: '파랑/흰/파랑 + 태양', explanation: '아르헨티나 국기는 푸른 하늘 같은 파란 가로줄 사이에 하얀 눈꽃, 가운뎃점에는 빛나는 태양이 자수되어 있어요.' },
    { country: '사우디아라비아', iso: 'sa', emoji: '🇸🇦', valueName: '사우디 국기', features: '초록 바탕에 흰 글씨와 칼', explanation: '사우디아라비아 국기는 평화로운 초록 바탕에 아랍어 글자, 그리고 그 아래에 힘 있는 흰색 칼 한 자루가 있어요.' }
  ],
  음식: [
    { country: '일본', emoji: '🍣', valueName: '스시', features: '스시, 라멘, 덴푸라', explanation: '일본의 스시는 새콤하고 간이 된 밥알 위에 신선하게 썰어낸 물고기를 조심스레 올려 먹는 맛난 음식이에요.' },
    { country: '이탈리아', emoji: '🍕', valueName: '피자', features: '피자, 파스타, 젤라토', explanation: '이탈리아는 동그란 도우에 토마토 소스와 고소하고 쫄깃한 치즈, 그리고 토핑을 듬뿍 얹어 구운 피자가 제일이에요!' },
    { country: '멕시코', emoji: '🌮', valueName: '타코', features: '타코, 나초, 과카몰리', explanation: '멕시코의 타코는 옥수수로 바삭하게 구운 또르띠야 전병에 고기, 채소, 매콤한 소스를 싸서 한 입 가득 먹어요.' },
    { country: '미국', emoji: '🍔', valueName: '햄버거', features: '햄버거, 핫도그', explanation: '미국의 대표 음식 햄버거는 둥글고 부드러운 빵 사이에 두툼하게 구운 고기 패티와 야채를 든든하게 끼워 먹지요.' },
    { country: '인도', emoji: '🍛', valueName: '카레', features: '카레, 난, 삼바르', explanation: '인도는 천연 향신료를 풍성하게 사용해 만드는 매콤하고 뜨끈한 카레와 쫀득한 화덕에 기른 빵인 난이 최고예요.' },
    { country: '중국', emoji: '🥟', valueName: '딤섬', features: '딤섬, 페킹덕, 마파두부', explanation: '중국의 딤섬은 얇고 찰기 가득한 만두피 속에 고기와 조개, 신선한 완두 등의 속재료를 가득 품은 한입 만두요리예요.' },
    { country: '프랑스', emoji: '🥞', valueName: '크레페', features: '크레페, 바게트, 마카롱', explanation: '프랑스의 크레페는 밀가루를 얇게 부쳐서 그 안에 신선한 과일이나 달콤한 생크림, 시럽을 예쁘게 말아 먹는 간식이에요.' },
    { country: '태국', emoji: '🍜', valueName: '팟타이', features: '팟타이, 똠얌꿍', explanation: '태국의 팟타이는 쌀국수 면발에 달착지근한 소스를 치고 파, 아몬드 가루, 탱글탱글한 새우를 빠르게 볶은 국수랍니다.' },
    { country: '튀르키예', emoji: '🥙', valueName: '케밥', features: '케밥, 바클라바', explanation: '튀르키예의 케밥은 고기를 꼬챙이에 끼워 둥글게 야금야금 익혀서, 얇은 밀판 빵에 야채와 푸짐하게 감싸 먹죠.' },
    { country: '영국', emoji: '🐟', valueName: '피시앤칩스', features: '피시앤칩스, 스콘', explanation: '영국의 피시앤칩스는 바다에서 방금 건진 듯한 대구 생선을 아주 바삭하게 하이 튀겨내어, 감자튀김과 식초를 쳐 먹어요.' },
    { country: '스페인', emoji: '🥘', valueName: '파에야', features: '파에야, 츄로스', explanation: '스페인의 파에야는 넓고 얕은 프라이팬에 쌀과 여러 해산물, 야채를 넣고 노랗게 가미하여 끓이는 전골밥이에요.' },
    { country: '베트남', emoji: '🍜', valueName: '쌀국수(포)', features: '쌀국수(포), 반미', explanation: '베트남의 쌀국수는 부드러운 하얀 쌀 면에 맑고 따듯하며 깊게 우려낸 소고기 육수를 부은 부드러운 요리지요.' },
    { country: '독일', emoji: '🌭', valueName: '소시지', features: '소시지, 프레첼', explanation: '독일은 겉은 톡톡 튀고 육즙이 짭조름하게 가득한 최고급 수제 소시지가 있어, 독일인들이 매끼 다양하게 곁들여 먹어요.' },
    { country: '한국', emoji: '🍚', valueName: '비빔밥', features: '비빔밥, 김치찌개, 불고기', explanation: '우리나라의 비빔밥은 한 그릇 밥 위에 오색 찬란한 나물들과 담백한 불고기를 얹어 매콤한 고추장과 참기름을 비벼요!' },
    { country: '그리스', emoji: '🥙', valueName: '무사카', features: '무사카, 기로스', explanation: '그리스의 무사카는 감자, 가지, 다진 수육고기를 정렬하여 얹은 뒤 치즈 소스를 발라 먹는 부드러운 오븐 오양이에요.' },
    { country: '브라질', emoji: '🥩', valueName: '슈하스코', features: '슈하스코, 페이조아다', explanation: '브라질의 슈하스코는 커다란 소고기 덩어리를 쇠꼬챙이에 길게 꽂아서, 참숯불에 천천히 회전시켜 기름을 뺀 고기구이예요.' },
    { country: '러시아', emoji: '🥣', valueName: '보르시', features: '보르시, 펠메니', explanation: '러시아의 보르시는 빨간색 채소인 비트를 넣어 끓여서, 영롱한 붉은 색을 띠는 추운 지방의 따끈한 보양스프예요.' },
    { country: '모로코', emoji: '🍲', valueName: '쿠스쿠스', features: '쿠스쿠스, 타진', explanation: '모로코의 쿠스쿠스는 작고 고운 노란 밀가루 알갱이를 모락모락 쪄서, 그 위에 푹 삶은 야채요리를 올려 먹어요.' },
    { country: '인도네시아', emoji: '🍳', valueName: '나시고렝', features: '나시고렝, 사테', explanation: '인도네시아의 나시고렝은 매력적인 고추 양념 소스에 계란 프라이와 신선한 닭고기를 조화롭게 볶은 볶음밥이지요.' },
    { country: '페루', emoji: '🥗', valueName: '세비체', features: '세비체, 로모살타도', explanation: '페루의 세비체는 신선함 가득한 회에다가 상큼한 레몬즙이나 피망, 야채를 차갑게 절여서 기분 좋게 감도는 전채요리예요.' }
  ],
  문화유산: [
    { country: '프랑스', emoji: '🗼', valueName: '에펠탑', features: '프랑스 파리에 선 아주 높은 철탑', explanation: '에펠탑은 프랑스 파리 한가운데 세워져 있어요. 가벼운 쇳덩이들을 그물망처럼 엮어 우뚝 솟게 만든 파리의 보물이에요.' },
    { country: '중국', emoji: '🏯', valueName: '만리장성', features: '산과 들을 넘나드는 아주 긴 돌성벽', explanation: '만리장성은 옛날에 적들의 침입을 꿋꿋하게 이겨내기 위해 돌과 성벽을 아주 길게 이어 쌓은 신기한 거대 성벽성이에요.' },
    { country: '이집트', emoji: '🔺', valueName: '피라미드', features: '모래사막 속 삼각형 모양의 돌무덤', explanation: '피라미드는 옛날 이집트 왕인 파라오의 무덤이에요. 아주 무겁고 찬란한 돌들을 높게 깎아 올린 모래 속 불가사의예요.' },
    { country: '이탈리아', emoji: '🏟️', valueName: '콜로세움', features: '로마의 타원형 검투사 경기장', explanation: '콜로세움은 옛날 로마 사람들이 연극이나 검투사 경기를 보며 소리 높여 환호했던 둥글둥글한 로마 원형극장이에요.' },
    { country: '인도', emoji: '🕌', valueName: '타지마할', features: '눈부신 하얀색 대리석 궁전무덤', explanation: '타지마할은 흰색 대리석으로 성스럽게 완공된 정말 조화로운 묘지로, 물빛 호수에 하얗게 반사되는 모습이 멋져요.' },
    { country: '미국', emoji: '🗽', valueName: '자유의 여신상', features: '뉴욕 항구의 횃불 쥔 하늘색 누님 동상', explanation: '자유의 여신상은 미국 뉴욕 앞바다에 서 있으며, 한 손에는 빛나는 횃불을, 다른 손에는 독립과 법률 책을 지니고 있답니다.' },
    { country: '캄보디아', emoji: '🏛️', valueName: '앙코르와트', features: '초록 정글 속에 깊숙이 감춰진 옛 사원', explanation: '앙코르와트는 정글 안개 속에 조각되어 세워진 엄청난 크기의 아름답고 오래된 고대 힌두와 불교 사원의 성전이에요.' },
    { country: '페루', emoji: '⛰️', valueName: '마추픽추', features: '안데스 산 높은 구름 위에 숨겨진 잉카 성', explanation: '마추픽추는 아주 높은 바위 절벽 꼭대기에 감춰진 잉카 공중도시로, 하늘과 가까워 잃어버린 구름 속 유적이라 합니다.' },
    { country: '영국', emoji: '🕰️', valueName: '빅벤', features: '런던 국회의사당의 우람한 대형종 시계탑', explanation: '빅벤은 영국 런던 템스강 가에 서서 매일 아름다운 종소리를 웅장하게 울려 전 시간을 가르쳐주는 수려한 시계탑이에요.' },
    { country: '스페인', emoji: '⛪', valueName: '사그라다 파밀리아', features: '바르셀로나 성당, 가우디가 지은 성당', explanation: '스페인의 위대한 설계사 가우디가 기획했으며, 마치 옥수수가 솟아오른 듯 나무를 닮은 독특하고 환상적인 자연 성당이에요.' },
    { country: '그리스', emoji: '🏛️', valueName: '파르테논 신전', features: '높은 언덕 언저리 대리석 기둥 신전', explanation: '파르테논 신전은 지혜를 담당하는 아테나 여신께 경배하기 위해 하얀 대리석 기둥들을 줄지어 튼튼하게 잘 정렬한 신전이에요.' },
    { country: '러시아', emoji: '🏰', valueName: '크렘린궁', features: '모스크바 광장 소용돌이 지붕의 궁전', explanation: '크렘린궁은 빨간 벽돌로 둘러싸인 성벽 내에 여러 양파 모양처럼 귀엽고 알록달록한 지붕들이 웅장히 서 있어요.' },
    { country: '호주', emoji: '🎭', valueName: '오페라하우스', features: '시드니 바닷가 조개 모양 아름다운 극장', explanation: '오페라하우스는 탁 트인 바닷바람을 맞으며 조개껍데기 같은 하얀 지붕이 어우러져 음악과 오페라를 들려주는 현대 예술관이에요.' },
    { country: '일본', emoji: '🗻', valueName: '후지산', features: '일본의 우뚝 솟은 큰 상징, 하얀 눈 덮인 화산', explanation: '후지산은 매우 신령하고 아름다운 일본에서 가장 높은 화산으로, 머리맡에 항상 새하얀 하얀 눈 이불을 덮고 수줍게 서 있죠.' },
    { country: '브라질', emoji: '✝️', valueName: '구세주 예수상', features: '리우데자네이루 높은 언덕 팔을 뻗은 예수상', explanation: '리우데자네이루 코르코바두 언덕 가장 위에 우뚝 서서 온 도시민의 안식과 축복을 기원하며 날개를 펼친 거대한 석상이에요.' },
    { country: '네덜란드', emoji: '⚙️', valueName: '풍차마을', features: '네덜란드 전통 바람을 맞는 날개 풍차', explanation: '네덜란드는 바다보다 땅이 낮아, 바람이 불어주는 일정한 바람 힘을 비축하여 물을 퍼내고 밀을 빻던 고색풍 풍차가 있어요.' },
    { country: '중국', emoji: '🏯', valueName: '천안문', features: '베이징 중심의 웅장한 아치형 아궁 대문', explanation: '천안문은 중국의 역사 한복판에 위엄 넘치는 붉은 담벼락이 성문 형태를 갖춘 베이징에서 제일 상징적인 아치 성문이에요.' },
    { country: '인도', emoji: '🕌', valueName: '후마윤 묘', features: '무굴 고딕풍 거대한 기둥식 정원무덤', explanation: '후마윤 묘는 분홍색 수려한 붉은 사암과 하얀 대리석을 써서, 거대한 장식 정원 한가운데에 왕의 소망을 담아 올렸지요.' },
    { country: '멕시코', emoji: '🏛️', valueName: '치첸이트사', features: '마야 문명이 지은 거대 계단식 석조 성전', explanation: '치첸이트사는 우거진 정림 뜰 한편에 거대한 돌계단을 피라미드 모습으로 쌓아, 태양과 뱀의 신비한 천문을 점친 곳이에요.' },
    { country: '이탈리아', emoji: '🏗️', valueName: '피사의 사탑', features: '신기하게 쓰러지듯 옆으로 기울어진 정원탑', explanation: '피사의 사탑은 지반이 기울어져 삐뚤게 기울어 가고 있는데도 넘어지지 않고 오랜 세월을 지탱하는 유명하고 경이로운 백탑이에요.' }
  ],
  전통의상: [
    { country: '한국', emoji: '👗', valueName: '한복', features: '저고리와 고운 빛깔 치마/바지', explanation: '우리나라 한복은 저고리와 풍성하게 내려앉은 한복 바지/한복치마가 참 아름다우며, 정월 보름날 등 잔칫날에 입는 자랑스러운 옷입니다.' },
    { country: '일본', emoji: '🥻', valueName: '기모노', features: '화려한 소매와 허리에 감는 넓은 천 띠', explanation: '일본의 기모노는 긴 가오리 소매 형태의 의상으로, 옷이 흘러내리지 않게 등 쪽에 오비라는 띠를 화려하게 감싸 묵어요.' },
    { country: '중국', emoji: '👘', valueName: '치파오', features: '몸체에 딱 달라붙은 아치형 치마 원피스', explanation: '중국의 치파오는 깃이 목 윗부분으로 올라오고 옆자락이 탁 트인 원피스 같은 슬림 의상으로 장식 단추가 아름다워요.' },
    { country: '인도', emoji: '🥻', valueName: '사리', features: '기다란 한 줄의 천 장식을 몸에 두르는 여장', explanation: '인도의 사리는 자르지 않은 기나긴 원색의 이쁜 실크 보를 여러 번 몸판에 감아가며 한쪽 견장에 아름답게 걸치는 여성복이에요.' },
    { country: '스코틀랜드', emoji: '👗', valueName: '킬트', features: '남성들이 단정하게 두르는 체크무늬 주름치마', explanation: '스코틀랜드에서는 고유한 가문의 체크무늬 패턴을 자수해 넣은 주름 형태의 남성용 치마를 특별 행사 시 꼭 입어요.' },
    { country: '독일', emoji: '👗', valueName: '디른들', features: '가슴을 조이고 코르셋과 앞치마 장식 원피스', explanation: '독일 전통 의상 디른들은 소매가 불룩한 흰 저고리 위에 드레스 조끼와 귀여운 치프치프 앞치마를 걸치는 복식이에요.' },
    { country: '베트남', emoji: '👗', valueName: '아오자이', features: '몸매 선을 드러내며 얇게 흐르는 옆트임 실크복', explanation: '베트남의 아오자이는 긴 자락 한 깃을 늘어뜨린 상의와 그 안에 통이 넓고 편안한 바지를 결합해 바람에 곱게 날리는 옷이에요.' },
    { country: '인도네시아', emoji: '👘', valueName: '바틱', features: '초 칠을 하여 점밀하게 염색한 가치 높은 기성 문양', explanation: '바틱은 천 위에 도장이나 촛농으로 가공한 뒤 채색하여 기하학적인 기운을 촘촘히 문양 낸 고급 전통복 원단이에요.' },
    { country: '튀르키예', emoji: '👘', valueName: '카프탄', features: '길이가 복사뼈까지 풍성이 흘러내린 기품용 겉옷', explanation: '튀르키예의 카프탄은 무늬가 금실로 정교하게 장식되어 걸칠 수 있게 지은, 따뜻한 바람과 찬 공기로부터 보호해 주는 화려한 망토예요.' },
    { country: '멕시코', emoji: '🤠', valueName: '차로', features: '넓은 밀짚모자 에스쿠와 주름 바지 수트', explanation: '멕시코의 카우보이 악사들이 착용하는 멋진 수트 무늬로, 챙이 태양만큼 넓게 펼쳐진 모자와 바싹 장식된 자수 자켓이 특징이죠.' },
    { country: '그리스', emoji: '👗', valueName: '에프조나스', features: '남자 호위 군사들이 하얗게 펼쳐 입은 주름치마', explanation: '그리스 대통령 호위대 군인들이 정갈하게 차려입는 하얗고 흰 백개의 주름치마 패션으로, 발에는 방울 슈즈를 신어요.' },
    { country: '러시아', emoji: '👗', valueName: '사라판', features: '빨간색이나 푸른색의 풍성한 자수 멜빵 스커트', explanation: '러시아의 사라판은 수수하고 깔끔하며 멜빵끈이 달려 일하기 쉽고, 안에는 귀여운 하얀 셔츠를 받쳐 입는 점퍼 드레스예요.' },
    { country: '페루', emoji: '🧣', valueName: '폰초', features: '가운데 구멍에 목바치만 쏙 뺀 두꺼운 모포', explanation: '남미 페루는 기운이 차가운 고지대라, 두꺼운 울 천 중간 구멍에 목만 쏙 내어 망토차림으로 휘감는 복장인 폰초를 애용해요.' },
    { country: '모로코', emoji: '👘', valueName: '젤라바', features: '뾰족한 고깔 후드가 부착된 편안한 겉가운', explanation: '모로코의 젤라바는 모래바람과 햇빛을 막기 위해서 머리에 뾰족하고 귀여운 모자를 쓸 수 있게 만든 가벼운 통 원피스예요.' },
    { country: '태국', emoji: '👗', valueName: '수타이', features: '비단을 한쪽 어깨 위 사선으로 가로지른 실크 의상', explanation: '태국의 수타이는 한쪽 어깨뼈만 과감하게 드러내고 우아하게 기품내는 직조 비단 옷으로 태국의 잔치에 쓰여요.' },
    { country: '사우디아라비아', emoji: '🧥', valueName: '토브', features: '온몸을 하얗게 가려 일사를 차단해 주는 흰 통 옷', explanation: '사우디에서는 남자들이 뜨거운 사막 태양빛을 튕겨 내어 시원하고 발목까지 내려오는 통풍 잘되는 단색 백 셔츠 토브를 입어요.' },
    { country: '몽골', emoji: '🧥', valueName: '델', features: '추위를 타파하고 바람을 막는 두꺼운 긴 비단 야상 가운', explanation: '몽골의 델은 양가죽이나 소가죽 혹은 두툼한 비단으로 지어, 허리띠를 강하게 조이고 승마를 하기 좋게 단단히 제작한 옷이에요.' },
    { country: '아프리카', emoji: '🧣', valueName: '켄테', features: '밝고 활기 가득한 주황, 노란 바둑 무늬 직조천', explanation: '가나 등 서아프리카의 켄테는 다양한 오렌지 빛과 황금빛 무늬를 엮어서 몸에 영광스럽게 한쪽으로 늘어뜨리는 귀한 전통복이에요.' },
    { country: '스페인', emoji: '👗', valueName: '플라멩코 드레스', features: '물결무늬 프릴과 레이스가 달린 새빨간 긴 드레스', explanation: '정열의 나라 스페인의 전통의상은 빙글빙글 회전 춤판을 돌며 춤을 출 때 마다 겹겹의 치맛바람이 화사히 피어나는 붉은 드레스예요.' },
    { country: '스위스', emoji: '👗', valueName: '트라흐트', features: '알프스의 들꽃 자수로 뒤덮인 깔끔한 앞치마 드레스', explanation: '알프스 처녀들이 입는 귀엽고 수수한 셔츠 드레스 형태로, 허벅지 라인에는 수려한 기계자수 야생화가 장식된 앞치마가 있어요.' }
  ],
  축제: [
    { country: '브라질', emoji: '🎭', valueName: '리우 카니발', features: '화려한 삼바 음악과 춤의 최대 거리 퍼레이드', explanation: '브라질의 리우 카니발은 매년 2월 전 세계 춤꾼들이 화려한 깃털 무장을 하고 모여 삼바 춤 실력을 기르는 최대 음악제예요!' },
    { country: '독일', emoji: '🍺', valueName: '옥토버페스트', features: '전통 맥주와 고소한 소시지, 무동이 가득한 전통 가을마을 축제', explanation: '독일 뮌헨에서 피어나는 가을 한마당으로, 커다란 천막 마차에서 전통 빵 프레첼과 악사들의 전통 나팔 소리를 들으며 다 함께 웃어요.' },
    { country: '일본', emoji: '⛄', valueName: '삿포로 눈축제', features: '거대한 얼음성과 눈 조각전이 펼쳐지는 눈꽃나라 축제', explanation: '매 동지 2월 일본 삿포로에는 높디높은 빌딩만 한 눈 성곽이나 세계적인 캐릭터들을 얼음으로 입체 조각해 온 마을을 은빛 불빛으로 채워요.' },
    { country: '인도', emoji: '🪔', valueName: '디왈리', features: '빛의 등불을 골목 가득 채우며 집안의 평화를 비는 축제', explanation: '인도의 디왈리는 어둠을 쓸어버리고 행운과 지혜의 여신을 맞이하고자 집집이 흙으로 빚은 작고 따스한 램프와 빛줄기를 수놓는 명절이에요.' },
    { country: '중국', emoji: '🧨', valueName: '춘절', features: '붉은 용춤과 요란한 폭죽 소리로 악귀를 쫓는 음력 설', explanation: '중국 제일의 연중 축제로, 거리를 벌겋게 등불로 채우고 골목마다 대형 종이 여우용을 머리에이고 춤을 추며 폭죽 잔치를 해요.' },
    { country: '스페인', emoji: '🍅', valueName: '라 토마티나', features: '광장 전체가 빨갛게 변하도록 토마토를 투하해 던지는 축제', explanation: '매년 8월 스페인 뷰뇰 광장에서는 잘 익은 빨간 토마토를 잔뜩 적재해와서, 서로 웃으며 한 시간 동안 실컷 던지고 터뜨리는 축제예요.' },
    { country: '태국', emoji: '💦', valueName: '송크란', features: '길가는 서로에게 시원한 새해 축복의 물총과 바가지를 뿌리는 축제', explanation: '태국의 가장 뜨겁고 더운 계절에 다가오는 새해 첫날, 지난 불운을 씻어내라는 우호의 의미로 남녀노소 길에서 신나게 물세례 퍼포먼스를 행해요.' },
    { country: '아일랜드', emoji: '☘️', valueName: '성 패트릭의 날', features: '온 거리가 초록 모자와 세 잎 클로버 깃발로 뒤덮이는 사육제', explanation: '아일랜드에 복음을 심은 패트릭 성인을 공경하며, 모자도 클로버, 맥주도 초록, 옷도 연초록으로 차려입고 신비로운 백파이프를 불어요.' },
    { country: '이탈리아', emoji: '🎭', valueName: '베네치아 카니발', features: '귀족 가면과 우스꽝스러운 옛 고스 장식을 뽐내는 물의 축제', explanation: '수상 도시 이탈리아 베네치아에서, 정체를 가려 자유로움을 구가하던 하얀 귀족 가면을 수수께끼처럼 쓰고 곤돌라 배 위를 노니는 축제예요.' },
    { country: '멕시코', emoji: '💀', valueName: '망자의 날', features: '가족을 사랑하는 마음으로 해골 화장을 하고 먼저 간 이를 환 맞이하는 축제', explanation: '멕시코 사람들은 영혼들이 하루 동안 돌아온다고 믿어, 주황색 메리골드 꽃길을 깔고 온갖 맛난 설탕 해골 과자를 제단에 바쳐요.' },
    { country: '한국', emoji: '🏮', valueName: '연등회', features: '밤거리 가득 은은한 수제 종이 등불을 들고 행진하는 연꽃 등 축제', explanation: '천 년 넘게 이어온 우리나라 전통 문화이자 세계 문화유산으로, 연꽃이나 복주머니 등 다채로운 종이 등에 불을 밝혀 밤길을 아름답게 한답니다.' },
    { country: '미국', emoji: '🦃', valueName: '추수감사절', features: '온 가족이 둘러앉아 큰 구운 칠면조와 호박 파이를 나눠 먹는 보은 명절', explanation: '미국의 최대 명절 중 하나로, 한 해 농사와 가축 추수를 감사하는 풍성함을 나누며 먼 친척들이 한식탁에 옹기종기 안부를 모으는 가을이에요.' },
    { country: '영국', emoji: '🎆', valueName: '가이 포크스의 날', features: '모닥불을 활활 지피고 불꽃놀이를 뿜어 대며 노는 11월 축제', explanation: '매 가을 11월 5일 밤 영국인들은 짚으로 인형을 지어 태우고, 런던 밤하늘을 불꽃과 화약 쇼로 화려하게 피어 올려요.' },
    { country: '일본', emoji: '🌸', valueName: '하나미', features: '봄바람에 흩날리는 벚꽃 나무 밑에 돗자리를 펴는 소풍', explanation: '가족들과 이쁜 봄 도시락 코스를 준비해서, 온통 팝콘처럼 핀 분홍빛 벚나무 군락 아래에서 노래를 나누며 도란도란 봄과 조우해요.' },
    { country: '인도', emoji: '🌈', valueName: '홀리', features: '만나는 이들에게 형형색색 천연 색깔 소금가루를 비벼 축복하는 축제', explanation: '인도의 봄맞이 야외 카니발로, 사람들에게 분홍, 파랑, 노란 고운 색 가루를 뿌리고 서로 얼싸안으며 겨울이 가고 따뜻해진 날을 축하해요.' },
    { country: '스웨덴', emoji: '🌻', valueName: '미드소마르', features: '한여름 긴 낮을 찬미하며 자작나무 기둥에 꽃을 꽂고 춤추는 요정 축제', explanation: '북유럽 스웨덴의 가장 밝고 신비로운 하지 축제로, 머리에 들꽃 화관을 직접 기워 쓰고 큰 꽃기둥 주위를 돌개 춤추는 축제랍니다.' },
    { country: '벨기에', emoji: '🎵', valueName: '겐트 민속 축제', features: '중세풍 벽돌 골목마다 길거리 버스킹과 연극이 흐르는 예술 마당', explanation: '벨기에의 고가 도로와 중세 고성 터를 따라가며 수십 명의 악단들이 밤샘 기타 라이브를 제공하는 벨기에 최고의 여름 유원지예요.' },
    { country: '스코틀랜드', emoji: '🎭', valueName: '에든버러 프린지 축제', features: '전 세계의 배짱 있는 극단들이 자발적으로 길거리를 무대로 수놓는 공연 잔치', explanation: '스코틀랜드 성곽 아래 무대 신청도 없이 아무 데서나 마술, 팬터마임, 무용 등 세계 각지의 위트 있는 아이디어가 격돌하는 기상천외한 공연 축제예요.' },
    { country: '중국', emoji: '🐉', valueName: '용선제', features: '용 모양의 긴 나무 보트를 지어 북장단 소리에 맞춰 영치기 젓는 연례 경주', explanation: '중국의 단오로, 강가에 용머리 단장을 한 긴 노 보트를 여러 명이 함께 탑승하여 힘차게 노를 저으며 마을 우애를 꽁꽁 다져 나가요.' },
    { country: '프랑스', emoji: '🎆', valueName: '프랑스 혁명기념일', features: '웅장한 이집트 기둥 옆 군사 장비 축차와 밤 에펠탑 불꽃쇼', explanation: '7월 14일, 샹젤리제 거리에서 웅비하는 군악대 축제 대행렬과 동시에 파리의 에펠탑 중심에서 찬란한 오케스트라 스파크가 터지는 국경일이에요.' }
  ],
  집: [
    { country: '캐나다', emoji: '🏔️', valueName: '이글루', features: '눈과 얼음을 벽돌 모양으로 썰어서 둥글게 지은 에스키모 하우스', explanation: '이누이트 족이 사냥하러 멀리 떠났을 때 쓰는 눈 집이에요. 찬 모래바람을 차단해주어 안으로 촛불을 켜면 신기하게 뜻뜻해진답니다.' },
    { country: '몽골', emoji: '⛺', valueName: '게르', features: '천막과 통나무 지지대를 둥글게 원형 조합한 분해식 텐트 주택', explanation: '넓은 초원에서 양 떼와 말을 키우며 이사 다니는 유목민 가정을 위해, 한 시간 만에 지었다 허물 수 있게 제작된 든든한 텐트 집이에요.' },
    { country: '동남아시아', emoji: '🛖', valueName: '수상 가옥', features: '바다 또는 강 수면 밑 기둥을 박아 수중 위에 걸친 낚시 가옥', explanation: '땅 위는 너무 습하고 야생 독거미나 들뱀들이 기어 다녀서, 시원하게 흐르는 물 위의 공간에 나무다리를 높게 지탱시켜 세운 아름다운 집이에요.' },
    { country: '러시아', emoji: '🏡', valueName: '이즈바', features: '굵은 소나무 통나무를 정렬해 틈바구니에 이끼를 끼운 통나무집', explanation: '매서운 겨울바람을 막으려 튼튼하고 껍질이 두터운 통나무를 그대로 층층이 올리고 지붕은 비탈지게 눈이 흘러내리도록 만든 겨울 산장이에요.' },
    { country: '북아프리카', emoji: '🏜️', valueName: '건조 기후 흙집', features: '햇볕에 바싹 말린 진흙 벽돌과 밀짚을 섞어 창을 작게 낸 붉은 집', explanation: '나무가 부재한 따가운 햇빛 사막지대에 서 있으며 외벽을 아주 두툼하게 차단하여 낮에는 열기를 막고 해가 지면 잔열을 내뿜어 보온해요.' },
    { country: '서아프리카', emoji: '🛖', valueName: '원형 초가집', features: '동그란 가벼운 황토 흙 벽 지점에 야자수 풀벌레 가지 지붕을 올린 원형 움집', explanation: '동그랗고 부드러운 형태로 기와 대신 수수 풀 무리를 얹어, 폭우가 쏟아져도 빗방울이 사선으로 빠르게 미끄러져 가도록 귀엽게 설계한 주택이에요.' },
    { country: '일본', emoji: '🏯', valueName: '다다미 가옥', features: '통나무 목조 틀 안방에 왕골짚 깔개를 촘촘히 곁들여 수분 조절하는 집', explanation: '일본은 비오듯 엄청 습하기 때문에, 방바닥에 대나무나 골풀 짚을 돗자리 형태인 다다미로 엮어 방안의 습도를 가벼이 가라앉혀 줘요.' },
    { country: '튀르키예', emoji: '🪨', valueName: '동굴 집', features: '신기하리만큼 기이한 화산 바위 산을 안으로 굴삭해 파낸 바위 동굴집', explanation: '버섯 모양의 우뚝 선 기형 바위를 정과 망치로 정성스레 터널처럼 파내어, 사계절 기온차 없이 안정되게 평생을 숨여 지낸 은신처 가옥이에요.' },
    { country: '스페인', emoji: '🏛️', valueName: '파티오 주택', features: '하얗게 칠한 벽 중앙에 시원스러운 분수가 솟는 안뜰 정원 주택', explanation: '뜨겁고 타는 안달루시아 기후를 참으며, 중앙 정원 한가운데에 이쁜 인공 폭포나 수목을 심어 바람길을 유도한 지중해 백벽 주택이에요.' },
    { country: '베트남', emoji: '⛵', valueName: '수상 마을', features: '강가 물을 의지하여 뗏목 배 위에 통 집을 조립해 수면 위를 표류하는 집', explanation: '따로 흙이나 땅을 매입하지 않고, 물 위에 플라스틱이나 대나무 부표를 엮은 판 위에 식구의 보금자리를 마련해 바로 물고기 양식을 해요.' },
    { country: '스위스', emoji: '🏔️', valueName: '샬레', features: '가파른 폭설 압력을 이기고자 처마를 넓고 튼튼히 설계한 알프스 통나무집', explanation: '알프스의 푸른 초원 위에 자리 잡아 지붕 처마를 우산처럼 길게 빼놓아 낙하하는 고지대 고드름으로부터 벽면 손상을 방지했대요.' },
    { country: '미국 남서부', emoji: '🏜️', valueName: '어도비 가옥', features: '메사 산 아래 찰흙과 나뭇가지를 도자기처럼 매끄럽게 구워 쌓은 다단 아파트형 점토집', explanation: '인디언인 푸에블로 부족들이 가을 흙을 잘 이겨 성벽 계단처럼 지은 곳으로, 사다리를 타고 옥상으로 드나드는 전사들의 성채예요.' },
    { country: '북유럽', emoji: '🌲', valueName: '침엽수 통나무집', features: '울창한 숲속의 자작나무와 잣나무를 깎아서 자연의 내음과 정치를 살린 오두막', explanation: '겨울 기간이 무척 길고 숲이 무성하여 목재 구득이 쉬운 노르웨이 일대에서 친환경 대들보를 엮어 오랫동안 다 습을 막았답니다.' },
    { country: '인도네시아', emoji: '🏠', valueName: '루마 가당', features: '황소의 날카로운 뿔처럼 지붕 양 끝을 하늘로 치켜올린 화려한 가문집', explanation: '지붕 선이 물소의 날카로운 뿔이나 고대 유람용 목선을 꼭 빼닮았는데, 이는 부족의 탄생 설화와 위상을 주변에 알리기 위함이에요.' },
    { country: '말레이시아', emoji: '🏘️', valueName: '롱하우스', features: '한 부족 삼십 가구가 나란히 한집에 연결해 살아가는 기다란 복도식 대주택', explanation: '야생동물의 급습을 예방하고, 가문 구성원들이 밤마다 긴 복도에 모여서 수렵 전술과 바느질 대화를 두껍고 길게 공유하는 부족 공동 집이에요.' },
    { country: '남태평양', emoji: '🌴', valueName: '팔라파 오두막', features: '산뜻하고 시원하게 조개 모래사장 위 야자나무 잎사귀로 지붕을 덮어 그늘을 낸 해변가 쉘터', explanation: '뜨거운 태평양 섬나라들이 해풍을 가장 많이 환기하고 유입되도록 사방의 창과 문 벽을 투명하게 완전히 개방해 지은 휴양형 오두막이에요.' },
    { country: '중앙아시아', emoji: '⛺', valueName: '유르트', features: '가벼운 미루나무 살대를 우산살 모양 조립하여 두툼한 양모 펠트 천을 싸맨 텐트', explanation: '기온이 영하 사십도까지 요동치는 척박한 추위 초원을 비축하며 석탄 화로와 가죽 보온 벽을 이중 격리하여 사막유목에 적합한 기동형 천막이에요.' },
    { country: '이란', emoji: '🌬️', valueName: '바드기르 흙집', features: '뜨거워진 실내 열기를 굴뚝처럼 빨아내 올리는 바람 통풍 탑이 달린 사풍 점토집', explanation: '공기가 뜨겁고 메말라 자연 풍력을 안방 바닥 수로 통로로 끌어당긴 후 실내에선 선선한 바닷가 바람처럼 공조 해주는 친자연 냉방 과학 집이에요.' },
    { country: '그리스', emoji: '🏛️', valueName: '산토리니 흰색 돔 집', features: '눈부신 하얀 화산석 석회 가루를 칠하고 지붕은 동그란 파란 해양 빛 가미한 성채', explanation: '바닷가의 뜨거운 열 차단을 막기 위해 흰 소금 가루인 석회를 일 년에 한 번씩 벽에 칠함으로써, 지중해 마을을 명화처럼 영롱하게 꾸며놓았어요.' },
    { country: '아이슬란드', emoji: '🌿', valueName: '잔디 지붕 집', features: '찬 지표 단열 열기를 뺏기지 않으려 외풍 단열재로 지붕에 푸른 잔디 뗏장을 덮은 주택', explanation: '부족한 기와를 극복하고, 겨우내 불어닥치는 차디찬 북극 냉풍이 천장 목재 틈에 들러붙는 것을 두꺼운 뗏장 수풀들이 단열 이불이 되어 지켜줘요.' }
  ],
  인사말: [
    { country: '한국', emoji: '🇰🇷', valueName: '한국어', features: '안녕하세요', explanation: '우리나라 말로 평안하시기를 기원하며 "안녕하세요"하고 단정이 손을 모아 허리를 굽혀 고운 예의를 차려요! 🇰🇷' },
    { country: '미국', emoji: '🇺🇸', valueName: '영어', features: 'Hello [헬로]', explanation: '전 세계의 많은 사람이 소통할 때 두루 쓰는 국제 공용어 영어로 만났을 때 가볍고 정답게 "Hello" 하고 웃어요.' },
    { country: '프랑스', emoji: '🇫🇷', valueName: '프랑스어', features: 'Bonjour [봉주르]', explanation: '프랑스어로 만났을 때 건네는 인사로, 아침과 낮에 "좋은 날 되세요"라는 깊은 축복을 의미하는 정열적인 말이에요.' },
    { country: '스페인', emoji: '🇪🇸', valueName: '스페인어', features: 'Hola [올라]', explanation: '태양만큼 밝은 스페인어로 친구들이나 가족들을 오랜만에 만났을 때 신명 나게 "Hola!" 하고 포옹하는 인사의 전령사지요.' },
    { country: '이탈리아', emoji: '🇮🇹', valueName: '이탈리아어', features: 'Ciao [챠오]', explanation: '만날 때도 씨앗을 심듯 헤어질 때도 편하게 건네는 수수한 인사예요. "Ciao" 하고 친절히 속삭이는 소리예요.' },
    { country: '일본', emoji: '🇯🇵', valueName: '일본어', features: 'こんにちは [곤니치와]', explanation: '일본어로 해가 머리맡에 높이 뜨는 화창한 낮에, 마주 보는 사람을 향해 고개를 조아려 다정다감하게 인사하는 문구예요.' },
    { country: '중국', emoji: '🇨🇳', valueName: '중국어', features: '你好 [니하오]', explanation: '중국어로 "상대방이 무사하고 건강하기를 바랍니다" 라는 진심 어린 우애가 함축된 "니하오" 하고 건네는 인사말이에요.' },
    { country: '인도', emoji: '🇮🇳', valueName: '힌디어', features: 'Namaste [나마스테]', explanation: '인도 가을 햇빛 아래 가슴에 경건하게 두 손을 모아 가벼이 고개 내밀어 "나마스테" 라고 불러요. "네 안에 있는 영혼에 인사해요" 란 기품 마디예요.' },
    { country: '독일', emoji: '🇩🇪', valueName: '독일어', features: 'Guten Tag [구텐 탁]', explanation: '독일어로 "좋은 날을 가지세요!" 란 의미로, 정석적이고 엄밀한 소리와 함께 신뢰의 눈인사를 전하는 인사랍니다.' },
    { country: '러시아', emoji: '🇷🇺', valueName: '러시아어', features: 'Привет [프리빗]', explanation: '러시아어로 매우 친밀하고 허물없는 친구 조우 시 격정적 가녀린 "프리빗!" 하고 반가이 어깨를 마주하는 인사예요.' },
    { country: '태국', emoji: '🇹🇭', valueName: '태국어', features: 'สวัสดี [사와디]', explanation: '태국 가을날 불경의 은혜를 받잡고 모은 손끝을 코끝 쪽에 대어 고개 기물여 상냥하게 "사와디-캅/카~" 하고 존경을 보냅니다.' },
    { country: '베트남', emoji: '🇻🇳', valueName: '베트남어', features: 'Xin chào [씬 짜오]', explanation: '베트남의 하얀 원형 모자 아오를 쓸어내리며 친가족과 귀빈을 마주했을 때 성심껏 "씬 짜오" 라고 노래 타 듯 전해요.' },
    { country: '사우디아라비아', emoji: '🇸🇦', valueName: '아랍어', features: 'مرحبا [마르하바]', explanation: '사막의 척박한 무리 속에서 만난 유목인들에게 신의 가호가 가득하여 무용과 환대로 인도한다는 "마르하바" 라는 평화예요.' },
    { country: '튀르키예', emoji: '🇹🇷', valueName: '튀르키예어', features: 'Merhaba [메르하바]', explanation: '동서양 유럽 교차 중심의 튀르키예 대지에서 "당신을 따듯하게 환영하고 존중합니다" 의미를 실어 붉은 차이를 마시며 건네는 문구예요.' },
    { country: '그리스', emoji: '🇬🇷', valueName: '그리스어', features: 'Γεια σας [야사스]', explanation: '지중해 바다와 올리브를 사랑하는 나라 사람들에게 미덕 가득 부푼 목소리로 영생 건강을 바라는 기원담 "야사스!" 예요.' },
    { country: '포르투갈', emoji: '🇵🇹', valueName: '포르투갈어', features: 'Olá [올라]', explanation: '포르투갈 사람들의 일상 속 반가운 인사로, 항구에서 나부끼는 갈매기처럼 손을 마구 흔들며 기운차게 내는 화사한 기운이지요.' },
    { country: '스웨덴', emoji: '🇸🇪', valueName: '스웨덴어', features: 'Hej [헤이]', explanation: '북유럽 동화 요정 같은 스웨덴어로 하루 세끼 언제 건 편하고 짧디짧게 기쁨 가득 "헤이!" 하고 눈 가로 올리는 일상이에요.' },
    { country: '네덜란드', emoji: '🇳🇱', valueName: '네덜란드어', features: 'Hallo [할로]', explanation: '풍차와 튤립이 물결치는 아름다운 운하 길에서 산책길 상대를 정다이 스치며 가벼운 미소로 화답하는 보편적 인사예요.' },
    { country: '폴란드', emoji: '🇵🇱', valueName: '폴란드어', features: 'Cześć [체시치]', explanation: '폴란드 골목길에서 소중히 다가오는 지인을 얼싸안고 부드럽고 가녀리게 발음하기 좋은 기밀어린 인사 "체시치" 예요.' },
    { country: '인도네시아', emoji: '🇮🇩', valueName: '인도네시아어', features: 'Halo [할로]', explanation: '수만 명의 이웃 섬 주민들이 하나의 공통 대가족처럼 전 국민이 가벼이 손짓하여 친밀감을 마주하는 단아한 인사법안 "할로" 입니다.' }
  ]
};

// A helper to pick N random distinct items from an array
export function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// A helper to pick N random items with strictly distinct country names to prevent duplications in quiz options
export function getRandomItemsWithDistinctCountries<T extends { country: string }>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const selected: T[] = [];
  const seenCountries = new Set<string>();

  for (const item of shuffled) {
    if (!seenCountries.has(item.country)) {
      selected.push(item);
      seenCountries.add(item.country);
      if (selected.length === count) {
        break;
      }
    }
  }

  // Fallback if not enough distinct country items are found
  if (selected.length < count) {
    for (const item of shuffled) {
      if (!selected.includes(item)) {
        selected.push(item);
        if (selected.length === count) {
          break;
        }
      }
    }
  }

  return selected;
}

// Programmatically generate a complete, randomized list of exactly 20 quiz questions for a chosen category
// This satisfies visual requirements and fulfills pre-generated patterns cleanly without missing any facts.
export function compileQuizQuestionsForCategory(category: string): QuizQuestion[] {
  const items = rawDb[category] || [];
  if (items.length === 0) return [];

  const questions: QuizQuestion[] = [];

  // 1. Multiple Choice Questions (Generate 10 different ones)
  // We can generate up to 10 distinct MCQs using different items
  const mcqItems = getRandomItems(items, 10);
  mcqItems.forEach((targetItem) => {
    // Collect potential incorrect options from the same category - make them unique/distinct!
    const otherCountriesSet = new Set(
      items
        .filter((i) => i.country !== targetItem.country)
        .map((i) => i.country)
    );
    const otherCountries = Array.from(otherCountriesSet);
    const incorrectOptions = getRandomItems(otherCountries, 3);
    
    // Shuffle options
    const options = [targetItem.country, ...incorrectOptions].sort(() => 0.5 - Math.random());

    let questionText = '';
    let emojiToShow = targetItem.emoji;

    if (category === '국기') {
      questionText = `'${targetItem.country}'의 알맞은 국기는 어느 것일까요?`;
    } else if (category === '음식') {
      questionText = `'${targetItem.valueName}' ${targetItem.emoji}(은)는 어느 나라의 음식일까요?`;
    } else if (category === '문화유산') {
      questionText = `'${targetItem.valueName}' ${targetItem.emoji}(은)는 어느 나라의 대표적인 문화유산일까요?`;
    } else if (category === '전통의상') {
      questionText = `'${targetItem.valueName}' ${targetItem.emoji}(은)는 어느 나라의 아름다운 전통의상일까요?`;
    } else if (category === '축제') {
      questionText = `'${targetItem.valueName}' ${targetItem.emoji}(은)는 어느 나라의 유명한 전통 축제일까요?`;
    } else if (category === '집') {
      questionText = `'${targetItem.valueName}' ${targetItem.emoji}(은)는 어느 나라에서 주로 짓고 살았던 전통 집일까요?`;
    } else if (category === '인사말') {
      questionText = `'${targetItem.features}'(이)라는 반가운 인사말을 건네는 나라는 어디일까요?`;
    } else {
      questionText = `이 매력적인 문화 요소(${targetItem.valueName})를 마주할 수 있는 국가는 어디일까요?`;
    }

    questions.push({
      type: 'multiple',
      category,
      emoji: emojiToShow,
      question: questionText,
      options,
      answer: targetItem.country,
      explanation: targetItem.explanation,
      iso: category === '국기' ? targetItem.iso : undefined
    });
  });

  // 2. Matching Card Quizzes (Generate 5 different ones, each with 3 random pairs)
  // For each, we pick 3 random items and form cards
  for (let idx = 0; idx < 5; idx++) {
    const selectedPairs = getRandomItemsWithDistinctCountries(items, 3);
    const pairs = selectedPairs.map((item) => {
      if (category === '국기') {
        return {
          left: `${item.country}`,
          right: `${item.country}`, // Matches each other by country name
          leftEmoji: '', // No emoji on name card so user must match to visual card
          rightEmoji: item.emoji
        };
      } else if (category === '인사말') {
        return {
          left: `${item.country}`,
          right: `${item.features}`,
          leftEmoji: item.emoji,
          rightEmoji: '💬'
        };
      } else {
        return {
          left: `${item.country}`,
          right: `${item.valueName}`,
          leftEmoji: item.emoji,
          rightEmoji: item.emoji
        };
      }
    });

    questions.push({
      type: 'matching',
      category,
      title: category === '국기'
        ? `'국가 이름'과 알맞은 '국기 이미지' 짝꿍들(3쌍)을 찾아 카드를 터치해 뒤집어봐요! 🧠`
        : `'국가'와 맞물리는 알맞은 '문화 요소' 짝꿍들(3쌍)을 찾아 카드를 터치해 뒤집어봐요! 🧠`,
      pairs
    });
  }

  // 3. Line Connecting Quizzes (Generate 5 different ones, each with 4 random pairs)
  // For each, we pick 4 random items to match Left to Right
  for (let idx = 0; idx < 5; idx++) {
    const selectedPairs = getRandomItemsWithDistinctCountries(items, 4);
    
    const leftItems = selectedPairs.map(i => i.country);
    
    let rightItems: string[] = [];
    let answers: Record<string, string> = {};

    selectedPairs.forEach((i) => {
      let rightVal = '';
      if (category === '국기') {
        rightVal = i.country; // Match left country name to right country flag image
      } else if (category === '인사말') {
        rightVal = i.features; // The greeting expression
      } else {
        rightVal = i.valueName; // e.g. "스시", "에펠탑"
      }
      rightItems.push(rightVal);
      answers[i.country] = rightVal;
    });

    // Shuffle both lists separately
    const sLeft = [...leftItems].sort(() => 0.5 - Math.random());
    const sRight = [...rightItems].sort(() => 0.5 - Math.random());

    questions.push({
      type: 'connecting',
      category,
      title: `아래 알맞은 짝을 서로 터치해서 하나씩 선으로 연결하고 확인해 보세요! ✏️`,
      leftItems: sLeft,
      rightItems: sRight,
      answers
    });
  }

  // Shuffle the resulting 20 questions
  return getRandomItems(questions, 20);
}

// Compile complete question sheets for selected categories
// If '종합' is chosen, we pool items from all categories except '축제' (per user instructions: "축제는 별도 카테고리")
// and then select 5 randomized questions of different type.
export function generateQuizSession(selectedCategories: string[]): QuizQuestion[] {
  let combinedQuestions: QuizQuestion[] = [];
  
  // Rule: General Category (종합) combines Flags, Food, Heritage, Clothing, Houses, Greetings (exclude Festivals '축제' per prompt)
  const categoriesToProcess = selectedCategories.includes('종합')
    ? ['국기', '음식', '문화유산', '전통의상', '집', '인사말']
    : selectedCategories;

  categoriesToProcess.forEach((cat) => {
    const questionsForCat = compileQuizQuestionsForCategory(cat);
    combinedQuestions.push(...questionsForCat);
  });

  // Ensure randomized pick of 5 questions
  const randomizedAll = combinedQuestions.sort(() => 0.5 - Math.random());
  
  // Pick 5 questions. We must make sure that same type doesn't appear 3 times in a row sequentially.
  // We can write a simple layout sorter or fallback to picking 5 items that are highly varied.
  const picked: QuizQuestion[] = [];
  const pool = [...randomizedAll];

  while (picked.length < 5 && pool.length > 0) {
    const nextIdx = pool.findIndex((q) => {
      if (picked.length < 2) return true;
      const last = picked[picked.length - 1].type;
      const secondLast = picked[picked.length - 2].type;
      // Do not allow three of the same type in a row if possible
      return !(q.type === last && q.type === secondLast);
    });

    if (nextIdx !== -1) {
      picked.push(pool[nextIdx]);
      pool.splice(nextIdx, 1);
    } else {
      // If we cannot satisfy, just push whatever is left
      picked.push(pool[0]);
      pool.splice(0, 1);
    }
  }

  // Guarantee exactly 5 questions are returned (or as many as available)
  return picked.slice(0, 5);
}
