'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

interface LeadFormProps {
  fonte: 'hero' | 'cta' | 'contato'
  className?: string
  variant?: 'default' | 'minimal'
}

export default function LeadForm({ fonte, className = '', variant = 'default' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    segmento: '',
    mensagem: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fonte
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar formulário')
      }

      setStatus('success')
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        segmento: '',
        mensagem: ''
      })

      // Reset status após 3 segundos
      setTimeout(() => setStatus('idle'), 3000)

    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro inesperado')
      
      // Reset error após 5 segundos
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome da empresa"
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail corporativo"
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-white text-verde-escuro py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : status === 'success' ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Enviado com sucesso!
            </>
          ) : (
            'Fale com nosso time'
          )}
        </button>
        
        {status === 'error' && (
          <p className="text-red-300 text-sm text-center">{errorMessage}</p>
        )}
      </form>
    )
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 ${className}`}>
      <h3 className="text-2xl font-bold text-cinza-escuro mb-6">Solicite sua proposta personalizada</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
            placeholder="Seu nome"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">E-mail corporativo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
            placeholder="seu@email.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
            placeholder="Nome da sua empresa"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Telefone (opcional)</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Segmento de interesse (opcional)</label>
          <select
            name="segmento"
            value={formData.segmento}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
          >
            <option value="">Selecione um segmento</option>
            <option value="ferramentas">Ferramentas e Equipamentos</option>
            <option value="acervos">Acervos Didáticos</option>
            <option value="mobiliario">Mobiliário Empresarial</option>
            <option value="tecnologia">Tecnologia Compartilhada</option>
            <option value="condominios">Condomínios e Eventos</option>
            <option value="customizado">Solução Customizada</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
            placeholder="Conte-nos mais sobre suas necessidades..."
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-verde-vibrante text-white py-3 rounded-lg font-semibold hover:bg-verde-escuro transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : status === 'success' ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Enviado com sucesso!
            </>
          ) : (
            'Enviar solicitação'
          )}
        </button>
        
        {status === 'error' && (
          <p className="text-red-600 text-sm text-center">{errorMessage}</p>
        )}
      </form>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        ✓ Sem compromisso • ✓ Proposta em 24h • ✓ Consultoria gratuita
      </p>
    </div>
  )
} 