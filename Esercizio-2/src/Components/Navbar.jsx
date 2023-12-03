import './Navbar.css'

export default function ({ logo, logoAlt, links }) {

    return (

        <nav>

            <figure>
                <a href="#"><img src={logo} alt={logoAlt} /></a>
            </figure>

            <menu>
                {links.map(({ name, url }) =>
                    <li key={name}>
                        <a href={url}>{name}</a>
                    </li>)}
            </menu>

        </nav>

    )

}