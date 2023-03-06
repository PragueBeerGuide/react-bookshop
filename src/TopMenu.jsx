import { useState } from "react"
import TopMenuLink from "./TopMenuLink"

export default function TopMenu({ currentItem, setPage, setTestValue }) {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    const linkClicked = (event) => {
        const link = event.target;
        const id = link.id;

        setPage(id);
    }

    return (
        <div className="top-menu">
            {
                open === false
                    ? (
                        ''
                    )
                    : (
                        <nav className="top-menu__navigation">

                            <TopMenuLink
                                url=""
                                label="Home"
                                currentItem={ currentItem }
                                setPage={ setPage }
                                setTestValue={ setTestValue }
                            />

                            <TopMenuLink
                                url="about"
                                label="About us"
                                currentItem={ currentItem }
                                setPage={ setPage }
                                setTestValue={ setTestValue }
                            />

                            <TopMenuLink
                                url="contact"
                                label="Contact"
                                currentItem={ currentItem }
                                setPage={ setPage }
                                setTestValue={ setTestValue }
                            />

                            <a
                                className={ 'link' + (currentItem === 'books' ? ' link--highlighted' : '') }
                                href={ '#books' }
                                onClick={ linkClicked }
                                id="books"
                            >
                                Books
                            </a>

                            <a
                                className={ 'link' + (currentItem === 'authors' ? ' link--highlighted' : '') }
                                href={ '#authors' }
                                onClick={ () => { setPage('authors') } }
                            >
                                Authors
                            </a>

                        </nav>
                    )
            }

            <div className="top-menu__burger" onClick={ toggleMenu }>
                <div></div>
                <div></div>
                <div></div>
            </div>


        </div>
    )

}