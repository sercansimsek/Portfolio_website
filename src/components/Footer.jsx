export default function Footer() {
  return (
    <div className="container footer-wrap">
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Sercan Şimşek. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
