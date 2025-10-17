import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Heart, Users, Phone, Mail, MapPin, ShoppingBag, Award, Sprout, Target, Sparkles, Shield, TrendingUp, CheckCircle, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'products', 'benefits', 'values', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Sprout className={`w-8 h-8 transition-colors ${scrolled ? 'text-green-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              VeggyPop
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Accueil', 'À propos', 'Produits', 'Avantages', 'Valeurs', 'Équipe', 'Contact'].map((item, index) => {
              const id = ['home', 'about', 'products', 'benefits', 'values', 'team', 'contact'][index];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-200'
                  } ${activeSection === id ? 'text-green-600' : ''}`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-slideDown">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {['Accueil', 'À propos', 'Produits', 'Avantages', 'Valeurs', 'Équipe', 'Contact'].map((item, index) => {
                const id = ['home', 'about', 'products', 'benefits', 'values', 'team', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-gray-700 hover:text-green-600 font-medium"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-fadeInUp">
          <Leaf className="w-20 h-20 mx-auto mb-6 text-white animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            VeggyPop
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Des bonbons naturels à base de légumes et de fruits
          </p>
          <p className="text-lg md:text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Une alternative saine et gourmande, sans sucre raffiné, adaptée à tous
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Découvrir nos produits
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Notre Concept</h3>
                <p className="text-gray-600 leading-relaxed">
                  VeggyPop produit des bonbons naturels à base de légumes et de fruits, sans sucre raffiné,
                  riches en fibres et vitamines. C'est une alternative saine et gourmande, adaptée à tous les âges,
                  même aux personnes diabétiques.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 L'Idée de Départ</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous avons voulu transformer les légumes tunisiens — tels que les carottes, betteraves,
                  épinards et courges — en friandises naturelles et savoureuses, pour prouver qu'il est possible
                  de se faire plaisir tout en prenant soin de sa santé.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-slideInRight">
              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💚 Notre Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Offrir une expérience sucrée, saine et responsable, tout en valorisant les produits agricoles tunisiens.
                  Notre mission est de changer la perception du bonbon en proposant une alternative naturelle qui allie
                  plaisir et bien-être.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">👀 Notre Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Devenir une référence tunisienne dans la confiserie naturelle et éducative.
                  Nous voulons démontrer qu'il est possible de créer, innover et entreprendre durablement
                  à partir de ressources locales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nos Produits
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des bonbons naturels fabriqués à partir de légumes et fruits tunisiens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Carotte',
                color: 'from-orange-400 to-orange-600',
                icon: '🥕',
                benefits: ['Riche en vitamine A', 'Améliore la vision', 'Antioxydant puissant'],
                description: 'Douceur naturelle avec une pointe de vanille'
              },
              {
                name: 'Betterave',
                color: 'from-red-400 to-pink-600',
                icon: '🫐',
                benefits: ['Riche en fer', 'Booste l\'énergie', 'Soutient le cœur'],
                description: 'Goût fruité et légèrement terreux'
              },
              {
                name: 'Épinard',
                color: 'from-green-400 to-green-600',
                icon: '🥬',
                benefits: ['Riche en fer', 'Fortifie les os', 'Riche en protéines'],
                description: 'Saveur douce avec une touche de menthe'
              },
              {
                name: 'Courge',
                color: 'from-yellow-400 to-orange-500',
                icon: '🎃',
                benefits: ['Riche en fibres', 'Soutient l\'immunité', 'Vitamine C'],
                description: 'Goût sucré et réconfortant'
              }
            ].map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-56 bg-gradient-to-br ${product.color} flex items-center justify-center text-7xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform">{product.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    VeggyPop {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 text-center italic">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center space-x-2 pt-4 border-t border-gray-100">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">100% Naturel</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Features */}
          <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Sans Additifs</h4>
                <p className="text-gray-600">Aucun colorant ou conservateur artificiel</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Adapté aux Diabétiques</h4>
                <p className="text-gray-600">Sans sucre raffiné, index glycémique bas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Produit Local</h4>
                <p className="text-gray-600">Légumes tunisiens frais et de qualité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pourquoi Choisir VeggyPop ?
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une révolution dans le monde de la confiserie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Pour Tous les Âges',
                description: 'Des enfants aux seniors, VeggyPop convient à toute la famille. Même les personnes diabétiques peuvent en profiter sans inquiétude.',
                color: 'bg-blue-50',
                iconColor: 'text-blue-600'
              },
              {
                icon: Sparkles,
                title: 'Goût Exceptionnel',
                description: 'Qui a dit que sain ne pouvait pas être délicieux ? Nos bonbons allient la douceur naturelle des fruits à la richesse nutritive des légumes.',
                color: 'bg-yellow-50',
                iconColor: 'text-yellow-600'
              },
              {
                icon: TrendingUp,
                title: 'Énergie Durable',
                description: 'Contrairement aux bonbons traditionnels, VeggyPop fournit une énergie stable sans pics de glycémie, grâce à ses sucres naturels et ses fibres.',
                color: 'bg-green-50',
                iconColor: 'text-green-600'
              },
              {
                icon: Star,
                title: 'Innovation Tunisienne',
                description: 'Fiers de valoriser nos légumes locaux, nous créons une confiserie authentiquement tunisienne qui respecte notre terroir et notre santé.',
                color: 'bg-red-50',
                iconColor: 'text-red-600'
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`${benefit.color} p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className={`w-12 h-12 ${benefit.iconColor} mb-4`} />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { number: '0%', label: 'Sucre Raffiné', icon: '🚫' },
              { number: '100%', label: 'Naturel', icon: '🌿' },
              { number: '4', label: 'Variétés', icon: '🎨' },
              { number: '8', label: 'Membres Passionnés', icon: '👥' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Santé', desc: 'Respect du corps et des besoins nutritionnels', color: 'text-red-500' },
              { icon: Leaf, title: 'Innovation', desc: 'Utiliser les légumes dans un produit sucré inédit', color: 'text-green-500' },
              { icon: Sprout, title: 'Responsabilité', desc: 'Produire localement, réduire les déchets', color: 'text-emerald-500' },
              { icon: Users, title: 'Travail d\'équipe', desc: 'Coopération, entraide et motivation', color: 'text-blue-500' },
              { icon: Award, title: 'Qualité', desc: 'Offrir un produit sain, sûr et savoureux', color: 'text-yellow-500' },
              { icon: ShoppingBag, title: 'Respect du client', desc: 'Transparence sur la composition', color: 'text-purple-500' }
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className={`w-12 h-12 ${value.color} mb-4`} />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Notre Équipe
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VeggyPop est une mini-entreprise créée dans le cadre d'un projet pédagogique
              visant à initier les étudiants à la gestion d'entreprise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-12 animate-fadeInUp">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Une équipe de 8 membres passionnés
            </h3>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Chaque membre est responsable d'un département clé, unis par la même passion :
              innover pour une alimentation plus saine et responsable. Notre équipe travaille
              ensemble pour transformer une idée simple en une entreprise qui fait la différence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contactez-nous
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all animate-fadeInUp">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Adresse</h3>
              <p className="text-gray-600">
                Rue de l'Agriculture<br />
                Tunis, Tunisie
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all animate-fadeInUp animation-delay-200">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Téléphone</h3>
              <p className="text-gray-600">
                <a href="tel:71800901" className="hover:text-green-600 transition-colors">
                  71 800 901
                </a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all animate-fadeInUp animation-delay-400">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@veggypop.tn" className="hover:text-green-600 transition-colors">
                  contact@veggypop.tn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Sprout className="w-8 h-8" />
              <span className="text-2xl font-bold">VeggyPop</span>
            </div>

            <div className="text-center md:text-center mb-6 md:mb-0">
              <p className="text-green-100 mb-2">
                Une alternative saine et gourmande pour tous
              </p>
              <p className="text-green-200 text-sm">
                © 2024 VeggyPop. Tous droits réservés.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-green-100 text-sm mb-1">
                Site créé par
              </p>
              <p className="text-white font-semibold">
                Ons Yahyaoui & Karima Trayia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
