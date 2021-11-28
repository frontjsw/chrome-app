const quotes = [
    {
        quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "우리는 매력적이고, 참신하고, 자발적으로 태어나며 사회에 참여할 수 있을 때까지 교양을 갖추어야 한다.",
        author: "주디스 마틴",
    },
    {
        quote: "오래 살기를 바라기 보다 잘 살기를 바라라.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "인생은 외국어이다. 모든 사람이 그것을 잘못 발음한다.",
        author: "크리스토퍼 몰리",
    },
    {
        quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
        author: "제임스 딘",
    },
    {
        quote: "젊은 날의 의무는 부패에 맞서는 것이다.",
        author: "커트 코베인",
    },
    {
        quote: "인생에는 서두르는 것 말고도 더 많은 것이 있다.",
        author: "마하트마 간디",
    },
    {
        quote: "반성하지 않는 삶은 살 가치가 없다.",
        author: "소크라테스",
    },
    {
        quote: "삶은 즐겁다. 죽음은 평화롭다. 골칫거리는 바로 그 중간과정이다.",
        author: "아이작 아시모프",
    },
    {
        quote: "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
        author: "공자",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
