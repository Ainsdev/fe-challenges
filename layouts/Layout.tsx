import Head from "next/head"
import NavBar from "../components/general/NavBar"

type props = {
    children: React.ReactNode
    title: string
    link:string
}

export const Layout: React.FC<props> = ({ children, title,link }) => {
    return (
        <>
            <Head>
                <title>{title || 'Challenges'}</title>
                <meta name="description" content="Challenges in Next or React" />
                <meta name="author" content="AinsDev" />
            </Head>
            <header>
                <NavBar title={title} link={link} />
            </header>
            <main style={{ padding: '100px 30px 30px 30px', display: 'flex',alignItems:'center', justifyContent: 'center',flexDirection:'column' }}>
                {children}
            </main>
        </>)
}