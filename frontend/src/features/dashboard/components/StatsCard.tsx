// components/StatsCard.tsx
import { Stat } from '../types';

export const StatsCard = ({ stat }: { stat: Stat }) => (
  <div className="border rounded p-4 text-center bg-white">
    <div className="text-xl font-bold">{stat.value}</div>
    <div className="text-sm text-gray-500">{stat.label}</div>
  </div>
);