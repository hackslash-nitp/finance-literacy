// use Layout.js for every page rendered in pages folder, with having some props like ...title, keywords, description

import Head from 'next/head'

function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name = 'description' content = {description} />
                <meta name = 'keywords' content = {keywords} />
            </Head>

            <div>
                {children}
            </div>
        </div>
    )
}
Layout.defaultProps = {
    title : "Welcome to Fincoin",
    keywords : "Fincoin Finance Literacy Bitcoin Elon-Musk",
    description : "Fincoin is an app created for awareness of financial Literacy among people"
}
export default Layout
