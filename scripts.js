function toggleLinks()
{
    var links = document.getElementById("links");
    var text = document.getElementById("name");

    function animationEndHandler() {
        links.classList.remove("slide-out");
        text.style.display = "block";
        links.style.display = "none";

        links.removeEventListener("animationend", animationEndHandler);
    }

    if (links.style.display == "block") {
        links.addEventListener("animationend", animationEndHandler)

        links.classList.add("slide-out");
    }
    else
    {
        links.style.display = "block";
        links.classList.add("slide-in");

        if (screen.width < (2/3) * screen.height || screen.height > (3/2) * screen.width)
        {
            text.style.display = "none";
        }

        links.classList.remove("slide-out");
    }
}