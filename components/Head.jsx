import NextHead from 'next/head';

const Head = () => (
    <NextHead>
        <title>Quantas</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Bootstrap CDN - version 4.2.1 */}
        <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />
    </NextHead>
)

export default Head
