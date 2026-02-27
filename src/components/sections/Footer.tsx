export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-500 py-12 border-t border-white/10">
      <div className="container px-4 mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} National Positions. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
