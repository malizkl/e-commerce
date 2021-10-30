import Link from "next/link"

export default function Header(){
    return(

        <header className=" py-2">

            <nav>
                <div className="flex items-start justify-items-start justify-start">
                    <img className="w-48 ml-20" src="https://cdn.shopify.com/s/files/1/2217/8211/files/Logo-01_02667e0b-45d4-4614-bd18-8785f9c5be7d_360x.jpg?v=1589395319" alt=" "/>
                </div>
            </nav>


            <p className=" flex items-center justify-items-center justify-center py-2 ">
                Worldwide Shipping نوصل لجميع دول الخليج
            </p>


            <nav className=" flex items-center justify-items-center justify-center space-x-4 ">


                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>

                <Link href="/blog">
                    <a>
                        Products
                    </a>

                </Link>

                <Link href="/photos">
                    <a>
                        Our Story
                    </a>
                </Link>

                <Link href="/bookmarks">
                    <a>
                        Contact
                    </a>
                </Link>
            </nav>
        </header>
    )
}