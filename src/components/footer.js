import "../styles/footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <p>
          EVNT <span>&copy;</span> all right reserverd{" "}
        </p>
        <nav className="nav-footer">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
