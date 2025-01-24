import Image from "next/image";

interface AchievementCardProps {
  image: string;
  alt: string;
  description: string;
  metric: string;
}

export function AchievementCard({
  image,
  alt,
  description,
  metric,
}: AchievementCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-6">
      <div className="relative h-[200px] w-full mb-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tighter">{metric}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
