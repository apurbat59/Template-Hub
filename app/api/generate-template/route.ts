import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_KEY = 'AIzaSyDHgreeZlQiHMmd_rUjtYoZTJCAdreXrCc'
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

export async function POST(request: NextRequest) {
  try {
    const { prompt, templateType, industry, features } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    // Build the enhanced prompt for Gemini
    const enhancedPrompt = buildEnhancedPrompt(prompt, templateType, industry, features)
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: enhancedPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        }
      })
    })

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!generatedText) {
      throw new Error('No content generated')
    }

    // Extract and format the code
    const code = extractCodeFromResponse(generatedText)

    return NextResponse.json({ 
      code,
      fullResponse: generatedText,
      templateType,
      industry,
      features 
    })

  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate template' }, 
      { status: 500 }
    )
  }
}

function buildEnhancedPrompt(prompt: string, templateType: string, industry: string, features: string[]) {
  const baseInstructions = `You are an expert React/Next.js developer. Generate a complete, production-ready ${templateType} template based on the user's requirements.

REQUIREMENTS:
- Use Next.js 14 with App Router
- Use TypeScript
- Use Tailwind CSS for styling
- Use shadcn/ui components
- Make it fully responsive
- Include proper TypeScript types
- Follow React best practices
- Include proper error handling
- Make it accessible (WCAG guidelines)
- Use modern React patterns (hooks, functional components)

TEMPLATE TYPE: ${templateType.toUpperCase()}
${industry ? `INDUSTRY: ${industry.toUpperCase()}` : ''}
${features.length > 0 ? `FEATURES: ${features.join(', ')}` : ''}

USER REQUEST: ${prompt}

Please generate a complete React component with:
1. All necessary imports
2. TypeScript interfaces/types
3. Complete component implementation
4. Proper styling with Tailwind CSS
5. Responsive design
6. Accessibility features
7. Error handling
8. Loading states (if applicable)

Return ONLY the complete code, no explanations or markdown formatting.`

  return baseInstructions
}

function extractCodeFromResponse(response: string): string {
  // Try to extract code from markdown code blocks
  const codeBlockMatch = response.match(/```(?:tsx?|jsx?|typescript|javascript)?\n([\s\S]*?)\n```/)
  if (codeBlockMatch) {
    return codeBlockMatch[1].trim()
  }

  // If no code blocks, try to find the main component
  const componentMatch = response.match(/(export default function[\s\S]*?^})/m)
  if (componentMatch) {
    return componentMatch[1].trim()
  }

  // If still no match, return the full response
  return response.trim()
}
