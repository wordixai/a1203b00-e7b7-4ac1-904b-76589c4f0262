import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="mx-2">🚀 全新 2.0 版本正式上线</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            让民宿管理<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">变得简单而优雅</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            一站式管理 Airbnb、Booking、美团等多平台房源。
            无论是日历同步、自动消息还是财务报表，StayMate 都能帮您轻松搞定。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/20">
              免费开始使用 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
              预约演示
            </Button>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <div className="rounded-xl border bg-background/50 backdrop-blur-sm p-2 shadow-2xl">
              <div className="rounded-lg border bg-background overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="App Dashboard" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  style={{ maxHeight: '600px', objectPosition: 'top' }}
                />
              </div>
            </div>
            {/* Floating Badges */}
            <div className="absolute -left-4 top-20 p-4 bg-background rounded-lg shadow-xl border hidden md:block animate-in fade-in slide-in-from-left duration-1000 delay-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-600 rounded-full">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground text-left">本月收入</p>
                  <p className="text-sm font-bold text-left">¥ 45,230</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-20 p-4 bg-background rounded-lg shadow-xl border hidden md:block animate-in fade-in slide-in-from-right duration-1000 delay-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-full">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground text-left">未读消息</p>
                  <p className="text-sm font-bold text-left">3 条来自房客</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">全方位赋能您的民宿业务</h2>
            <p className="text-lg text-muted-foreground">
              告别繁琐的手工操作，使用智能化工具提升运营效率，让您把更多时间花在为客人创造美好体验上。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title="多平台日历同步"
              description="实时同步 Airbnb、Booking 等所有主流 OTA 平台日历，彻底告别撞单烦恼。"
            />
            <FeatureCard 
              icon={<MessageSquare className="h-8 w-8 text-primary" />}
              title="智能自动消息"
              description="从预订确认到入住指南，自动发送个性化消息，提升回复率与住客体验。"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8 text-primary" />}
              title="收入财务报表"
              description="清晰直观的财务仪表盘，自动计算各渠道收入、清洁费及其他支出。"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-primary" />}
              title="保洁任务管理"
              description="自动生成保洁任务并通知保洁阿姨，实时监控房间清洁状态。"
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="智能门锁对接"
              description="无缝对接主流智能门锁，每一次订单自动生成临时密码，安全便捷。"
            />
            <FeatureCard 
              icon={<Smartphone className="h-8 w-8 text-primary" />}
              title="专属预订小程序"
              description="零佣金建立您的直销渠道，老客户复购更方便，利润最大化。"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
              <div className="text-primary-foreground/80">全球房东信赖</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">2M+</div>
              <div className="text-primary-foreground/80">管理的预订订单</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">35%</div>
              <div className="text-primary-foreground/80">平均收入提升</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">20h</div>
              <div className="text-primary-foreground/80">每周节省时间</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">听听房东们怎么说</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              content="使用 StayMate 之前，我每天要在各个平台切换回复消息，现在所有消息都在一个界面，效率提升了太多！"
              author="张小姐"
              role="莫干山民宿主理人"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
            />
            <TestimonialCard 
              content="以前经常遇到撞单的问题，不仅赔钱还影响心情。在这套系统的帮助下，我的所有房源状态都是实时最新的。"
              author="李先生"
              role="拥有 15 套城市民宿"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            />
            <TestimonialCard 
              content="财务报表功能非常强大，让我清楚知道每一笔收入和支出的去向，经营决策更有依据了。"
              author="王女士"
              role="大理精品客栈老板"
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary/30 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">灵活透明的价格方案</h2>
            <p className="text-muted-foreground">无隐藏费用，按需选择，随业务增长随时升级</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">起步版</h3>
                <div className="text-3xl font-bold mb-6">¥ 0 <span className="text-sm font-normal text-muted-foreground">/ 月</span></div>
                <p className="text-sm text-muted-foreground mb-6">适合拥有 1-2 套房源的个人房东体验</p>
                <div className="space-y-3 text-sm text-left mb-8 flex-1">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>管理最多 2 套房源</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>基础日历同步</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>手动发送消息</span></div>
                </div>
                <Button variant="outline" className="w-full">免费注册</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative flex flex-col border-primary shadow-lg scale-105 z-10">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">最受欢迎</div>
              <CardContent className="pt-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-primary">专业版</h3>
                <div className="text-3xl font-bold mb-6">¥ 68 <span className="text-sm font-normal text-muted-foreground">/ 房 / 月</span></div>
                <p className="text-sm text-muted-foreground mb-6">全功能解锁，适合职业房东</p>
                <div className="space-y-3 text-sm text-left mb-8 flex-1">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span>无限房源数量</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span>实时秒级同步</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span>智能自动化消息</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span>财务报表</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span>智能门锁对接</span></div>
                </div>
                <Button className="w-full">开始 14 天免费试用</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">企业版</h3>
                <div className="text-3xl font-bold mb-6">定制 <span className="text-sm font-normal text-muted-foreground">价格</span></div>
                <p className="text-sm text-muted-foreground mb-6">适合大型民宿连锁品牌或物业管理公司</p>
                <div className="space-y-3 text-sm text-left mb-8 flex-1">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Open API 接口</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>专属客户经理</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>私有化部署支持</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> <span>多级权限管理</span></div>
                </div>
                <Button variant="outline" className="w-full">联系销售</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好升级您的民宿管理方式了吗？</h2>
          <p className="text-xl text-muted-foreground mb-10">
            加入数万名精明的房东，从今天开始实现自动化运营。无需绑定信用卡，随时可取消。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-lg">
              立即免费注册
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
              联系客服咨询
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="border-none shadow-sm bg-background hover:shadow-md transition-shadow duration-300">
    <CardContent className="pt-6">
      <div className="mb-4 bg-primary/5 w-fit p-3 rounded-xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ content, author, role, image }: { content: string, author: string, role: string, image: string }) => (
  <Card className="h-full">
    <CardContent className="pt-6 h-full flex flex-col">
      <div className="flex gap-1 text-yellow-400 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 flex-1 relative italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <img src={image} alt={author} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Index;