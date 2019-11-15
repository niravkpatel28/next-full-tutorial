//this is a higher order component that will contain a header and footer
//each page or route will have this layout. 
// this is simply created by using props.children mechanism where the 
// component can access the jsx within the start and ending tags using props.children

import Link from 'next/link';
import Head from 'next/head';
const Layout = props => {
    const linkStyle = {
      marginRight: 15
    };
  return (
    <>
      <Head>
        <title> NEXT js Sample App</title>
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a style={linkStyle}> Home </a>
          </Link>
          <span> {"     "}</span>
          <Link href="/aboutus">
            <a style={linkStyle}> About Us </a>
          </Link>
        </nav>
      </header>
      <hr />
      {props.children}
      <hr />
      <footer>
        <p> Some footer &copy; {new Date().getFullYear()} </p>
      </footer>
      <style jsx>{`
        //    add style that is locally scoped
      `}</style>
    </>
  );
};

export default Layout