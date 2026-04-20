import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="sm" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI Systems for businesses that move at machine speed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#services" className="hover:text-primary">Services</a></li>
                <li><a href="/#how" className="hover:text-primary">How It Works</a></li>
                <li><Link to="/real-estate-uk" className="hover:text-primary">Real Estate UK</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-primary">Get an audit</Link></li>
                <li><a href="mailto:hello@etchero.com" className="hover:text-primary">hello@etchero.com</a></li>
                <li><a href="mailto:etchero@outlook.com" className="hover:text-primary">etchero@outlook.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">GDPR</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 ETCHERO. All rights reserved.</p>
          <p className="font-mono">SYS://ETCHERO_v1 — operational</p>
        </div>
      </div>
    </footer>
  );
}
