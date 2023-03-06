import { useState } from "react"
import TopMenuLink from "./TopMenuLink"

export default function TopMenu({ currentItem }) {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
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
                            />

                            <TopMenuLink
                                url="about"
                                label="About us"
                                currentItem={ currentItem }
                            />

                            <TopMenuLink
                                url="contact"
                                label="Contact"
                                currentItem={ currentItem }
                            />

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