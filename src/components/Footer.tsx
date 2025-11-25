import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">StayMate</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              致力于为民宿房东提供最专业的一站式管理解决方案，让您的民宿生意更轻松、更高效。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">产品</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">多平台同步</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">智能消息</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">财务报表</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">保洁管理</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">移动端 App</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">资源</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">房东指南</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API 文档</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">社区论坛</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">成功案例</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">公司</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">关于我们要</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">招贤纳士</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 StayMate Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            系统运行正常
          </div>
        </div>
      </div>
    </footer>
  );
};