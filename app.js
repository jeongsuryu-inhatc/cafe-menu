const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const categories = [
  {
    id: 'coffee',
    label: 'Coffee',
    title: '커피',
    description: '매일 볶아낸 원두로 완성한 깊고 따뜻한 한 잔',
    items: [
      { name: '아메리카노', english: 'Americano', description: '깔끔한 산미와 고소한 여운의 시그니처 블렌드', price: 4500, image: '/images/americano.jpg', tag: 'Best' },
      { name: '카페 라떼', english: 'Café Latte', description: '부드러운 우유 거품과 에스프레소의 균형', price: 5200, image: '/images/latte.jpg' },
      { name: '바닐라 라떼', english: 'Vanilla Latte', description: '은은한 바닐라 향을 더한 달콤한 라떼', price: 5600, image: '/images/vanilla-latte.jpg' },
      { name: '카페 모카', english: 'Café Mocha', description: '진한 초콜릿과 에스프레소가 만난 풍성한 맛', price: 5800, image: '/images/mocha.jpg' },
      { name: '콜드 브루', english: 'Cold Brew', description: '차갑게 오래 추출해 부드럽고 선명한 풍미', price: 5300, image: '/images/cold-brew.jpg', tag: 'New' },
    ],
  },
  {
    id: 'tea',
    label: 'Tea',
    title: '티',
    description: '느긋한 순간을 위한 향긋하고 편안한 티 컬렉션',
    items: [
      { name: '얼그레이 티', english: 'Earl Grey Tea', description: '베르가못 향이 매력적인 클래식 홍차', price: 4800, image: '/images/earl-grey.jpg' },
      { name: '캐모마일 티', english: 'Chamomile Tea', description: '은은한 꽃 향과 함께 편안하게 즐기는 허브티', price: 4800, image: '/images/chamomile.jpg' },
      { name: '말차 라떼', english: 'Matcha Latte', description: '제주 말차의 쌉쌀함과 부드러운 우유의 조화', price: 5800, image: '/images/matcha.jpg', tag: 'Best' },
      { name: '복숭아 아이스티', english: 'Peach Iced Tea', description: '잘 익은 복숭아처럼 산뜻하고 달콤한 아이스티', price: 5000, image: '/images/peach-iced-tea.jpg' },
      { name: '유자 생강차', english: 'Yuzu Ginger Tea', description: '상큼한 유자와 알싸한 생강으로 따뜻하게', price: 5500, image: '/images/yuzu-tea.jpg' },
    ],
  },
  {
    id: 'dessert',
    label: 'Dessert',
    title: '디저트',
    description: '오늘의 커피와 가장 잘 어울리는 달콤한 한 조각',
    items: [
      { name: '바스크 치즈케이크', english: 'Basque Cheesecake', description: '겉은 진하고 속은 크리미한 구움 치즈케이크', price: 6800, image: '/images/cheesecake.jpg', tag: 'Best' },
      { name: '초콜릿 케이크', english: 'Chocolate Cake', description: '진한 카카오 풍미를 가득 담은 촉촉한 케이크', price: 6500, image: '/images/chocolate-cake.jpg' },
      { name: '버터 크루아상', english: 'Butter Croissant', description: '겹겹이 바삭하고 속은 담백한 프렌치 페이스트리', price: 4200, image: '/images/croissant.jpg' },
      { name: '딸기 타르트', english: 'Strawberry Tart', description: '상큼한 딸기와 고소한 크림의 산뜻한 타르트', price: 7200, image: '/images/strawberry-tart.jpg', tag: 'Seasonal' },
      { name: '시나몬 롤', english: 'Cinnamon Roll', description: '따뜻한 시나몬 향과 부드러운 아이싱의 조화', price: 5200, image: '/images/cinnamon-roll.jpg' },
    ],
  },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { categories });
});

const categoryViews = {
  coffee: 'coffiee',
  tea: 'tea',
  dessert: 'dessert',
};

Object.entries(categoryViews).forEach(([id, view]) => {
  app.get(`/${id}`, (req, res) => {
    const category = categories.find((item) => item.id === id);
    res.render(view, { category, categories });
  });
});

app.listen(PORT, () => {
  console.log(`Cafe menu is running at http://localhost:${PORT}`);
});
