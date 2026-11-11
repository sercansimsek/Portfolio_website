export default function Footer() {
  return (
    <div className="container footer-wrap">
      <footer className="footer">
        <span>© {new Date().getFullYear()} [Your Name]. All rights reserved.</span>
        <span style={{ fontFamily: 'var(--font-mono)' }}>Designed &amp; built by me</span>
      </footer>
    </div>
  )
}
