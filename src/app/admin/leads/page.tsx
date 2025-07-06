'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Lead } from '@/lib/supabase'
import { Package, Mail, Building, Calendar, Eye, Phone, MessageSquare } from 'lucide-react'

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    novos: 0,
    contatados: 0,
    propostas: 0,
    convertidos: 0
  })

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      setLoading(true)
      
      // Buscar leads
      const { data: leadsData, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setLeads(leadsData || [])

      // Calcular estatísticas
      const total = leadsData?.length || 0
      const novos = leadsData?.filter(l => l.status === 'novo').length || 0
      const contatados = leadsData?.filter(l => l.status === 'contatado').length || 0
      const propostas = leadsData?.filter(l => l.status === 'proposta_enviada').length || 0
      const convertidos = leadsData?.filter(l => l.status === 'convertido').length || 0

      setStats({ total, novos, contatados, propostas, convertidos })

    } catch (error) {
      console.error('Erro ao buscar leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: number, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', leadId)

      if (error) throw error

      // Atualizar lista local
      setLeads(prev => prev.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      ))

      // Recarregar estatísticas
      fetchLeads()

    } catch (error) {
      console.error('Erro ao atualizar status:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'novo': return 'bg-blue-100 text-blue-800'
      case 'contatado': return 'bg-yellow-100 text-yellow-800'
      case 'proposta_enviada': return 'bg-purple-100 text-purple-800'
      case 'convertido': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getFonteColor = (fonte: string) => {
    switch (fonte) {
      case 'hero': return 'bg-green-100 text-green-800'
      case 'cta': return 'bg-orange-100 text-orange-800'
      case 'contato': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-verde-vibrante rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cinza-escuro">Dashboard de Leads</h1>
            <p className="text-gray-600">Gerencie os leads capturados pelo site</p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Leads</p>
                <p className="text-2xl font-bold text-cinza-escuro">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Novos</p>
                <p className="text-2xl font-bold text-blue-600">{stats.novos}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Contatados</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.contatados}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Propostas</p>
                <p className="text-2xl font-bold text-purple-600">{stats.propostas}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Convertidos</p>
                <p className="text-2xl font-bold text-green-600">{stats.convertidos}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Leads */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-cinza-escuro">Leads Recentes</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {leads.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Nenhum lead capturado ainda.</p>
                <p className="text-sm">Os leads aparecerão aqui quando forem enviados pelo site.</p>
              </div>
            ) : (
              leads.map((lead) => (
                <div key={lead.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-cinza-escuro">{lead.nome}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status || 'novo')}`}>
                          {lead.status || 'novo'}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getFonteColor(lead.fonte)}`}>
                          {lead.fonte}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>{lead.empresa}</span>
                        </div>
                        {lead.telefone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>{lead.telefone}</span>
                          </div>
                        )}
                      </div>
                      
                      {lead.segmento && (
                        <p className="text-sm text-gray-500 mt-2">
                          <strong>Segmento:</strong> {lead.segmento}
                        </p>
                      )}
                      
                      {lead.mensagem && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {lead.mensagem}
                        </p>
                      )}
                      
                      <div className="flex items-center space-x-2 mt-3 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>Capturado em {formatDate(lead.created_at || '')}</span>
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      <select
                        value={lead.status || 'novo'}
                        onChange={(e) => updateLeadStatus(lead.id!, e.target.value)}
                        className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-verde-vibrante focus:border-transparent"
                      >
                        <option value="novo">Novo</option>
                        <option value="contatado">Contatado</option>
                        <option value="proposta_enviada">Proposta Enviada</option>
                        <option value="convertido">Convertido</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 