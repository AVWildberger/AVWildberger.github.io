function toggleLinks() {
    var links = document.getElementById("links");
    var text = document.getElementById("name");

    if (links.style.display == "block")
    {
        links.style.display = "none";
        text.style.display = "block";
    } 
    else
    {
        links.style.display = "block";

        if (screen.width < 2/3 * screen.height || screen.height > 3/2 * screen.width)
        {
            text.style.display = "none";
        }
    }
  }