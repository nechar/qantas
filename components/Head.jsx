import NextHead from 'next/head';

const Head = () => (
    <NextHead>
        <title>Qantas</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Bootstrap CDN */}
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />

    </NextHead>
)

export default Head
