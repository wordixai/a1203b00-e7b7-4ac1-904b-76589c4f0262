import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">StayMate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">功能</a>
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">解决方案</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">价格</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">客户评价</a>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">登录</Button>
              <Button>免费试用</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              功能
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              解决方案
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              价格
            </a>
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full">登录</Button>
              <Button className="w-full">免费试用</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};