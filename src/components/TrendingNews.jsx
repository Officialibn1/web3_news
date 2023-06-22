import '../assets/styles/TrendingNews.css';
import Article from './Article';

const news = [
    {
        id: 1,
        number: '01',
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?',
        img: 'image-retro-pcs.jpg'
    },
    {
        id: 2,
        number: '02',
        title: 'Top 10 Laptops of 2022',
        desc: 'Our best picks for various needs and budgets.',
        img: 'image-top-laptops.jpg'
    },
    {
        id: 3,
        number: '03',
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.',
        img: 'image-gaming-growth.jpg'
    },
]

const TrendingNews = () => {
    return (
        <div className='container'>
            <div className="trendingNews">
                {news.map(article => (
                    <Article key={article.id} article={article} />
                    ))}
            </div>
        </div>
    );
}

export default TrendingNews;
