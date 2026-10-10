const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

const tea_items = [
  { name: '얼그레이 티', english: 'Earl Grey Tea', description: '베르가못 향이 매력적인 클래식 홍차', price: 4800, image: '/images/earl-grey.jpg' },
  { name: '캐모마일 티', english: 'Chamomile Tea', description: '은은한 꽃 향과 함께 편안하게 즐기는 허브티', price: 4800, image: '/images/chamomile.jpg' },
  { name: '말차 라떼', english: 'Matcha Latte', description: '제주 말차의 쌉쌀함과 부드러운 우유의 조화', price: 5800, image: '/images/matcha.jpg', tag: 'Best' },
  { name: '복숭아 아이스티', english: 'Peach Iced Tea', description: '잘 익은 복숭아처럼 산뜻하고 달콤한 아이스티', price: 5000, image: '/images/peach-iced-tea.jpg' },
  { name: '유자 생강차', english: 'Yuzu Ginger Tea', description: '상큼한 유자와 알싸한 생강으로 따뜻하게', price: 5500, image: '/images/yuzu-tea.jpg' },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('lab2_tea', { tea_items });
});

app.listen(PORT, () => {
  console.log(`Lab 2 Tea is running at http://localhost:${PORT}`);
});
