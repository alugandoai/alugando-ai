import { Package, TrendingUp, FileText, ShieldCheck, Zap, Play, X, Check, Monitor, DollarSign, Shield, Truck, Headphones, RefreshCw, BookOpen, Building, GraduationCap, Users, Wrench, Chair, Laptop, Plus } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-verde-vibrante to-verde-escuro rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-cinza-escuro">mealug.ai</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beneficios" className="text-gray-600 hover:text-verde-vibrante transition-colors">Benefícios</a>
              <a href="#comparativo" className="text-gray-600 hover:text-verde-vibrante transition-colors">Comparativo</a>
              <a href="#produtos" className="text-gray-600 hover:text-verde-vibrante transition-colors">Produtos</a>
              <a href="#contato" className="bg-verde-vibrante text-white px-6 py-2 rounded-lg hover:bg-verde-escuro transition-colors">Solicitar Proposta</a>
            </nav>
            <button className="md:hidden">
              <Package className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cinza-escuro leading-tight">
                    Nosso aluguel é tudo que seu 
                    <span className="text-verde-vibrante"> fornecedor atual</span> 
                    não consegue ser.
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Conheça a solução definitiva de aluguel corporativo para acervos e equipamentos.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-verde-vibrante text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-verde-escuro transition-all transform hover:scale-105 shadow-lg">
                    Solicitar proposta agora
                  </button>
                  <button className="border-2 border-verde-vibrante text-verde-vibrante px-8 py-4 rounded-lg text-lg font-semibold hover:bg-verde-vibrante hover:text-white transition-all">
                    <Play className="w-5 h-5 inline mr-2" />
                    Ver demonstração
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-cinza-escuro mb-6">Solicite sua proposta personalizada</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail corporativo</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent" placeholder="Nome da sua empresa" />
                  </div>
                  <button type="submit" className="w-full bg-verde-vibrante text-white py-3 rounded-lg font-semibold hover:bg-verde-escuro transition-colors">
                    Enviar solicitação
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  ✓ Sem compromisso • ✓ Proposta em 24h • ✓ Consultoria gratuita
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cinza-escuro mb-4">Por que escolher o mealug.ai?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme seus ativos em fonte de receita com a plataforma mais inteligente do mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-cinza-gelo hover:shadow-lg transition-all card-hover">
              <div className="w-16 h-16 bg-verde-vibrante rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-2">Previsibilidade Financeira</h3>
              <p className="text-gray-600">Receita recorrente e previsível com contratos flexíveis e transparentes</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-cinza-gelo hover:shadow-lg transition-all card-hover">
              <div className="w-16 h-16 bg-verde-vibrante rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-2">Gestão de Contratos</h3>
              <p className="text-gray-600">Sistema automatizado para controle total de contratos e renovações</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-cinza-gelo hover:shadow-lg transition-all card-hover">
              <div className="w-16 h-16 bg-verde-vibrante rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-2">Proteção de Ativos</h3>
              <p className="text-gray-600">Seguro completo, caução e rastreamento em tempo real</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-cinza-gelo hover:shadow-lg transition-all card-hover">
              <div className="w-16 h-16 bg-verde-vibrante rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-2">Flexibilidade Total</h3>
              <p className="text-gray-600">Adapte-se às necessidades do seu negócio com planos personalizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo Section */}
      <section id="comparativo" className="py-20 bg-cinza-gelo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cinza-escuro mb-4">Comparativo: Tradicional vs mealug.ai</h2>
            <p className="text-xl text-gray-600">Descubra por que empresas estão migrando para o modelo inteligente</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Coluna Tradicional */}
                <div className="p-8 border-r border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-500 mb-2">Modelo Tradicional</h3>
                    <p className="text-gray-600">Aquisição direta</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Alto investimento inicial</h4>
                        <p className="text-sm text-gray-600">Capital imobilizado em ativos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Depreciação constante</h4>
                        <p className="text-sm text-gray-600">Valor diminui com o tempo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Manutenção custosa</h4>
                        <p className="text-sm text-gray-600">Responsabilidade total</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Risco de obsolescência</h4>
                        <p className="text-sm text-gray-600">Tecnologia desatualizada</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coluna mealug.ai */}
                <div className="p-8 bg-gradient-verde text-white">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">mealug.ai</h3>
                    <p className="text-green-100">Aluguel inteligente</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Baixo investimento</h4>
                        <p className="text-sm text-green-100">Pague apenas pelo uso</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Sem depreciação</h4>
                        <p className="text-sm text-green-100">Sempre tecnologia atual</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Manutenção inclusa</h4>
                        <p className="text-sm text-green-100">Suporte completo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Atualização automática</h4>
                        <p className="text-sm text-green-100">Sempre na vanguarda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cinza-escuro mb-4">Empresas que confiam no mealug.ai</h2>
            <p className="text-xl text-gray-600">Junte-se a centenas de organizações que já transformaram seus ativos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-verde-vibrante mb-2">+30.000</div>
              <p className="text-lg text-gray-600">Ativos alugados sem stress</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-verde-vibrante mb-2">+7M</div>
              <p className="text-lg text-gray-600">Em ativos em circulação colaborativa</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-verde-vibrante mb-2">+60</div>
              <p className="text-lg text-gray-600">Segmentos atendidos</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cinza-gelo rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-verde-vibrante" />
              </div>
              <h3 className="font-semibold text-cinza-escuro mb-2">Livraria Educativa</h3>
              <p className="text-sm text-gray-600">Acervo didático compartilhado</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cinza-gelo rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-verde-vibrante" />
              </div>
              <h3 className="font-semibold text-cinza-escuro mb-2">Construtoras AM</h3>
              <p className="text-sm text-gray-600">Equipamentos de construção</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cinza-gelo rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-verde-vibrante" />
              </div>
              <h3 className="font-semibold text-cinza-escuro mb-2">Escola ProFuturo</h3>
              <p className="text-sm text-gray-600">Tecnologia educacional</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cinza-gelo rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-verde-vibrante" />
              </div>
              <h3 className="font-semibold text-cinza-escuro mb-2">Condomínio Solar</h3>
              <p className="text-sm text-gray-600">Mobiliário compartilhado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Operacionais */}
      <section className="py-20 bg-cinza-gelo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cinza-escuro mb-4">Vantagens Operacionais</h2>
            <p className="text-xl text-gray-600">Tudo que você precisa para gerenciar seus ativos com eficiência</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-12 h-12 bg-verde-vibrante rounded-lg flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Controle via Sistema</h3>
              <p className="text-gray-600">Dashboard completo para monitoramento em tempo real de todos os seus ativos alugados</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-12 h-12 bg-verde-vibrante rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Custos Menores por Uso</h3>
              <p className="text-gray-600">Pague apenas pelo que usar, sem desperdícios ou custos ocultos</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-12 h-12 bg-verde-vibrante rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Modelo com Proteção</h3>
              <p className="text-gray-600">Seguro, caução e rastreamento integrados para total segurança</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-12 h-12 bg-verde-vibrante rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Logística Integrada</h3>
              <p className="text-gray-600">Entrega, instalação e retirada incluídos no serviço</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-12 h-12 bg-verde-vibrante rounded-lg flex items-center justify-center mb-6">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Atendimento Corporativo</h3>
              <p className="text-gray-600">Suporte dedicado para empresas com SLA garantido</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-12 h-12 bg-verde-vibrante rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Flexibilidade Total</h3>
              <p className="text-gray-600">Contratos adaptáveis às necessidades do seu negócio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos/Segmentos */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cinza-escuro mb-4">Nossos Segmentos</h2>
            <p className="text-xl text-gray-600">Soluções especializadas para diferentes necessidades empresariais</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Wrench className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Ferramentas e Equipamentos</h3>
                <p className="text-gray-600 mb-4">Aluguel de ferramentas profissionais, equipamentos de construção e maquinário industrial</p>
                <button className="text-verde-vibrante font-semibold hover:text-verde-escuro transition-colors">
                  Saiba mais →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Acervos Didáticos</h3>
                <p className="text-gray-600 mb-4">Bibliotecas digitais, livros técnicos e materiais educacionais para instituições</p>
                <button className="text-verde-vibrante font-semibold hover:text-verde-escuro transition-colors">
                  Saiba mais →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Chair className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Mobiliário Empresarial</h3>
                <p className="text-gray-600 mb-4">Móveis de escritório, salas de reunião e espaços colaborativos</p>
                <button className="text-verde-vibrante font-semibold hover:text-verde-escuro transition-colors">
                  Saiba mais →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Laptop className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Tecnologia Compartilhada</h3>
                <p className="text-gray-600 mb-4">Computadores, tablets, projetores e equipamentos de TI</p>
                <button className="text-verde-vibrante font-semibold hover:text-verde-escuro transition-colors">
                  Saiba mais →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Condomínios e Eventos</h3>
                <p className="text-gray-600 mb-4">Itens para áreas comuns, eventos corporativos e espaços compartilhados</p>
                <button className="text-verde-vibrante font-semibold hover:text-verde-escuro transition-colors">
                  Saiba mais →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <Plus className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Soluções Customizadas</h3>
                <p className="text-gray-600 mb-4">Desenvolvemos soluções específicas para suas necessidades únicas</p>
                <button className="text-verde-vibrante font-semibold hover:text-verde-escuro transition-colors">
                  Fale conosco →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 bg-gradient-verde text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para modernizar sua empresa e ainda economizar?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Junte-se a centenas de empresas que já transformaram seus ativos em fonte de receita
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Nome da empresa" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white" />
                <input type="email" placeholder="E-mail corporativo" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white" />
                <button type="submit" className="w-full bg-white text-verde-escuro py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Fale com nosso time
                </button>
              </form>
            </div>
            
            <p className="text-sm text-green-200 mt-6">
              ✓ Proposta personalizada em 24h • ✓ Consultoria gratuita • ✓ Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cinza-escuro text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-verde-vibrante rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">mealug.ai</span>
              </div>
              <p className="text-gray-400 mb-4">
                Alugue. Lucre. Liberte seu estoque.
              </p>
              <p className="text-sm text-gray-500">
                A solução definitiva de aluguel corporativo para acervos e equipamentos.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ferramentas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Acervos Didáticos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobiliário</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tecnologia</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cases de sucesso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Solicitar proposta</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">contato@mealug.ai</a></li>
                <li><a href="#" className="hover:text-white transition-colors">+55 (11) 99999-9999</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 mealug.ai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
