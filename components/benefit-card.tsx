import type { LucideIcon } from "lucide-react"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

