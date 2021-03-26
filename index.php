<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Városok | Nádasy Bendegúz</title>
        <link rel="icon" href="varos.png" type="image/png" sizes="16x16">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>

        <script src="feldolgoz.js" type="text/javascript"></script>
        <link href="stilus.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <main>
            <header>
                <h1>Magyar városok</h1>
            </header>
            <article>
                <h3>Város keresése:</h3>
                <form>
                    <label>Kereső:</label>
                    <input type="text" id="kermezo">
                </form>
                <div id="tart"></div>
                <div id="mod">
                    <form class="formmod elrejt">
                        <fieldset>
                            <legend>Módosítás:</legend>
                            <label for="fid">ID</label><br>
                            <input type="text" id="fid" name="fid" readonly><br>
                            <label for="fnev">Városnév</label><br>
                            <input type="text" id="fnev" name="fnev"><br>
                            <label for="fjaras">Járás</label><br>
                            <input type="text" id="fjaras" name="fjaras"><br>
                            <label for="fmegye">Megye</label><br>
                            <input type="text" id="fmegye" name="fmegye"><br>
                            <br>
                            <input type="button" id="btnKesz" value="Kész" novalidate>
                            <input type="button" id="btnMegse" value="Mégse" novalidate>
                        </fieldset>
                    </form>
                </div>
                <div id="rend"></div>
            </article>
            <footer>
                <p>Készítette: Nádasy Bendegúz</p>
            </footer>
            <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </main>
    </body>
</html>
