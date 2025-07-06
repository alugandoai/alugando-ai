import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, empresa, telefone, segmento, mensagem, fonte } = body

    // Validação básica
    if (!nome || !email || !empresa) {
      return NextResponse.json(
        { error: 'Nome, email e empresa são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Inserir lead no Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          nome,
          email,
          empresa,
          telefone: telefone || null,
          segmento: segmento || null,
          mensagem: mensagem || null,
          fonte: fonte || 'contato',
          status: 'novo'
        }
      ])
      .select()

    if (error) {
      console.error('Erro ao inserir lead:', error)
      return NextResponse.json(
        { error: 'Erro interno do servidor' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead capturado com sucesso!',
        data: data[0]
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Erro na API de leads:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 