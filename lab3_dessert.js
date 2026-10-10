const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

const dessert_items = [
  { name: '바스크 치즈케이크', english: 'Basque Cheesecake', description: '겉은 진하고 속은 크리미한 구움 치즈케이크', price: 6800, image: '/images/cheesecake.jpg', tag: 'Best' },
  { name: '초콜릿 케이크', english: 'Chocolate Cake', description: '진한 카카오 풍미를 가득 담은 촉촉한 케이크', price: 6500, image: '/images/chocolate-cake.jpg' },
  { name: '버터 크루아상', english: 'Butter Croissant', description: '겹겹이 바삭하고 속은 담백한 프렌치 페이스트리', price: 4200, image: '/images/croissant.jpg' },
  { name: '딸기 타르트', english: 'Strawberry Tart', description: '상큼한 딸기와 고소한 크림의 산뜻한 타르트', price: 7200, image: '/images/strawberry-tart.jpg', tag: 'Seasonal' },
  { name: '시나몬 롤', english: 'Cinnamon Roll', description: '따뜻한 시나몬 향과 부드러운 아이싱의 조화', price: 5200, image: '/images/cinnamon-roll.jpg' },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('lab3_dessert', { dessert_items });
});

app.listen(PORT, () => {
  console.log(`Lab 3 Dessert is running at http://localhost:${PORT}`);
});
