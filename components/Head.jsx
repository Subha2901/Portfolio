import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Subha Mahajan is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Subha Mahajan, subha, mahajan, web developer portfolio, subha web developer, subha developer, mern stack, Subha Mahajan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Subha Mahajan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Subha Mahajan',
};
