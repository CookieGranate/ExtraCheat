const Navbar = () => {
    return (
        <header>
            <nav id="navbar">
                <div id="left">
                    <ul>
                        <li><a href="/"><img src="https://cdn.discordapp.com/attachments/1061014027725197312/1061018351117291530/Screenshot-2023-01-06-212451-transformed-removebg-preview.png" alt=""  className="logoNavbar"/></a></li>
                        <li><a href="/">Extra Cheat</a></li>
                    </ul>
                </div>

                <div id="center">
                    <ul>
                        <li><a href="/">Extra Cheats</a></li>
                        <li><a href="/download">Download</a></li>
                        <li><a href="/discord">Discord</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar