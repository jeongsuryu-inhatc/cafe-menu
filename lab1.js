const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const coffiee_items = [
  { name: '아메리카노', english: 'Americano', description: '깔끔한 산미와 고소한 여운의 시그니처 블렌드', price: 4500, image: '/images/americano.jpg', tag: 'Best' },
  { name: '카페 라떼', english: 'Café Latte', description: '부드러운 우유 거품과 에스프레소의 균형', price: 5200, image: '/images/latte.jpg' },
  { name: '바닐라 라떼', english: 'Vanilla Latte', description: '은은한 바닐라 향을 더한 달콤한 라떼', price: 5600, image: '/images/vanilla-latte.jpg' },
  { name: '카페 모카', english: 'Café Mocha', description: '진한 초콜릿과 에스프레소가 만난 풍성한 맛', price: 5800, image: '/images/mocha.jpg' },
  { name: '콜드 브루', english: 'Cold Brew', description: '차갑게 오래 추출해 부드럽고 선명한 풍미', price: 5300, image: '/images/cold-brew.jpg', tag: 'New' },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('lab1', { coffiee_items });
});

app.listen(PORT, () => {
  console.log(`Lab 1 is running at http://localhost:${PORT}`);
});
