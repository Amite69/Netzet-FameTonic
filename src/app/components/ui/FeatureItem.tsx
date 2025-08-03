import { FeatureItem } from '../../types';

import Image from 'next/image';

const featureItems: FeatureItem[] = [
  { title: "Start growing your influence right away—no waiting required!" },
  { title: "Create viral TikToks and Reels step by step with easy-to-follow lessons" },
  { title: "Use a Personal AI Worker to boost your content" },
  { title: "Learn from expert-led courses designed for aspiring influencers" },
];


const FeatureItemComponent = ({ title }: { title: string }) => (
  <div className="flex items-center space-x-2">
    <div className="flex items-center justify-center flex-shrink-0 mt-1">
      <Image src="/star.png" alt="star" width={22} height={22} />
    </div>
    <div>
      <h3 className="font-semibold text-[16px]">{title}</h3>
    </div>
  </div>
);


export default function FeatureItemList() {
  return (
    <div className="space-y-2 mb-10">
      {featureItems.map((item, index) => (
        <FeatureItemComponent key={index} title={item.title} />
      ))}
    </div>
  );
}