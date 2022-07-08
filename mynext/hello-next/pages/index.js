import Link from 'next/Link';

const Index = () => {
    return(
        <div>
            <Link href="/about">
                <a stype={{fontSize: 30, textDecoration:'none'}}>Hello Next!!!</a>
            </Link>
        </div>
    );
}

export default Index