    <footer>
        <div class="footer">
            <div class="footer-col-1-2">
                <h4>Síguenos en:</h4>
                <div class="redes-sociales">
                    <a href="www.twitter.com/"><img src="images/twitter.svg"></a>
                    <a href="www.instagram.com/"><img src="images/instagram.svg"></a>
                    <a href="www.linkedin.com/"><img src="images/linkedin.svg"></a>
                    <a href="www.facebook.com"><img src="images/facebook.svg"></a>
                </div>
            </div>
            <div class="footer-col-3">
                <h4>Contacto</h4>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>Teléfono: 123 45 67 89</p>
                <i class="fa fa-at" aria-hidden="true"></i>
                <p>Correo: algo@epitco.com</p>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>Localización: C/... , 32, Cartagena</p>
            </div>
        </div>
        <hr>
        <div class="copy margen">
            <p><a href="#">Política de privacidad</a></p>
            <script type="text/javascript">
                update = new Date().getFullYear();
                document.write("EPIT CO Copyright &copy; " + update + " " + "All Rights Reserved.");
            </script>
        </div>
    </footer>


    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <!--MENU DROPDOWN-->
    <script type="text/javascript">
        $(document).ready(function() {
            $(".dropdown").click(function() {
                $(".dropdown-menu").slideToggle("fast");
            });
        });
    </script>
    <!--DETECTO EL SCROLL-->
    <script>
        $(window).scroll(function() {
            if ($("#navbar").offset().top > 10 && screen.width > 600) {
                $("#navbar").addClass("barra-scroll");
                $("#logo").addClass("lg-scroll");
            } else {
                $("#navbar").removeClass("barra-scroll");
                $("#logo").removeClass("lg-scroll");
            }
        });
    </script>
    <!--estos de abajo no borrar-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/menuResponsive.js"></script>
    </body>
</html>
