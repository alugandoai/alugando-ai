import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para os leads
export interface Lead {
  id?: number
  nome: string
  email: string
  empresa: string
  telefone?: string
  segmento?: string
  mensagem?: string
  fonte: 'hero' | 'cta' | 'contato'
  created_at?: string
  status?: 'novo' | 'contatado' | 'proposta_enviada' | 'convertido'
} 