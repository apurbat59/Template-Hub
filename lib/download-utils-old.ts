import JSZip from 'jszip';

export interface Template {
  id: string;
  name: string;
  type: 'dashboard' | 'landing' | 'auth';
  industry: string;
  description: string;
  preview: string;
  code: string;
  dependencies?: string[];
}

// Mock templates data
export const mockTemplates: Record<string, Template> = {
  'healthcare-dashboard-1': {
    id: 'healthcare-dashboard-1',
    name: 'Healthcare Dashboard',
    type: 'dashboard',
    industry: 'healthcare',
    description: 'Modern healthcare dashboard with patient management',
    preview: '/placeholder-dashboard.jpg',
    code: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Activity, Heart, Calendar } from 'lucide-react';

export default function HealthcareDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Healthcare Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}`,
    dependencies: ['react', 'next', 'typescript', 'tailwindcss', 'lucide-react']
  }
};

export async function downloadTemplate(template: Template): Promise<void> {
  try {
    const zip = new JSZip();
    
    // Create the main template file
    const templateFileName = `${template.name.toLowerCase().replace(/\s+/g, '-')}.tsx`;
    zip.file(templateFileName, template.code);
    
    // Create package.json
    const packageJson = {
      name: template.name.toLowerCase().replace(/\s+/g, '-'),
      version: "1.0.0",
      private: true,
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint"
      },
      dependencies: {
        "next": "14.2.16",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "typescript": "^5.5.4",
        "tailwindcss": "^3.4.1",
        "lucide-react": "^0.460.0"
      }
    };
    
    zip.file("package.json", JSON.stringify(packageJson, null, 2));
    
    // Create README.md
    const readme = `# ${template.name}

${template.description}

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Template Details

- **Type**: ${template.type}
- **Industry**: ${template.industry}
- **Description**: ${template.description}
`;
    
    zip.file("README.md", readme);
    
    // Generate and download the ZIP file
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.name.toLowerCase().replace(/\s+/g, '-')}-template.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error('Error creating ZIP file:', error);
    throw new Error('Failed to create download file');
  }
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    throw new Error('Failed to copy to clipboard');
  }
}