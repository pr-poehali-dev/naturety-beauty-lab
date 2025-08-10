import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from '@/components/ui/icon'

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-lavender-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-lavender-500 bg-clip-text text-transparent">
              Naturety Lab
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('distributors')} className="text-sm font-medium hover:text-primary transition-colors">
              Дистрибьюторам
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-sm font-medium hover:text-primary transition-colors">
              Сертификаты
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-lavender-400 to-secondary bg-clip-text text-transparent">
              Красота изнутри
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Премиальные добавки для женской красоты с научно обоснованными составами. 
              Коллаген и витамины высочайшего качества для вашего здоровья и красоты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('products')}
              >
                Смотреть продукцию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('distributors')}
              >
                Стать дистрибьютором
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold mb-4">Наша продукция</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый продукт создан с использованием передовых технологий и натуральных ингредиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/fd5e4a35-083c-4ed3-a87e-b0ea97721beb.jpg" 
                    alt="Коллаген Премиум" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="font-heading text-xl">Коллаген Премиум</CardTitle>
                <CardDescription>
                  Морской коллаген высокой биодоступности для упругости кожи и здоровья суставов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    5000мг коллагена на порцию
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    С витамином C и гиалуроновой кислотой
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Без ГМО и искусственных добавок
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-lavender-200/30 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/ce8b2e9d-3424-43a0-b336-2e3e61127abd.jpg" 
                    alt="Витаминный комплекс" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="font-heading text-xl">Витаминный комплекс</CardTitle>
                <CardDescription>
                  Сбалансированный комплекс витаминов и минералов для женского здоровья
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    12 основных витаминов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Фолиевая кислота и железо
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Поддержка энергии и иммунитета
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-heading font-bold mb-6">О нас</h3>
              <p className="text-gray-600 mb-4">
                Naturety Lab — это результат многолетних исследований в области нутрициологии 
                и косметологии. Мы создаем продукты, которые работают изнутри, 
                обеспечивая красоту и здоровье современной женщины.
              </p>
              <p className="text-gray-600 mb-6">
                Каждая формула разрабатывается совместно с ведущими специалистами 
                и проходит строгий контроль качества на всех этапах производства.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">лет исследований</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-600">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">сертификатов</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <Icon name="Award" size={64} className="text-primary mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-lg mb-2">Качество превыше всего</h4>
              <p className="text-gray-600 text-sm">
                Все наши продукты производятся на сертифицированных предприятиях 
                с соблюдением международных стандартов GMP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distributors Section */}
      <section id="distributors" className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold mb-4">Дистрибьюторам</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к нашей партнерской программе и развивайте бизнес в сфере красоты и здоровья
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6">
              <Icon name="TrendingUp" size={40} className="text-primary mx-auto mb-4" />
              <h4 className="font-heading font-semibold mb-2">Высокая маржинальность</h4>
              <p className="text-sm text-gray-600">До 40% прибыли с каждой продажи</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Users" size={40} className="text-secondary mx-auto mb-4" />
              <h4 className="font-heading font-semibold mb-2">Поддержка продаж</h4>
              <p className="text-sm text-gray-600">Обучение и маркетинговые материалы</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Package" size={40} className="text-lavender-500 mx-auto mb-4" />
              <h4 className="font-heading font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-sm text-gray-600">Отгрузка в течение 24 часов</p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Mail" size={20} className="mr-2" />
              Стать партнером
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold mb-4">Сертификаты и награды</h3>
            <p className="text-gray-600">
              Наше качество подтверждено международными сертификатами
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg border-2 border-dashed border-primary/20">
              <Icon name="Shield" size={48} className="text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-sm">ISO 9001</h4>
              <p className="text-xs text-gray-600">Система менеджмента качества</p>
            </div>
            <div className="text-center p-4 rounded-lg border-2 border-dashed border-secondary/20">
              <Icon name="Leaf" size={48} className="text-secondary mx-auto mb-2" />
              <h4 className="font-semibold text-sm">Organic</h4>
              <p className="text-xs text-gray-600">Органическое производство</p>
            </div>
            <div className="text-center p-4 rounded-lg border-2 border-dashed border-lavender-300/40">
              <Icon name="CheckCircle" size={48} className="text-lavender-500 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">GMP</h4>
              <p className="text-xs text-gray-600">Надлежащая производственная практика</p>
            </div>
            <div className="text-center p-4 rounded-lg border-2 border-dashed border-rose-300/40">
              <Icon name="Star" size={48} className="text-rose-400 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">FDA</h4>
              <p className="text-xs text-gray-600">Одобрено FDA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-gray-600">
              Готовы ответить на все ваши вопросы о продукции и сотрудничестве
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@naturetylab.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-lavender-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-lavender-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-gray-600">Москва, ул. Красоты, 15</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-heading font-semibold mb-4">Напишите нам</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
                <h4 className="text-2xl font-heading font-bold">Naturety Lab</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Красота и здоровье с научным подходом
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Продукция</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Коллаген</li>
                <li>Витамины</li>
                <li>Новинки</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Компания</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Партнерам</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@naturetylab.com</li>
                <li>Москва, ул. Красоты, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Naturety Lab. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index